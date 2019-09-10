function init(){
  console.log("hello world");
  getgraph();
}
$(document).ready(init);
function getgraph(){
  $.ajax({
    url:'fulldatabase.php',
    method:"GET",
    success:function (data){
      console.log(data);
      printgraph(data);
    },
    error:function (error){
      alert("errore");
      console.log(error);
    }
  });
}
function getlabels(data){
  return data.fatturato.labels;
}
function getdata(data){
  var amount=[];
  for (var i = 0; i < data.fatturato.data.length; i++) {
      amount.push(data.fatturato.data[i]);
    }

  return amount;
}
function gettype(data){
  return data.fatturato.type;
}
function getlabel(data){
  return data.fatturato.label;
}
function printgraph(data){
  var arrmonthlabel=getlabels(data);
  var amount=getdata(data);
  var type = gettype(data);
  var labels =getlabel(data);
  var ctx = document.getElementById('myChartline').getContext('2d');
  var myChart = new Chart(ctx, {
    type:type,
    data: {
    labels: arrmonthlabel,
    datasets: [{
        label: labels,
        data: amount,
        backgroundColor:"rgba(0,139,139,0.2)",
        borderColor: 'rgba(0,0,139,1)',
        borderWidth: 1
    }]
},
});

}
