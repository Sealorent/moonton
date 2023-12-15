<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\SubcriptionPlan;


class UserSubcription extends Model
{
    use HasFactory , SoftDeletes;

    protected $table = 'user_subcriptions';

    protected $fillable = [
        'user_id',
        'subcription_plan_id',
        'price',
        'expired_date',
        'payment_status',
        'snap_token',
    ];

    /**
     * Get the subcriptionPlan that owns the UserSubcription
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subcriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubcriptionPlan::class);
    }
    
}
