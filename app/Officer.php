<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;


class Officer extends Model
{
    // protected $connection = 'mysql';
    // use VoyagerUser;

    protected $table = 'officers';
    protected $guarded = [];

    public $additional_attributes = ['locale'];

    public function getAvatarAttribute($value)
    {
        return $value ?? config('voyager.user.default_avatar', 'users/default.png');
    }

    // protected $table = 'roles_officer';
}
