<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller{
    public function store(Request $request)
    {
        // 入力内容の検証

        // データの保存
        return view('quizzes.index');
    }

    public function destroy($id)
    {
        // 入力内容の検証

        // データの保存
        return json_encode(['message'=>'ID:'.$id . 'が削除されるIDです']);
    }
}
