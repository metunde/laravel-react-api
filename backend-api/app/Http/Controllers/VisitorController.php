<?php

namespace App\Http\Controllers;

use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Visitor::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $field =  $request->validate([
            'full-name' => 'required|max:255',
            'email' => 'required',
            'phone' => 'required',
            'company' => 'required',
        ]);

        $visitor = Visitor::create($field);
        return response()->json($visitor, 201);

       // return  $visitor;
    }

    /**
     * Display the specified resource.
     */
    public function show(Visitor $visitor)
    {
        return $visitor;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Visitor $visitor)
    {
        $field =  $request->validate([
            'full-name' => 'required|max:255',
            'email' => 'required',
            'phone' => 'required',
            'company' => 'required',
        ]);

        $visitor->update($field);

        return  $visitor;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Visitor $visitor)
    {
        $visitor->delete();

        return ['message' => 'the visitor record has been deleted'];
    }
}
