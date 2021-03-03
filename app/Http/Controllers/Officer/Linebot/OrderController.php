<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Http\Controllers\Controller;
use App\Model\Officer\ucfOfficer as User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    // public function getOrder(Request $request)
    // {
    //     $user = User::where('userId', $request->userId)->first();

    //     $data = DB::select("SELECT
    //                 inform_head.inform_no,
    //                 inform_head.coop_id,
    //                 inform_head.receive_date,
    //                 inform_detail.inform_description
    //             FROM
    //                 inform_head,
    //                 inform_detail
    //             where
    //                 inform_head.inform_no = inform_detail.inform_no
    //                 and inform_head.coop_id = :coopID
    //             order by receive_date desc
    //                 ", [ 'coopID' => $user->officer_id ]);

    //     return response()->json(['massage' => 'Success.', 'data' => $data]);
    // }

    public function getOrder(Request $request){
        // ดึงข้อมูล user จาก Request
        $user = User::where('userId', $request->userId)->first();
        // ดึง order ทั้งหมดมา นับจำนวนข้อมูล
        $num = DB::select("SELECT
            count(1) as num
            FROM
            inform_head
            where  inform_head.coop_id = '".$user->officer_id."'
            ");
 // กำหนด column ใน table มา search หรือ เรียงลำดับ
        $columns = array(
            0 => 'inform_head.inform_no',
            1 => 'inform_head.receive_date',
        );
        // ตัวแปร จำนวนนับแถวทั้งหมด
        $totalData = $num[0]->num;
        // dd($num[0]->num);
        // ตัวแปร จำนวนนับแถวทั้งหมด
        $totalFiltered = $totalData;
        // จำนวนแถวที่ส่งมาจากหน้าบ้าน
        $limit = $request->input('length');
        // จำนวนข้อมูลทีเริ่มแถว
        $start = $request->input('start');
        // การเรียงลำดับ
        $order = $columns[$request->input('order.0.column')];
        // ประเภทการเรียง มากไปน้อย หรือ น้อยไปมาก
        $dir = $request->input('order.0.dir');
        // Select มาปกติ ------------
        $sql = "SELECT
        inform_head.inform_no as inform_no,
                    inform_head.coop_id as coop_id,
                    inform_head.receive_date as receive_date,
                    inform_detail.inform_description as inform_description,
                    status_des as status_des,
                    onsite_date as onsite_date
                    FROM
                    soatdevp_soat.inform_head,
                    soatdevp_soat.inform_detail,
                   soatdevp_soat.ucf_status
                where
                    inform_head.inform_no = inform_detail.inform_no
                    and inform_head.finished_status = ucf_status.status
                    and inform_head.coop_id = '".$user->officer_id."'
                    ";
        // -------------------------------- เรียงลำดับ
                    $orderby = "  ORDER BY $order $dir";

        // ถ้าลูกค้่าเลือกแสดงข้อมูลทั้งหมดจะเป็น -1
        if ($limit === "-1") {
            if (empty($request->input('search.value'))) {
                $posts = DB::select($sql.$orderby);
            } else {
                $search = $request->input('search.value');

                $sh = " AND inform_head.inform_no LIKE '%$search%'";
                $posts = DB::select($sql.$sh.$orderby);
            }

        }
    //    การแสดงแบบปกติ
        else {
            // ถ้าไม่มีการค้นหาให้ทำอันนี้
            if (empty($request->input('search.value'))) {
                 // ดึงข้อมูลจาก database
                $posts = DB::select($sql.$orderby."  limit ".$start." , ".($limit + $start)." ");
                // dd($posts);
            }
            // ทำเมื่อมีการค้นหา
            else {
                // รับตัวแปรค้นหา
                $search = $request->input('search.value');
                // ตัวแปรค้นหาจาก input
                $sh = " AND inform_head.inform_no LIKE '%$search%'";
                // ดึงข้อมูลจาก database
                $posts = DB::select($sql.$sh.$orderby."  limit ".$start." , ".($limit + $start)." ");

                // นับข้อมูลที่ค้นหาได้
                $num = DB::select("SELECT
                count(1) as num
                FROM
                inform_head
                where inform_head.inform_no LIKE '%$search%'");
                // รวมจำนวนนับข้อมูลที่ค้นหาได้
                $totalFiltered = $num[0]->num;
            }
        }

        // ข้อมูลส่งกลับ ไม่จำเป็นไม่ต้องแก้
        $json_data = array(
            "draw"            => intval($request->input('draw')),
            "recordsTotal"    => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data"            => $posts
        );

        return response()->json($json_data);
    }
}
