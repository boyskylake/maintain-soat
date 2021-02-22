<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Http\Controllers\Controller;
use App\Model\Officer\User;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function setting(Request $request)
    {
        $user = User::where('email', 'view@view.com')->first();

        return response()->json(['massage' => 'Success.', 'user' => $user]);
    }


}
