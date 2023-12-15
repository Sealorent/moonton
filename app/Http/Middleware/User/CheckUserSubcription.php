<?php

namespace App\Http\Middleware\User;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class CheckUserSubcription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , $status): Response
    {
        $user = auth()->user();
        $hasActiveSubscription = $user->lastActiveSubcriptions !== null;

        if ($status == 'true' && !$hasActiveSubscription ) {
            return redirect(route('user.dashboard.subcriptionPlan.index'));
        }
        if ($status == 'false' && $hasActiveSubscription ) {
            return redirect(route('user.dashboard.index'));
        }

        return $next($request);
    }
}
