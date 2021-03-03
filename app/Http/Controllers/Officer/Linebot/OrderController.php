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
        $user = User::where('userId', $request->userId)->first();
        dd($user);
        // $infrom = DB::connection('oracle')->select();
        $num = DB::select("SELECT
            count(1) as num
            FROM
            inform_head");

        $columns = array(
            0 => 'c.inform_no',
            1 => 'c.inform_description',
        );

        $totalData = $num[0]->num;

        // dd($num[0]->num);

        $totalFiltered = $totalData;

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $sql = "SELECT
        inform_head.inform_no as inform_no,
                    inform_head.coop_id as coop_id,
                    inform_head.receive_date as receive_date,
                    inform_detail.inform_description as inform_description,
                    status_des as status_des
                    FROM
                    soatdevp_soat.inform_head,
                    soatdevp_soat.inform_detail,
                   soatdevp_soat.ucf_status
                where
                    inform_head.inform_no = inform_detail.inform_no
                    and inform_head.finished_status = ucf_status.status
                    and inform_head.coop_id = '".$user->officer_id."'
                    ";
                    $orderby = "  ORDER BY $order $dir";
        if ($limit === "-1") {
            if (empty($request->input('search.value'))) {
                $posts = DB::select($sql.$orderby);
            } else {
                $search = $request->input('search.value');

                $sh = " AND inform_head.inform_no LIKE '%$search%'";
                $posts = DB::select($sql.$sh.$orderby);
            }
        } else {
            if (empty($request->input('search.value'))) {
                $posts = DB::select($sql.$orderby."limit ".$start." ".($limit + $start)." ");
            } else {
                $search = $request->input('search.value');

                $sh = " AND inform_head.inform_no LIKE '%$search%'";
                $posts = DB::select($sql.$sh.$orderby."limit ".$start." ".($limit + $start)." ");


                $num = DB::select("SELECT
                count(1) as num
                FROM
                inform_head
                where inform_head.inform_no LIKE '%$search%'");

                $totalFiltered = $num[0]->num;
            }
        }
        $json_data = array(
            "draw"            => intval($request->input('draw')),
            "recordsTotal"    => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data"            => $posts
        );

        return response()->json($json_data);
    }
}
