<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use SebastianBergmann\Environment\Console;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class Profile extends Controller
{

    
    public function Profile()
    {
        // $ma_coop = DB::connection('oracle')->select("select * from MA_COOP");
        // $ucf_officer = DB::connection('oracle')->select("select * from UCF_OFFICER");
        // $ucf_inform_type = DB::connection('oracle')->select("select * from UCF_INFORM_TYPE");
        // $ucf_customer_contact = DB::connection('oracle')->select("select * from UCF_CUSTOMER_CONTACT");
        // $ucf_application = DB::connection('oracle')->select("select * from UCF_APPLICATION");

        // // $EditOderPage = DB::select("", [1]);


        // return response()->json(compact('ma_coop', 'ucf_officer','ucf_inform_type','ucf_customer_contact','ucf_application'));



        $user = Auth::user();

        $Profile = DB::table("officers")->where('id', '=', $user->id)->first();
        // dd($Profile);
        $Position = DB::select("SELECT
        *
        FROM officers
        left join roles_officer on roles_officer.id = officers.role_id
        where officers.id =  $user->id");
        // dd($Position);





        return response()->json(['Profile' => $Profile, 'Position' => $Position]);
        // dd($menu);

    }

    public function Editprofile(Request $request)
    {

        $user = Auth::user();

        if ($user) {
        //     $Editname = DB::select("UPDATE officers
        // SET name = $request->inputName ,email = $request->inputEmail
        // where id = $user->id ");

        $Editname = DB::table('officers')->where('id',$user->id)
        ->update(['name'=>$request->inputName,'email'=>$request->inputEmail]);

            if ($Editname) {

                return response()->json(['rc_code' => '1','message'=>'เปลี่ยนแปลงข้อมูลเสร็จแล้วนะ ']);
            }
            else
            {
                return response()->json(['rc_code' => '0','message'=>'อัพเดทไม่สำเสร็จ!!!! ']);

            }
        }

                return response()->json(['rc_code' => '-1','message'=>'ค้นหาชื่อผู้ใช้ไม่พบ!!!! ']);
    }




    public function Editpassword(Request $request)
    {

        $user = Auth::user();

        if ($user) {
            $Getuser = DB::table('officers')->where('id',$user->id)->first();

            $oldpassword = $Getuser->password;



        $plain  = $request->OldPassword;
        if(Hash::check($plain, $oldpassword)){

            $Editpassword = DB::table('officers')->where('id',$user->id)
        ->update(['password'=>Hash::make($request->NewPassword)]);

            if ($Editpassword) {

                return response()->json(['rc_code' => '1','message'=>'เปลี่ยนแปลงรหัสผ่านเสร็จแล้วนะ ']);
            }
            else
            {
                return response()->json(['rc_code' => '0','message'=>'อัพเดทไม่สำเสร็จ!!!! ']);

            }
        }

        }
                return response()->json(['rc_code' => '-1','message'=>'รหัสผ่านเดิมไม่ถูกต้อง!!!! ']);
    }



}
