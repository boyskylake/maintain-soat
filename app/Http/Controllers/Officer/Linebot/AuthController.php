<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Helpers\LineNotify;
use App\Http\Controllers\Controller;
use App\Model\Officer\ucfOfficer as User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{

    private $bot;
    private $http;

    public function __construct(LineNotify $line)
    {
        $this->bot = $line;
        $this->http = $line->httpClient;
    }

    public function login(Request $request)
    {
        // $req = $request->json()->all();
        $this->validate($request, [
            'username' => ['required', 'string', 'max:255'],
        ]);

        $user = User::where('user_name', $request->username);

        if (!md5($request->password) ==  $user->first()->user_pwd) {
            return response()->json(['message' => 'The specified password does not match the database password'], 422);
        }

        if ($this->verify($request)) {
            $profile = $this->profile($request);
            // db save userId
            $db = $user->update(array(
                'userId' => $profile->userId,
                'line_active' => 1
            ));

            if ($db) {
                // logger("linebot login verify : ", $profile);
                return response()->json(['massage' => 'Success.', 'user' => $user->first()]);
            }
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
        return response()->json(['error' => 'Unauthenticated.'], 401);
    }

    public function user(Request $request)
    {
        if ($this->verify($request)) {
            $profile = $this->profile($request);

            // check db is userId and active
            $user = User::where('userId', $profile->userId);
            if ($user->first() && $user->first()->line_active == 1) {
                return response()->json(['massage' => 'Success.', 'user' => $user->first()]);
            }
            // dd($profile);
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
        return response()->json(['error' => 'Unauthenticated.'], 401);
    }

    public function profile(Request $request)
    {
        $token = $request->bearerToken();

        $response = Http::withToken($token)->get("https://api.line.me/v2/profile");

        if ($response->ok()) {
            return $response->object();
        }

        return false;
    }

    public function verify(Request $request)
    {
        $token = $request->bearerToken();
        // dd($token);
        $response = $this->http->get("https://api.line.me/oauth2/v2.1/verify?access_token=" . $token);

        if ($response->isSucceeded()) {
            $result = $response->getJSONDecodedBody();

            if (($result['client_id'] == 1655676615) && ($result['expires_in'] > 0)) {
                return $result;
            }
        }

        return false;
    }
}
