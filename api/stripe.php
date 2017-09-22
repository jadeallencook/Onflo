<?php 
    require_once('../php/stripe-php/init.php');

    \Stripe\Stripe::setApiKey(/* Stripe SK */);

    if (isset($_POST['token']) && isset($_POST['amount']) && isset($_POST['desc'])) {

        $token = $_POST['token'];
        $amount = $_POST['amount'];
        $desc = $_POST['desc'];

        $response = \Stripe\Charge::create(
            array(
                'amount' => $amount, 
                'currency' => 'usd', 
                'source' => $token,
                'description' => $desc
            )
        );

        echo 'Payment Complete!';

    }

?>