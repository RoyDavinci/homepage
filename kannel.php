<?php

// Define the fidelity process mappings
$fidelityProcesses = [
    // "fidelity1" => ["fidelitybearerbox", "fidelitysmsbox"],
    // "fidelity2" => ["fidelitybearerbox2", "fidelitysmsbox2"],
    // "fidelity3" => ["fidelitybearerbox3", "fidelitysmsbox3"],
    // "fidelity4" => ["fidelitybearerbox4", "fidelitysmsbox4"],
    // "fidelity5" => ["fidelitybearerbox5", "fidelitysmsbox5"],
    "fortebet"  => ["fortbearerbox", "fortsmsbox"]
];

// Directory path where the services are located
$baseDir = "~/";

// Function to check if a process is running
function isProcessRunning($processName)
{
    $output = shell_exec("pgrep -f $processName");
    return !empty($output);  // Returns true if the process is running
}

// Function to kill a process
function killProcess($processName)
{
    echo "Stopping $processName...\n";
    shell_exec("pkill -f $processName");
}

// Function to start a process
function startProcess($folder, $processName)
{
    global $baseDir;
    $path = "$baseDir/$folder/gw";  // Change to the directory
    echo $path;
    chdir($path);
    echo "Starting $processName in $folder...\n";
    shell_exec("./$processName -v 1 smskannel.conf > /dev/null 2>&1 &");
}

// Loop through each fidelity folder and check their processes
foreach ($fidelityProcesses as $folder => $processList) {
    foreach ($processList as $process) {
        if (!isProcessRunning($process)) {
            echo "$process is not running. Restarting...\n";
            startProcess($folder, $process);
        } else {
            echo "$process is already running.\n";
        }
    }
}

echo "Process monitoring and restart completed.\n";