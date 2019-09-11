<?php
   header('Content-type: application/json');
  $data = [
    'fatturato'=>[
      'labels' =>['Marco','Giuseppe','Mattia','Alberto'],
      'label'=>['Marco','Giuseppe','Mattia','Alberto'],
      'type' => 'pie',
      'data'=>[9000,4000,3200,2300]
  ],
  ];
  echo json_encode($data);
?>
