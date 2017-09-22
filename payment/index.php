<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Onflo Payment System</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="../js/jquery-2.2.2.min.js"></script>
        <script src="../js/card.js"></script>
        <script src="../js/jquery.card.js"></script>
        <script src="../js/firebase.js"></script>
        <script src="https://checkout.stripe.com/checkout.js"></script>
    </head>

    <body>
        <div id="msg-container">
            <a href="../dashboard">
                <img src="../images/onflo-white-logo.png" />
            </a>
            <h1 id="msg"></h1>
            <span>Returning to your dashboard...</span>
        </div>
        <span id="footer">
            <a href="http://onflo.io">Home</a> |
            <a href="http://onflo.io/dashboard">Dashboard</a>
        <script>
        /* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */
        $('form').card({
            container: '.card-wrapper',
            width: 280,
            formSelectors: {
                nameInput: 'input[name="first-name"], input[name="last-name"]'
            }
        });
        </script>

        <script src="../js/payment.js"></script>

    </body>

</html>