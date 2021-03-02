<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Helpers\LineNotify;
use Illuminate\Support\Facades\Http;

class VerifyLinebot
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $line = new LineNotify();
        $http = $line->httpClient;

        $token = $request->bearerToken();
        // dd($token);
        $response = $http->get("https://api.line.me/oauth2/v2.1/verify?access_token=" . $token);

        if ($response->isSucceeded()) {
            $result = $response->getJSONDecodedBody();

            if (($result['client_id'] == 1655676615) && ($result['expires_in'] > 0)) {
                $profile = $this->profile($request);
                $request->request->add($profile);
                return $next($request);

            }
        }

        return response()->json(['error' => 'Unauthenticated.'], 401);
    }

    public function profile(Request $request)
    {
        $token = $request->bearerToken();

        $response = Http::withToken($token)->get("https://api.line.me/v2/profile");

        if ($response->ok()) {
            return $response->json();
        }

        return false;
    }
}
