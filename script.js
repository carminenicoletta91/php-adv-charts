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
      printgraphline(fattdata);
      printgraphpie(fattagentdata);
    },
    error:function(error){
      alert("errore");
      console.log(error);
    }

  });
}
function printgraphline(data){
  populatecanvas(data);
}
function printgraphpie(data){
  populatecanvas(data);
}
function populatecanvas(data){
  var type = data['type'];
  var subData = data['data'];
  var label =Object.keys(subData);
  var values = Object.values(subData);
  var idcanvas = data['id_canvas'];
  console.log(type);
  console.log(subData);
  console.log(label);
  console.log(values);
  console.log(idcanvas);
  var ctx = document.getElementById(idcanvas).getContext('2d');
  var myChart = new Chart(ctx, {
    type:type,
    data: {
    labels: label,
    datasets: [{
        label: 'vendite',
        data: values,
        backgroundColor:"rgba(0,139,139,0.2)",
        borderColor: 'rgba(0,0,139,1)',
        borderWidth: 1
    }
  ],
},
});
}
