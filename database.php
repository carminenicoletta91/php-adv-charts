<?php
  $data = [
    'fatturato' =>[
      'type' =>'line',
      'id_canvas'=>'line-graph-month',
      'label'=>'Vendite-Per-Mese',
      'data' =>[
        'gennaio'=>1000,
        'febbraio'=>1322,
        'marzo'=>1123,
        'aprile'=>2301,
        'maggio' =>3288,
        'giugno' =>988,
        'luglio'=>502,
        'agosto'=>2300,
        'settembre'=>5332,
        'ottobre'=>2300,
        'novembre'=>1233,
        'dicembre'=>2322
      ],
      'color'=>[
        'backgroundColor' =>[
          'rgb(250,125,100)',
        ],
        'border-color' =>[
          'red',
        ]
      ]
    ],
    'fatturato_by_agent' =>[
      'type' =>'pie',
      'id_canvas'=>'pie-graph-agent',
      'data' =>[
        'Marco' =>9000,
        'Giuseppe'=>4000,
        'Mattia' =>3200,
        'Alberto' =>2300
      ],
      'color'=>[
        'backgroundColor' =>[
          'blue',
          'red',
          'yellow',
          'brown'
        ],
        'border-color' =>[
          'red',
          'red',
          'red',
          'red'
        ]
      ]
    ],
    'fatturato_by_team'=>[
      'type' =>'line',
      'id_canvas'=>'line-graph-team',
      'labels'=>['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
      'label'=>[
        'label1'=>[
          'label'=>'team1',
          'data' =>[1,0.8,0.7,0.5,0.7,0.8,0.9,0.5,0.6,1,0.3,0.9],
          'backgroundColor' =>'red',
          'border-color'=>'black',
          'border-width'=>1,
        ],
        'label2'=>[
          'label'=>'team2',
          'data' =>[0.3,0.6,0.8,0.3,0.6,0.5,0.8,0.7,0.3,0.5,0.6,1],
          'backgroundColor' =>'gray',
          'border-color'=>'black',
          'border-width'=>1,
        ],
        'label3'=>[
          'label'=>'team3',
          'data' =>[0.2,0.1,0.5,0.1,0.6,0.5,0.4,0.6,0.3,0.4,0.5,0.7],
          'backgroundColor' =>'yellow',
          'border-color'=>'black',
          'border-width'=>1,
        ]
      ]
    ]

  ];


?>
