$(function () {
  // alert("ok")
  var program1 = "11:00 프로그램1";
  var program2 = "12:00 프로그램2";
  var program3 = "13:00 프로그램3";

  var tb = document.createElement("table");
  tb.innerHTML = `
    <tr><td>${program1}</td></tr>
    <tr><td>${program2}</td></tr>
    <tr><td>${program3}</td></tr>
  `;

  var tv = document.getElementById("tv");
  tv.appendChild(tb);



  window.setTimeout("location.reload()", 1000);

  var now = new Date();
  if (
    now.getHours() == 11 &&
    now.getMinutes() == 11 &&
    now.getSeconds() == 00
  ) {
    $("table tr:nth-child(1)").addClass("on");
  }

  if (
    now.getHours() == 11 &&
    now.getMinutes() == 11 &&
    now.getSeconds() == 05
  ) {
    $("table tr:nth-child(2)").addClass("on");
  }

  if (
    now.getHours() == 11 &&
    now.getMinutes() == 11 &&
    now.getSeconds() == 10
  ) {
    $("table tr:nth-child(3)").addClass("on");
  }

  if (
    now.getHours() == 11 &&
    now.getMinutes() == 11 &&
    now.getSeconds() == 15
  ) {
    $("table tr:nth-child(4)").addClass("on");
  }

  if (
    now.getHours() == 11 &&
    now.getMinutes() == 11 &&
    now.getSeconds() == 20
  ) {
    $("table tr:nth-child(5)").addClass("on");
  }
});
