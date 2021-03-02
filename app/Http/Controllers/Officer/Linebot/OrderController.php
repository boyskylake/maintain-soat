<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Http\Controllers\Controller;
use App\Model\Officer\ucfOfficer as User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function getOrder(Request $request)
    {
        $user = User::where('userId', $request->userId)->first();

        $data = DB::select("SELECT
                    inform_head.inform_no,
                    inform_head.coop_id,
                    inform_head.receive_date,
                    inform_detail.inform_description
                FROM
                    inform_head,
                    inform_detail
                where
                    inform_head.inform_no = inform_detail.inform_no
                    and inform_head.coop_id = :coopID", [ 'coopID' => $user->officer_id ]);

        return response()->json(['massage' => 'Success.', 'data' => $data]);
    }
}
