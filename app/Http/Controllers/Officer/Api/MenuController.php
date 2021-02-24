<?php

namespace App\Http\Controllers\Officer\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    public function menu()
    {
        // dd();
        $user = Auth::user();

        $menu = DB::table('roles')->where('id', '=', $user->role_id)->first();

        // dd($user->role_id);

        return response()->json([menu($menu->name, '_json'), $user]);
    }
}
