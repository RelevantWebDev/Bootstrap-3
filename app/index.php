<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title>BOOTSTRAP 3 - IS COOLER THAN YOU</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="stylesheet" href="styles/main.css">
        <script src="scripts/vendor/modernizr.js"></script>
       <style>

            div[class*='col-'] {
                height:190px;
                border: 1px solid black;
                text-align: center;             
            }

        </style>        

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>extremely outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        
        <div class="container">
             <div class="row">
                <div class="col-xs-12">
                    <h1 class="visible-xs">ONLY ON XS</h1>
                    ----
                </div>
            </div>

            <div class="row">
                <div class="col-xs-6 col-lg-4">
                    <h1 class="hidden-sm">Only hidden on SM</h1>
                    ---
                </div>
                <div class="col-xs-6 col-lg-8">
                    ---
                </div>          
            </div>

             <!-- Nested columns with inhertance behavior -->
            <div class="row">
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-xs-4">---</div>
                        <div class="col-xs-8">---</div>
                    </div>
                </div>



                <!-- Swap places at medium 
                        SM and XS do NOT ALLOW push and pulls... smallest available is at the medium screen
                -->
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-xs-4 col-md-push-8">---</div>
                        <div class="col-xs-8 col-md-pull-4">---</div>
                    </div>
                </div>          
            </div>


            <div class="row">
                <div class="col-sm-4">---</div>
                <div class="col-sm-4">---</div>
                <div class="col-sm-4">---</div>
            </div>

            <div class="row">
                <div class="col-md-4 col-md-offset-4">---</div>
            </div> 
        </div>
        
        <!-- build:js scripts/jquery.js -->
        <script src="bc/jquery/dist/jquery.js"></script>
        <!-- endbuild -->

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

        <!-- build:js scripts/plugins.js -->
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
