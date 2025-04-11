<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Randomly decide if the task is started or not
        $hasStarted = $this->faker->boolean(60); // 60% chance it has started
        $startDate = $hasStarted ? $this->faker->dateTimeBetween('-10 days', 'now') : null;
        $endDate = $hasStarted ? $this->faker->dateTimeBetween($startDate ?? '-5 days', 'now') : null;

        return [
            'user_id' => 1,
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['toStart', 'inProgress', 'completed']),
            'create_at' => $this->faker->dateTimeBetween('-15 days', '-10 days'),
            'stared_at' => $startDate,
            'ended_at' => $hasStarted ? $endDate : null,
        ];
    }
}
