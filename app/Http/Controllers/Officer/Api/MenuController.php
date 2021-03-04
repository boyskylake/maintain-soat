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
        $user = Auth::user();

        $roles = DB::table('roles_officer')->where('id', '=', $user->role_id)->first();
        $menu = DB::table('menus')->where('id', '=', $roles->menu_id)->first();
        

        // dd($user->role_id);

        return response()->json([menu($menu->name, '_json'), $user]);
    }
}
