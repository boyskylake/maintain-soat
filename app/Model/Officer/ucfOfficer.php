<?php

namespace App\Model\Officer;

use App\Helpers\LogActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class ucfOfficer extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, LogActivity;

    protected $connection = 'mysql';

    protected $table = 'ucf_officer';

    public $timestamps = false;
}
