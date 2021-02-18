<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class OrderPageController extends Controller
{
    public function editOrder()
    {
        $ma_coop = DB::connection('oracle')->select("select * from MA_COOP");
        $ucf_officer = DB::connection('oracle')->select("select * from UCF_OFFICER");
        $ucf_inform_type = DB::connection('oracle')->select("select * from UCF_INFORM_TYPE");
        $ucf_customer_contact = DB::connection('oracle')->select("select * from UCF_CUSTOMER_CONTACT");
        $ucf_application = DB::connection('oracle')->select("select * from UCF_APPLICATION");

        // $EditOderPage = DB::select("", [1]);


        return response()->json(compact('ma_coop', 'ucf_officer','ucf_inform_type','ucf_customer_contact','ucf_application'));


    }

}
