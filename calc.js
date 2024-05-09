let content = "";
let flag = 0;

function display(id) {
    if (flag===1){
        content = "";
        flag = 0;
    }
     if(id === "zero" && content === "" || content.endsWith("0")){
      return;
    }
  content += document.getElementById(id).innerHTML;
  document.getElementById("values").innerHTML = content;
}

function reset() {
  content = "";
  document.getElementById("values").innerHTML = "0";
  document.getElementById("result").innerHTML = "_";
  document.getElementById("output").innerHTML = "_";
}

function getResult() {
  flag = 1;
  let strExpression = document.getElementById("values").innerHTML;
  let expression = eval(strExpression);
  document.getElementById("result").innerHTML = expression;
  document.getElementById("output").innerHTML = " " + expression;
}
