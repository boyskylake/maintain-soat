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

        // $ma_coop = DB::connection('oracle')->select("SELECT *FROM ma_coop");

        // $to_tal =DB::connection('oracle')->select("SELECT * FROM ma_contract_head;");


        // $EditOderPage = DB::select("", [1]);


        return response()->json(compact('ma_coop'));
    }
}
