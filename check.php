<?php

function formatSMS($sms)
{
    // Extract the name
    preg_match('/Dear\s+([A-Z\s]+),/', $sms, $nameMatch);
    $name = isset($nameMatch[1]) ? trim($nameMatch[1]) : '';

    // Extract the OTP
    preg_match('/Your One Time Password is (\d+)/', $sms, $otpMatch);
    $otp = isset($otpMatch[1]) ? $otpMatch[1] : '';

    // Format expiration as "Expires 5 minutes"
    $expirationString = 'Expires 5 minutes';

    // Format the final string
    $formattedSMS = "DO NOT DISCLOSE Dear $name, Your OTP is $otp. $expirationString\nCall 234-700 225-822 for help.";

    return $formattedSMS;
}

// Example usage
$originalSMS = "Dear UTHMAN ADESOLA, Your One Time Password is 13412596, Expiration Date: 2024-08-23 12:13:49, DO NOT DISCLOSE. For Enquires; contact cfc@ubagroup.com or Chat with LEO on +2349030010007";
$formattedSMS = formatSMS($originalSMS);
echo nl2br($formattedSMS); // nl2br() converts newlines to <br> tags for display in HTML