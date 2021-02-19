<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class OrderListController extends Controller
{
    public function feedInform()
    {
        // $ma_coop = DB::connection('oracle')->select("select * from MA_COOP");
        // $ucf_officer = DB::connection('oracle')->select("select * from UCF_OFFICER");
        // $ucf_inform_type = DB::connection('oracle')->select("select * from UCF_INFORM_TYPE");
        // $ucf_customer_contact = DB::connection('oracle')->select("select * from UCF_CUSTOMER_CONTACT");
        // $ucf_application = DB::connection('oracle')->select("select * from UCF_APPLICATION");

        $infrom = DB::connection('oracle')->select("SELECT
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
                    and EXTRACT(year FROM receive_date) = 2021
            ORDER BY
                inform_head.receive_date DESC");

       // $EditOderPage = DB::select("", [1]);
        return response()->json(compact('infrom'));
    }
}

