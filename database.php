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
          'blue',
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
    ]

  ];


?>
