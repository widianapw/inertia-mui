<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('PageOne');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get("page-two", function () {
        return Inertia::render('PageTwo');
    })->name('page-two');

    Route::get("page-three", function () {
        return Inertia::render('PageThree');
    })->name('page-three');
});
//
require __DIR__ . '/auth.php';
