<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(PostRequest $request)
    {
        $rules = [
            'message' => 'required|string|unique:post,title',
        ];

        switch ($this->getMethod())
        {
            case 'GET':
                return [];
            case 'POST':
                return $rules;
            case 'PUT':
                return [
                        'id' => 'required|integer|exists:post,id',
                    ] + $rules;
            case 'DELETE':
                return [
                    'id' => 'required|integer|unique:post,id'
                ];
        }
    }
}
