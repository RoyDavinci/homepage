<?php


$secondProductList =  [
    [
        "name" => "DStv Premium Streaming Subscription",
        "code" => "PREMOTT",
        "month" => 1,
        "price" => 37000,
        "period" => 1
    ],
    [
        "name" => "DStv Yanga OTT Streaming Subscription",
        "code" => "YANGAOTT",
        "month" => 1,
        "price" => 5100,
        "period" => 1
    ],
    [
        "name" => "DStv Compact Plus Streaming Subscription",
        "code" => "COMPLSOTT",
        "month" => 1,
        "price" => 25000,
        "period" => 1
    ],
    [
        "name" => "DStv Compact Streaming Subscription",
        "code" => "COMPOTT",
        "month" => 1,
        "price" => 15700,
        "period" => 1
    ],
    [
        "name" => "GWALLE36 - Great Wall Standalone Bouquet E36 + Showmax",
        "code" => "SHOWGWALLE36",
        "month" => 1,
        "price" => 4950,
        "period" => 1
    ],
    [
        "name" => "DStv Premium W/Afr E36 + Showmax",
        "code" => "SHOWPRWE36",
        "month" => 1,
        "price" => 37000,
        "period" => 1
    ],
    [
        "name" => "DStv Yanga Bouquet E36 + Showmax",
        "code" => "SHOWNNJ1E36",
        "month" => 1,
        "price" => 6550,
        "period" => 1
    ],
    [
        "name" => "DStv Comfam Streaming Subscription",
        "code" => "COMFAMOTT",
        "month" => 1,
        "price" => 9300,
        "period" => 1
    ],
    [
        "name" => "DStv Compact Plus Bouquet E36 + Showmax",
        "code" => "SHOWCOMPLE36",
        "month" => 1,
        "price" => 26450,
        "period" => 1
    ],
    [
        "name" => "DStv Comfam Bouquet E36 + Showmax",
        "code" => "SHOWNNJ2E36",
        "month" => 1,
        "price" => 10750,
        "period" => 1
    ],
    [
        "name" => "DStv Prestige",
        "code" => "PRESTIGENGE36",
        "month" => 12,
        "price" => 850000,
        "period" => 12
    ],
    [
        "name" => "DStv Compact Bouquet E36 + Showmax",
        "code" => "SHOWCOMPE36",
        "month" => 1,
        "price" => 17150,
        "period" => 1
    ],
    [
        "name" => "PRWASIE36-Premium W/Afr E36 + ASIAE36 + Showmax",
        "code" => "SHOWPRWASIE36",
        "month" => 1,
        "price" => 27500,
        "period" => 1
    ],
    [
        "name" => "DStv Padi Bouquet E36 + Showmax",
        "code" => "SHOWNLTESE36",
        "month" => 1,
        "price" => 6100,
        "period" => 1
    ],
    [
        "name" => "ASIAE36 - Asian Bouquet E36 + Showmax",
        "code" => "SHOWASIAE36",
        "month" => 1,
        "price" => 14900,
        "period" => 1
    ],
    [
        "name" => "DStv Premium W/Afr + French Bonus Bouquet E36 + Showmax",
        "code" => "SHOWPRWFRNSE36",
        "month" => 1,
        "price" => 57500,
        "period" => 1
    ],
    [
        "name" => "DStv Compact Plus",
        "code" => "COMPLE36",
        "month" => 1,
        "price" => 25000,
        "period" => 1
    ],
    [
        "name" => "Asian Bouqet",
        "code" => "ASIAE36",
        "month" => 1,
        "price" => 12400,
        "period" => 1
    ],
    [
        "name" => "DStv Compact",
        "code" => "COMPE36",
        "month" => 1,
        "price" => 15700,
        "period" => 1
    ],
    [
        "name" => "DStv Premium French",
        "code" => "PRWFRNSE36",
        "month" => 1,
        "price" => 57500,
        "period" => 1
    ],
    [
        "name" => "DStv Premium",
        "code" => "PRWE36",
        "month" => 1,
        "price" => 37000,
        "period" => 1
    ],
    [
        "name" => "DStv Confam Bouquet E36",
        "code" => "NNJ2E36",
        "month" => 1,
        "price" => 9300,
        "period" => 1
    ],
    [
        "name" => "Padi",
        "code" => "NLTESE36",
        "month" => 1,
        "price" => 3600,
        "period" => 1
    ],
    [
        "name" => "DStv Premium Asia",
        "code" => "PRWASIE36",
        "month" => 1,
        "price" => 42000,
        "period" => 1
    ],
    [
        "name" => "DStv Yanga Bouquet E36",
        "code" => "NNJ1E36",
        "month" => 1,
        "price" => 5100,
        "period" => 1
    ]
];

foreach ($msg->product as $value) {
    if (in_array($value->code, $vali)) {
        continue;
    } else {
        $code = $value->code;
        $name = $value->name;
        $month = $value->month;
        $price = $value->price;
        $period = $value->period;

        // Find the old code from the second product list based on the price
        $old_code = findMatchingOldCode($price, $secondProductList);

        // Build the product array with the new "old_code" field
        $pr = [
            'name' => $name,
            'code' => $code,
            'month' => $month,
            'price' => $price,
            'period' => $period,
            'old_code' => $old_code // Add old_code to the response
        ];

        array_push($arr, $pr);
        array_push($vali, $value->code);
    }
}

function findMatchingOldCode($price, $secondProductList)
{
    foreach ($secondProductList as $product) {
        if ($product['price'] === $price) {
            return $product['code'];
        }
    }
    return null; // Return null if no match is found
}


//select * from smpp_sms_message_log where  ssml_subscriber_number = '7047184832'  and ssml_direction ='2' and ssml_result !='1' and pk_ssml_log_time between '2024-10-18 00:54:34' and '2024-10-18 23:54:34';