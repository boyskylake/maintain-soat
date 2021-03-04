<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\CodeCoverage\Report\Xml\Totals;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class HomeController extends Controller
{
    public function allMacoop()
    {
        $ma_coop = DB::connection('oracle')->select("SELECT
                COUNT(coop_name)     AS countcoop,
                COUNT(contract_remark)     AS contract_remark
            FROM
                ma_coop");


        $grahp1 =DB::connection('oracle')->select("select
                ma_contract_head.group_type,
                ucf_category.category_des,
                count(1) as value
            from
                ma_contract_head
                left join ucf_category on ma_contract_head.group_type = ucf_category.category_TYPE
            GROUP BY ma_contract_head.group_type, ucf_category.category_des");

        $grahp2 =DB::connection('oracle')->select("select
                TO_CHAR(CONTRACT_DATE, 'YYYY') as years,
                (select
                    count(1)
                from
                    ma_contract_head ma_h2
                where
                    TO_CHAR(ma_h2.contract_date, 'YYYY') = TO_CHAR(ma_contract_head.contract_date, 'YYYY')
                    and ma_h2.group_type = '01'
                ) as Software,
                (select
                    count(1)
                from
                    ma_contract_head ma_h2
                where
                    TO_CHAR(ma_h2.contract_date, 'YYYY') = TO_CHAR(ma_contract_head.contract_date, 'YYYY')
                    and ma_h2.group_type = '02'
                ) as Hardware,
                (select
                    count(1)
                from
                    ma_contract_head ma_h2
                where
                    TO_CHAR(ma_h2.contract_date, 'YYYY') = TO_CHAR(ma_contract_head.contract_date, 'YYYY')
                    and (ma_h2.group_type = '05' or  ma_h2.group_type = ' ')
                ) as other
            from
                ma_contract_head
            where
                TO_CHAR(CONTRACT_DATE, 'YYYY') >= ( to_char(CURRENT_DATE, 'YYYY') - 5 )
            GROUP BY TO_CHAR(CONTRACT_DATE, 'YYYY')
            ORDER by years desc");

        // $ma_coop = DB::connection('oracle')->select("SELECT *FROM ma_coop");

        // $to_tal =DB::connection('oracle')->select("SE CT * FROM ma_contract_head;");


        // $EditOderPage = DB::select("", [1]);


        return response()->json(compact('ma_coop', 'grahp1', 'grahp2'));
    }
}
