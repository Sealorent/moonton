<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubcriptionPlan;
class SubcriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 100000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'feature 1',
                    'feature 2',
                    'feature 3',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 8000000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'feature 1',
                    'feature 2',
                    'feature 3',
                    'feature 4',
                    'feature 5',
                ]),
            ]
        ];

        SubcriptionPlan::insert($subcriptionPlans);
    }
}
