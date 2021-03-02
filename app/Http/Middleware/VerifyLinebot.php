<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Helpers\LineNotify;

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
                $request->request->add($result);
                return $next($request);

            }
        }

        return response()->json(['error' => 'Unauthenticated.'], 401);
    }
}
