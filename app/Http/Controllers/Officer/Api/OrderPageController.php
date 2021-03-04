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


        return response()->json(compact('ma_coop', 'ucf_officer', 'ucf_inform_type', 'ucf_customer_contact', 'ucf_application'));
    }
    // หน้าแรก
    public function page_one(Request $request)
    {
        // dd($request);
        // if()
        //   $SESSION_TOKEN =  $request->session()->token()
        //   $request->session()->put('key', 'value');
        // if ($request->session()->token() != $request->_token) {
        if (!$request->_token) {
            return response()->json([
                'rc_code' => '-1',
                'message' => "ขออภัยการเชื่อมต่อของคุณไม่ถูกต้อง"
            ], 500);
        } else {

            // dd($request);
            $request->session()->put('pageone', '1');
            $request->session()->put('appointment_date', $request->appointment_date);
            $request->session()->put('coopid', $request->coopid);
            $request->session()->put('dateRevice', $request->dateRevice);
            $request->session()->put('doc_make', $request->doc_make);
            $request->session()->put('editor1', $request->editor1);
            $request->session()->put('inform_no', $request->inform_no);
            $request->session()->put('informer', $request->informer);
            $request->session()->put('r3', $request->r3);
            $request->session()->put('receive_date', $request->receive_date);
            $request->session()->put('receiver', $request->receiver);
            $request->session()->put('_token', $request->_token);
            // ,'appointment_date'
            // ,'coopid'
            // ,'dateRevice'doc_make
            // ,'doc_make'
            // ,'editor1'
            // ,'inform_no'
            // ,'informer'
            // ,'r3'
            // ,'receive_date'
            // ,'receiver'
            // ,'_token'

            return response()->json([
                'rc_code' => '1',
                'message' => "หน้าแรกสำเร็จ",
                'data'=> $request->json()->all()
            ], 200);
        }

        return response()->json(compact('request'));
    }
}
