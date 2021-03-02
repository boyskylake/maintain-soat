<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Http\Controllers\Controller;
use App\Model\Officer\ucfOfficer as User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfile(Request $request)
    {
        $user = User::where('userId', $request->userId)->first();

        return response()->json(['massage' => 'Success.', 'user' => $user]);
    }
}
