<?php

require './ubanewlog.php';
require './ubaconn.php';
require './nontransubalog.php';

$request = $_REQUEST;

$id = $request['smsID'];
$type = $request['type'];
$str = $request['message'];
$sMobileNo = $request['phone'];
$sSender = $request['sender'];

// Log incoming request
$content = print_r($request, true);
log_action($content, $logFile);
wh_log($content);

if ($type == 8 || $type == 16) {
    return;
} else {
    $parts = explode(' ', $str);
    $result = [];
    $num = 1;

    // Extract key-value pairs from message
    foreach ($parts as $part) {
        $keyValue = explode(':', $part);
        if ($num == 1 && $keyValue[0] == 'date') {
            $result['submitDate'] = convertTime($keyValue[1]);
            $num++;
        } else if ($num == 2 && $keyValue[0] == 'date') {
            $result['doneDate'] = convertTime($keyValue[1]);
        } else {
            $result[$keyValue[0]] = $keyValue[1] ?? '';
        }
    }

    $stat = $result['stat'];
    $requestString = json_encode($_REQUEST);
    $resultsString = json_encode($result);
    $sOperatorName = getNetwork($sMobileNo);

    // Fetch 'created_at' from NonTrans_messages table
    $query = "SELECT created_at FROM OTPmessages WHERE id = '$id'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $createdAt = strtotime($row['created_at']);

        // Generate random doneDate within 1 minute of 'created_at'
        $randomDoneTimestamp = rand($createdAt, $createdAt + 60);
        $doneDate = date('Y-m-d H:i:s', $randomDoneTimestamp);
    } else {
        wh_log("Error fetching created_at for ID $id: " . $conn->error, 'ERROR');
        exit("Error fetching message data.");
    }

    // Update OTPmessages table
    $query = "UPDATE OTPmessages 
              SET dlr_status = '$stat', dlr_request = '$requestString', 
                  dlr_results = '$resultsString', network = '$sOperatorName', 
                  updated_at = '$doneDate' 
              WHERE id = '$id'";

    $result = $conn->query($query);
    $content = print_r($result, true);
    log_action($content, $logFile);
    wh_log($content);

    // Extract error code from message
    $dlrRequestData = json_decode($requestString, true);
    preg_match('/err:(\d+)/', $dlrRequestData['message'], $matches);
    $errorCode = $matches[1] ?? 'N/A';
    wh_log('errorCode: ' . $errorCode);

    // Prepare data for external API
    $data = json_encode(array(
        "Id" => $id,
        "Status" => $stat == 'DELIVRD' ? 1 : 2,
        "ErrorCode" => $errorCode,
        "DlrDate" => $doneDate
    ));

    $content = print_r($data, true);
    wh_log($content);
    log_action($content, $logFile);

    // Fetch token for authorization
    $sql = "SELECT token FROM token LIMIT 1";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $token = $row['token'];

    // Send data to external API
    $url = 'https://198.18.8.191:3000/dlrotp';
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token
    ));
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    $response = curl_exec($ch);
    curl_close($ch);

    $content = print_r($response, true);
    log_action($content, $logFile);
    wh_log($content);

    $conn->close();
}


function convertTime($timestamp)
{

    $timestamp_str = strval($timestamp);

    // Extract year, month, day, hour, and minute from the timestamp string
    $year = substr($timestamp_str, 0, 2);
    $month = substr($timestamp_str, 2, 2);
    $day = substr($timestamp_str, 4, 2);
    $hour = substr($timestamp_str, 6, 2);
    $minute = substr($timestamp_str, 8, 2);
    // Create DateTime object
    $date_time = DateTime::createFromFormat('ymdHi', $year . $month . $day . $hour . $minute);

    // Format the date and time
    $formatted_date_time = $date_time->format('Y-m-d H:i');

    return  $formatted_date_time;
}

function getNetwork($number)
{
    $number = preg_replace('/^234/', '0', $number);

    // Extract the prefix from the number
    $prefix = substr($number, 0, 4);

    switch ($prefix) {
        case '0701':
            return 'Airtel';
        case '0702':
            return 'Smile';
        case '07025':
            return 'MTN';
        case '07026':
            return 'MTN';
        case '07027':
            return 'Multi-Links';
        case '07028':
            return 'Starcomms';
        case '07029':
            return 'Starcomms';
        case '0703':
            return 'MTN';
        case '0704':
            return 'MTN';
        case '0705':
            return 'Globacom';
        case '0706':
            return 'MTN';
        case '0707':
            return 'ZoomMobile';
        case '0708':
            return 'Airtel';
        case '0709':
            return 'Multi-Links';
        case '0802':
            return 'Airtel';
        case '0803':
            return 'MTN';
        case '0804':
            return 'Mtel';
        case '0805':
            return 'Globacom';
        case '0806':
            return 'MTN';
        case '0807':
            return 'Globacom';
        case '0808':
            return 'Airtel';
        case '0809':
            return '9mobile';
        case '0810':
            return 'MTN';
        case '0811':
            return 'Globacom';
        case '0812':
            return 'Airtel';
        case '0813':
            return 'MTN';
        case '0814':
            return 'MTN';
        case '0815':
            return 'Globacom';
        case '0816':
            return 'MTN';
        case '0817':
            return '9mobile';
        case '0818':
            return '9mobile';
        case '0819':
            return 'Starcomms';
        case '0909':
            return '9mobile';
        case '0908':
            return '9mobile';
        case '0901':
            return 'Airtel';
        case '0902':
            return 'Airtel';
        case '0903':
            return 'MTN';
        case '0904':
            return 'Airtel';
        case '0905':
            return 'Globacom';
        case '0906':
            return 'MTN';
        case '0907':
            return 'Airtel';
        case '0915':
            return 'Globacom';
        case '0913':
            return 'MTN';
        case '0912':
            return 'Airtel';
        case '0916':
            return 'MTN';
        case '0911':
            return 'Airtel';
        default:
            return 'MTN';
    }
}