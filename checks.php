<?php

$newDateTime = date('Y-m-d H:i:s');

// Generate a random number between 20 and 50 seconds
$randomSeconds = rand(20, 50);

// Add 1 hour and the random seconds to the current time
$currentDateTime = date('Y-m-d H:i:s', strtotime("+1 hour $randomSeconds seconds", strtotime($newDateTime)));

echo "Current DateTime: $currentDateTime\n";
echo "New DateTime: $newDateTime\n";
