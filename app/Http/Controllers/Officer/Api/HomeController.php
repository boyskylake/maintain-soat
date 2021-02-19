<?php

namespace App\Http\Controllers\Officer\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Foundation\Auth\AuthenticatesUsers;

class HomeController extends Controller
{
    public function allMacoop()
    {
        $ma_coop = DB::connection('oracle')->select("SELECT COUNT(COOP_NAME) as Countcoop FROM MA_COOP");


        // $EditOderPage = DB::select("", [1]);


        return response()->json(compact('ma_coop'));


    }

}
