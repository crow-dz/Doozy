<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allTask = Task::all();
        return Inertia::render('Todos/Index', [
            'tasks' => $allTask
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|min:8',
            'content' => 'required|min:8',
            'status' => 'required',
            'user_id' => 'required',
        ]);
        Task::create($request->all());

    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $request->validate([
            'title' => 'required|min:8',
            'content' => 'required|min:8',
            'status' => 'required',
            'user_id' => 'required',
        ]);
        $task->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): void
    {
        Task::find($id)->delete();
    }
}
