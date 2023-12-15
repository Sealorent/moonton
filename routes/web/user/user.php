<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubcriptionPlanController;


Route::get('/', [DashboardController::class, 'index'])->name('index');

Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubcription:true');;

Route::get('subcription-plan', [SubcriptionPlanController::class, 'index'])->name('subcriptionPlan.index')->middleware('checkUserSubcription:false');

Route::post('subcription-plan/{subcriptionPlan}/user-subcribe', [SubcriptionPlanController::class, 'userSubcribe'])->name('subcriptionPlan.userSubcribe');