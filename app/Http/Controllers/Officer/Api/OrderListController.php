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
        // $ma_coop = DB::connection('oracle')->select("select * from MA_COOP");
        // $ucf_officer = DB::connection('oracle')->select("select * from UCF_OFFICER");
        // $ucf_inform_type = DB::connection('oracle')->select("select * from UCF_INFORM_TYPE");
        // $ucf_customer_contact = DB::connection('oracle')->select("select * from UCF_CUSTOMER_CONTACT");
        // $ucf_application = DB::connection('oracle')->select("select * from UCF_APPLICATION");

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
            inform_head,
            ma_coop,
            ucf_inform_type
        WHERE
                inform_head.coop_id = ma_coop.coop_id
            -- AND ( inform_head.receive_date BETWEEN :adtm_start AND :adtm_stop )
                AND ucf_inform_type.inform_type = inform_head.inform_type
                -- and inform_no = '6312020040'
                -- and EXTRACT(year FROM receive_date) = 2021
                -- ORDER BY inform_head.receive_date DESC
        ";

        // $infrom = DB::connection('oracle')->select();

        $num = DB::connection('oracle')->select("SELECT
            count(1) as num
            FROM
            inform_head");

        $columns = array(
            0 => 'inform_head.inform_no',
            1 => 'ma_coop.coop_name',
        );

        $totalData = $num[0]->num;

        // dd($num[0]->num);

        $totalFiltered = $totalData;

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if ($limit === "-1") {
            if (empty($request->input('search.value'))) {
                $posts = DB::connection('oracle')->select($sql . " ORDER BY $order $dir");
            } else {
                $search = $request->input('search.value');

                $posts = DB::connection('oracle')->select($sql . " where inform_head.inform_no LIKE %$search%  ORDER BY $order $dir");

                // $posts = $data->where('No', 'LIKE', "%{$search}%")
                //     ->orWhere('Question', 'LIKE', "%{$search}%")
                //     ->orderBy($order, $dir)
                //     ->get();
                $num = DB::connection('oracle')->select("SELECT
                    count(1) as num
                    FROM
                    inform_head
                    where inform_head.inform_no LIKE %$search%
                    ORDER BY $order $dir");

                $totalFiltered = $num[0]->num;
            }
        } else {
            if (empty($request->input('search.value'))) {
                // $posts = DB::connection('oracle')->select($sql . " and rownum > $start and rownum <= " . ($limit + $start) . "  ORDER BY $order $dir");

                dd($sql . " and numrow > $start and numrow <= " . ($limit + $start) . "  ORDER BY $order $dir");
            } else {
                $search = $request->input('search.value');

                $posts = DB::connection('oracle')->select($sql . " and inform_head.inform_no LIKE %$search% and (rownum > $start and rownum <= " . $limit + $start . ")  ORDER BY $order $dir");

                // $posts = $data->where('No', 'LIKE', "%{$search}%")
                //     ->orWhere('Question', 'LIKE', "%{$search}%")
                //     ->offset($start)
                //     ->limit($limit)
                //     ->orderBy($order, $dir)
                //     ->get();

                $num = DB::connection('oracle')->select("SELECT
                count(1) as num
                FROM
                inform_head
                where inform_head.inform_no LIKE %$search%
                ORDER BY $order $dir");

                $totalFiltered = $num[0]->num;
            }
        }

        // dd($posts);

        // if (empty($request->input('search.value'))) {
        //     $posts = $data->offset($start)
        //         ->limit($limit)
        //         ->orderBy($order, $dir)
        //         ->get();
        // } else {
        //     $search = $request->input('search.value');

        //     $posts = $data->where('No', 'LIKE', "%{$search}%")
        //         ->orWhere('Question', 'LIKE', "%{$search}%")
        //         ->offset($start)
        //         ->limit($limit)
        //         ->orderBy($order, $dir)
        //         ->get();

        //     $totalFiltered = $data->where('No', 'LIKE', "%{$search}%")
        //         ->orWhere('Question', 'LIKE', "%{$search}%")
        //         ->count();
        // }

        $json_data = array(
            "draw"            => intval($request->input('draw')),
            "recordsTotal"    => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data"            => $posts
        );

        return response()->json($json_data);
    }
}
