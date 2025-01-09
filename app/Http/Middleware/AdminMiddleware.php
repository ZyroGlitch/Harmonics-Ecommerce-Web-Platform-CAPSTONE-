<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userID = Session::get('userID');

        $user = User::where('userID',$userID)->first();

        // dd($user->role);
        switch($user->role){
            case 'Admin':
                return $next($request);
                break;
            default:
                // Return forbidden if role isn't admin
                abort(403);
        }
    }
}