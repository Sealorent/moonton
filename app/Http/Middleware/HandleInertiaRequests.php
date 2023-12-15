<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }



    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->lastActiveSubcriptions : null;

        if (!$activePlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->expired_date)->addMonths($activePlan->subcriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->update_at)->diffInDays($lastDay);
        $remainingDays = Carbon::parse($activePlan->expired_date)->diffInDays(now());

        return [
            'name' => $activePlan->subcriptionPlan->name,
            'remainingActiveDays' => $remainingDays,
            'activeDays' => $activeDays,
        ];
    }
    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
