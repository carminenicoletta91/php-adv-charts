<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- CSS:STYLE-->
    <link rel="stylesheet" href="style.css">
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <!-- JS: CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <title>Grafico</title>
    <?php $level=$_GET['access']; ?>
  </head>
  <body>
  
    <?php
      if($level === 'guest'){
        echo "<canvas id='line-guest'>"."</canvas>";
      }else if ($level === 'employee'){
        echo "<canvas id='line-guest'></canvas>";
        echo "<canvas id='pie-employ'></canvas>";
      }else if($level === 'c-level'){
        echo "<canvas id='line-guest'></canvas>";
        echo "<canvas id='pie-employ'></canvas>";
        echo "<canvas id='line-c-level'></canvas>";
      }
    ?>

      <script src="script.js" type="text/javascript"></script>
  </body>
</html>
