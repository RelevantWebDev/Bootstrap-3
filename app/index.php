<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>BOOTSTRAP 3 - TRY</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="stylesheet" href="styles/main.css">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->        
        <script src="scripts/vendor/modernizr.js"></script>

       <style>

            div[class*='col-'] {
                height:190px;
                border: 1px solid black;
                text-align: center;             
            }

        </style>        

    </head>
    <body id="home">
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>extremely outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <section class="container">
          <div class="content row">
            <?php include "includes/header.php"; ?>
            <section class="main col col-lg-8">

            </section>
            <aside class="sidebar col col-lg-4">

            </aside>        
          </div>
          <?php include "includes/footer.php"; ?>
        </section> 
        
        


        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <!-- 
        // <script>
        //     (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        //     function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        //     e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        //     e.src='//www.google-analytics.com/analytics.js';
        //     r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        //     ga('create','UA-XXXXX-X');ga('send','pageview');
        // </script>
        -->

        <!-- build:js scripts/scripts.js -->
        <script src="bc/jquery/dist/jquery.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js"></script>
        <script src="bc/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js"></script>
        <!-- endbuild -->

        <!-- build:js({app,.tmp}) scripts/main.js -->
        <script src="scripts/main.js"></script>
        <!-- endbuild -->
</body>
</html>
