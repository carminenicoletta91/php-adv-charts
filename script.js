function init(){
  console.log("hello world");
  getgraph(y='datam1.php',x='line-guest');
  getgraph(y='datam2.php',x='pie-employ');
  getgraph(y='datam3.php',x='line-c-level');
}
$(document).ready(init);
function getgraph(y,x){
  var url=y;
  $.ajax({
    url:url,
    method:"GET",
    success:function (data){
      console.log(data);
      printgraph(data,x);
      console.log(x);
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
function printgraph(data,idcanvas){
  var arrmonthlabel=getlabels(data);
  var amount=getdata(data);
  var type = gettype(data);
  var labels =getlabel(data);
  var ctx = document.getElementById(idcanvas).getContext('2d');
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
    }],
},
});

}
