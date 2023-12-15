<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class DashboardController extends Controller
{
    function index()  
    {
        return Inertia::render('User/Dashboard/Index', [
            'movies' => Movie::all(),
            'login' => auth()->user()->last_active_subcriptions == null,
            'featuredMovies' => Movie::whereIsFeatured(true)->get(),
        ]);
    }
}
