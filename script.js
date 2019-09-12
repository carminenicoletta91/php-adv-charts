function init(){
  console.log("hello world");
  getgraph()
}
$(document).ready(init);


function getgraph(){
  $.ajax({
    url:'api.php',
    method:'GET',
    success:function(data){
      var fattagentdata = data['fatturato_by_agent'];
      var fattdata = data['fatturato'];
      var fattteam = data['fatturato_by_team'];
      populatecanvasforsingle(fattdata);
      populatecanvasforsingle(fattagentdata);
      populatecanvasformultiple(fattteam);
    },
    error:function(error){
      alert("errore");
      console.log(error);
    }

  });
}


function populatecanvasforsingle(data){
  var type = data['type'];
  var subData = data['data'];
  var label = data['label'];
  var labels = Object.keys(subData);
  var values = Object.values(subData);
  var idcanvas = data['id_canvas'];
  var color = data['color'];
  var bgColor = Object.values(color['backgroundColor']);
  var bdColor = Object.values(color['border-color']);
  console.log("tipo:",type);
  console.log("subdata:",subData);
  console.log("label",label);
  console.log("values:",values);
  console.log("idcanvas",idcanvas);
  console.log("bgcanvas",bgColor);
  console.log("bdcolor",bdColor);
  var ctx = document.getElementById(idcanvas).getContext('2d');
  var myChart = new Chart(ctx, {
    type:type,
    data: {
    labels: labels,
    datasets: [{
        label:label,
        data: values,
        backgroundColor:bgColor,
        borderColor: bdColor,
        borderWidth: 1
    }
  ],
},
});
}

function populatecanvasformultiple(data){
  var type = data['type'];
  var idcanvas = data['id_canvas'];
  var labels = data['labels'];
  var label = data['label'];
  var labelteam1=label['label1']['label'];
  console.log(labelteam1);
  console.log("tipo:",type);
  console.log("id-canvas:",idcanvas);
  console.log("labels:",labels);
  // var elements=data['label'];
  // var numberofelements=elements;
  // console.log(elements);
  var ctx = document.getElementById(idcanvas).getContext('2d');
  var myChart = new Chart(ctx, {
    type:type,
    data: {
    labels: labels,
    datasets: [
      {
        label:label['label1']['label'],
        data: label['label1']['data'],
        backgroundColor:label['label1']['backgroundColor'],
        borderColor: label['label1']['border-color'],
        borderWidth: 1,
    },
    {
      label:label['label2']['label'],
      data:  label['label2']['data'],
      backgroundColor:label['label2']['backgroundColor'],
      borderColor: label['label2']['border-color'],
      borderWidth: 1,
    },
    {
      label:label['label3']['label'],
      data: label['label3']['data'],
      backgroundColor:label['label3']['backgroundColor'],
      borderColor: label['label3']['border-color'],
      borderWidth: 1,
    }
  ],
},
});
}
