<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class OrderListController extends Controller
{
    public function feedInform(Request $request)
    {
        $sh = "";


        // $infrom = DB::connection('oracle')->select();

        $num = DB::connection('oracle')->select("SELECT
            count(1) as num
            FROM
            inform_head");

        $columns = array(
            0 => 'c.inform_no',
            1 => 'c.RECEIVER',
        );

        $totalData = $num[0]->num;

        // dd($num[0]->num);

        $totalFiltered = $totalData;

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');


        $sql = "SELECT
            inform_head.inform_no,
            inform_head.coop_id,
            inform_head.informer,
            inform_head.receiver,
            inform_head.receive_date,
            inform_head.ref_doc_no,
            '        '  AS receive_date_tdate,
            ma_coop.coop_name,
            inform_head.sum_order_rate,
            inform_head.count_order_rate,
            inform_head.finished_status,
            inform_head.editor_id,
            inform_head.finished_date,
            '        '  AS finished_date_tdate,
            method_status,
            inform_head.inform_type,
            coop_shortname,
            onsite_date,
            '        '  AS onsite_date_tdate,
            remark_cancel,
            express_status,
            ucf_inform_type.group_type,
            inform_head.appointment_date,
            '        '  AS appointment_date_tdate,
            entry_date
        FROM
                (
                SELECT
                    ROW_NUMBER()
                    OVER(
                        ORDER BY $order $dir
                    ) rn,
                    c.*
                FROM
                    inform_head c
                $sh
            ) inform_head,
            ma_coop,
            ucf_inform_type
        WHERE
                inform_head.coop_id = ma_coop.coop_id
            -- AND ( inform_head.receive_date BETWEEN :adtm_start AND :adtm_stop )
                AND ucf_inform_type.inform_type = inform_head.inform_type
                -- and inform_no = '6312020040'
        ";

        if ($limit === "-1") {
            if (empty($request->input('search.value'))) {
                $posts = DB::connection('oracle')->select($sql);
            } else {
                $search = $request->input('search.value');

                $sh = " where c.inform_no LIKE '%$search%'";

                $posts = DB::connection('oracle')->select($sql . " where inform_head.inform_no LIKE '%$search%'");

                $num = DB::connection('oracle')->select("SELECT
                    count(1) as num
                    FROM
                    inform_head
                    where inform_head.inform_no LIKE '%$search%'");

                $totalFiltered = $num[0]->num;
            }
        } else {
            if (empty($request->input('search.value'))) {
                $posts = DB::connection('oracle')->select($sql . " and (rn > $start and rn <= " . ($limit + $start) . ")");
            } else {
                $search = $request->input('search.value');

                $sh .= " where c.inform_no LIKE '%$search%'";

                $posts = DB::connection('oracle')->select($sql . " and inform_head.inform_no LIKE '%$search%' and (rn > $start and rn <= " . ($limit + $start) . ")");

                dd($sql . " and inform_head.inform_no LIKE '%$search%' and (rn > $start and rn <= " . ($limit + $start) . ")");

                $num = DB::connection('oracle')->select("SELECT
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
