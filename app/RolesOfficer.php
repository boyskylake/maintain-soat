<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class RolesOfficer extends Model
{
    protected $table = 'roles_officer';

    public function officers()
    {
        $userModel = Officer::class;

        return $this->belongsToMany($userModel, 'officer_roles')
                    ->select(app($userModel)->getTable().'.*')
                    ->union($this->hasMany($userModel))->getQuery();
    }

}
