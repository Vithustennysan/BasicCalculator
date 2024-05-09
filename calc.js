let content = "";

function display(id) {
  if (
    ((content.includes("+0") ||
      content.includes("-0") ||
      content.includes("*0") ||
      content.includes("/0")) )||
       (content.startsWith("0"))
     ) {
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
  let strExpression = document.getElementById("values").innerHTML;
  let expression = eval(strExpression);
  document.getElementById("result").innerHTML = expression;
  document.getElementById("output").innerHTML = " " + expression;
}
