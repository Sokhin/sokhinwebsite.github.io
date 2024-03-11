var x = $(document);
x.ready(function () {
  $(".nav-down").hide();
  $("#xmark").hide();
  $(".fa-bars").click(function () {
    $(".nav-down").slideDown("fast");
    $(".fa-bars").hide();
    $("#xmark").show();
  });
});
x.ready(function () {
  $("#xmark").click(function () {
    $(".nav-down").slideUp("fast");
    $(".fa-bars").show();
    $("#xmark").hide();
  });
});
x.ready(function () {
  $(".nav-down").click(function () {
    $(".nav-down").hide();
    $(".fa-bars").show();
    $("#xmark").hide();
  });
});
var myButton1 = document.getElementById("khin1");
myButton1.addEventListener("click", function () {
  alert("Instagram name: Sing Sokhin");
});
var myButton2 = document.getElementById("khin2");
myButton2.addEventListener("click", function () {
  alert("Telegram name:Sokhin Sing Number:060901779");
});
