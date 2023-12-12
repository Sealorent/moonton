<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

route::get('/login', function () {
    return Inertia::render('Prototype/Login');
})->name('login');

route::get('/register', function () {
    return Inertia::render('Prototype/Register');
})->name('register');


route::get('/dashboard', function () {
    return Inertia::render('Prototype/Dashboard');
})->name('dashboard');


route::get('/subcriptionPlan', function () {
    return Inertia::render('Prototype/Layouts/Subcription/SubcriptionPlan');
})->name('subcriptionPlan');