<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Officer extends Model
{
    protected $connection = 'mysql';
    protected $table = 'officers';
}
