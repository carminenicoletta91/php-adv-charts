<?php
   header('Content-type: application/json');
  $data = [
    'fatturato'=>[
    'labels'=>['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
    'label'=>'vendite',
    'type' => 'line',
    'data'=>[1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
  ],
  ];
  echo json_encode($data);
?>
