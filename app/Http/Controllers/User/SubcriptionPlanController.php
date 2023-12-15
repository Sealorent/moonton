<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SubcriptionPlan;
use App\Models\UserSubcription;
use Illuminate\Support\Facades\DB;

class SubcriptionPlanController extends Controller
{
    public function index()
    {
        return Inertia::render('User/SubcriptionPlan/Index', [
            'subcriptionPlans' => SubcriptionPlan::all(),
        ]);
    }

    public function userSubcribe(Request $request, SubcriptionPlan $subcriptionPlan)
    {
        DB::beginTransaction();

        try {

            $data = [
                'user_id' => auth()->user()->id,
                'subcription_plan_id' => $subcriptionPlan->id,
                'price' => $subcriptionPlan->price,
                'expired_date' => now()->addMonths($subcriptionPlan->active_period_in_months),
                'payment_status' => 'success',
            ];

            DB::commit();
            $userSubcription = UserSubcription::create($data);

            return redirect()->route('user.dashboard.index')->with('success', 'Subcription plan has been subcribed successfully');

        } catch (\Throwable $th) {

            DB::rollback();
            return redirect()->back()->with('error', 'Subcription plan failed to subcribe');
        }



        return $data;
    }
}
