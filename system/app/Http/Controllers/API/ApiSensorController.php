<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sensor;

class ApiSensorController extends Controller
{
    public function index(){
        $sensor = Sensor::get();

        return response()->json([
            'status' => 200,
                'message' => 'Data sensor',
                'data' => $sensor,
        ]);

    }

    public function store(Request $request)
    {
        $tds = trim($request->tds);
        $temp = trim($request->temp);

        $sensor = Sensor::where('id', 1)->get();




        $sensor[0]->tds = $request->tds;
        $sensor[0]->temp = $request->temp;
        $update = $sensor[0]->update();

        if($update == 1){
            return response()->json(
                [
                    'status' => 200,
                    'message' => 'Data sensor berhasil diinput',
                    'data' => $sensor[0],
                ]
            );
        }else{
            return response()->json(
                [
                    'status' => 404,
                    'message' => 'Terjadi kesalahan saat menginput data sensor !',
                    'data' => null,
                ]
            );
        }


    }

}
