<?php

namespace App\Http\Controllers\Officer\Api\Auth;

use App\Http\Controllers\Controller;
use App\Model\Officer\User as User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
// use Jenssegers\Agent\Agent;
use Laravel\Passport\Client;
use Lcobucci\JWT\Parser;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    use IssueTokenTrait;

    private $client;

    public function __construct()
    {
        $this->client = Client::where('password_client', 1)->first();
    }

    public function login(Request $request)
    {
        // $req = $request->json()->all();

        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        if (!Auth::guard()->attempt($this->credentials($request)))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        // $this->addHistoryMember($request, 'login');

        return $this->issueToken($request, 'password');
    }

    public function register(Request  $request)
    {
        $data = $request->json()->all();
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];

        $this->validate($request, $rules);

        // dd($data['name']);

        User::create([
            'name' => $data['name'],
            'email' => $data['username'],
            'password' => Hash::make($data['password']),
        ]);

        // $envsecret = config('auth.SECRET_AUTH');

        // $date = date('Y-m-d H:i:s');

        // $user = User::create([
        //     'membership_no' => $req['membership_no'],
        //     'mem_email' =>  null,
        //     'phone_no' => null,
        //     'mem_password_soat' => SoatEncode($req['mem_password']),
        //     'mem_password' => hash_hmac('sha256', $req['mem_password'], $envsecret),
        //     'mem_confirm' => 1,
        //     'operate_date' => $date,
        // ]);

        // if ($user) {
            // $this->addHistoryMember($request, 'register');
            // return response()->json([
            //     'rc_code' => '1',
            //     'messages' => 'ลงทะเบียนสำเร็จ'
            // ]);
        // }

        return $this->issueToken($request, 'password');
    }

    public function forget(Request $request)
    {
        $req = $request->json()->all();
        $rules = [
            'membership_no' => 'required|exists:sm_mem_m_membership_registered,membership_no,member_status_code,0|exists:sc_confirm_register,membership_no,mem_confirm,1|max:7',
            'id_card' => [
                'required',
                'exists:sm_mem_m_membership_registered',
                Rule::exists('sm_mem_m_membership_registered')->where('membership_no', $req['membership_no']),
            ],
            'date_of_birth' => [
                'required',
                'exists:sm_mem_m_membership_registered',
                Rule::exists('sm_mem_m_membership_registered')->where('membership_no', $req['membership_no']),
            ]
        ];

        $this->validate($request, $rules, $this->messages());

        //TODO Handle your data
        $envsecret = config('auth.SECRET_AUTH');

        // $date = date('Y-m-d H:i:s');

        $user = User::where('membership_no', $req['membership_no'])
            ->update(array(
                'mem_password' => hash_hmac('sha256', $request->mem_password, $envsecret)
            ));

        if ($user) {
            // $this->addHistoryMember($request, 'forget');
            return response()->json([
                'rc_code' => '1',
                'messages' => 'เปลี่ยนรหัสผ่านสำเร็จ'
            ]);
        }

        // return $this->issueToken($request, 'password');
    }

    public function logout(Request $request)
    {
        $value = $request->bearerToken();
        $id = (new Parser())->parse($value)->getClaim('jti');

        if (!$this->guard()->check() and $value) {
            DB::table('oauth_access_tokens')
                ->where('id', $id)
                ->update(['revoked' => true]);

            DB::table('oauth_refresh_tokens')
                ->where('access_token_id', $id)
                ->update(['revoked' => true]);

            // $this->guard()->logout();

            return response()->json([
                'message' => 'Successfully logged out accessToken Expired'
            ], 200);
        } else {
            $accessToken = $this->guard()->user()->token();

            DB::table('oauth_refresh_tokens')
                ->where('access_token_id', $accessToken->id)
                ->update(['revoked' => true]);

            $accessToken->revoke();

            // $this->guard()->logout();

            return response()->json([
                'message' => 'Successfully logged out accessToken revoked'
            ], 200);
        }

        return response()->json([
            'message' => 'Unauthorized'
        ], 401);
    }

    public function refresh(Request $request)
    {
        $this->validate($request, [
            'refresh_token' => 'required'
        ]);

        // $this->addHistoryMember($request, 'refresh');

        return $this->issueToken($request, 'refresh_token');
    }

    public function user()
    {
        dd('fesdsvv');
        return response()->json($this->guard()->user());
    }

    protected function credentials(Request $request)
    {
        $req = $request->json()->all();
        return [
            'email' => $req['username'],
            'password' => $req['password']
        ];
    }

    protected function guard()
    {
        return Auth::guard('api');
    }

    public function messages()
    {
        return [
            'membership_no.required' => 'กรุณากรอก หมายเลขสมาชิก',
            'membership_no.exists' => 'สมาชิกเลขที่ :input นี้ ไม่ตรงกับระบบ',
            'membership_no.unique' => 'สมาชิกเลขที่ :input นี้ สมัครเป็นสมาชิกแล้ว',
            'membership_no.max' => 'จำนวน หมายเลขสมาชิก ไม่ถูกต้อง',
            'id_card.required' => 'กรุณากรอก หมายเลขบัตรประชาชน',
            'id_card.exists' => 'เลขบัตรประชาชน :input นี้ ไม่ตรงกับระบบ',
            'member_name.required' => 'กรุณากรอก ชื่อ',
            'member_name.exists' => 'ชื่อ :input นี้ ไม่ตรงกับระบบ',
            'member_surname.required' => 'กรุณากรอก นามสกุล',
            'member_surname.exists' => 'นามสกุล :input นี้ ไม่ตรงกับระบบ',
            'date_of_birth.required' => 'กรุณากรอก วันเกิด',
            'date_of_birth.exists' => 'วันเดือนปีเกิด ไม่ตรงกับระบบ',
        ];
    }

    // private function addHistoryMember(Request $request, $type)
    // {
    //     $req = $request->json()->all();

    //     $agent = new Agent();
    //     $agent->setUserAgent($request->userAgent());
    //     $agent->setHttpHeaders($request->headers);

    //     $today = date('Y-m-d H:i:s');
    //     $date = explode(' ', $today);
    //     $session_id = Session::getId();
    //     $device = $agent->device();
    //     $platform = $agent->platform();
    //     $browser = $agent->browser();
    //     $browser_ver = $agent->version($browser);
    //     $platform_ver = $agent->version($platform);
    //     $client_name  = $device . " " . $browser . " " . $browser_ver . " on " . $platform . " " . $platform_ver;

    //     DB::table('www_counter_member')
    //         ->insert(
    //             [
    //                 'ip_address' => $request->ip(),
    //                 'visit_date' => $date[0],
    //                 'visit_time' => $date[1],
    //                 'session_id' => $session_id,
    //                 'membership_no' => $req['membership_no'],
    //                 'client_name' => $client_name,
    //                 'type' => $type
    //             ]
    //         );
    // }
}
