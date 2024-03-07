// function About(){
//     document.getElementsByClassName("main")[0].style.display = "block"
// }

// new

$(document).ready(function(){
    $("#Vision").click(function(){
      $("#div1").fadeIn();
      $(".div1a").fadeIn(300);
      $("p").fadeIn(3000);
    });
  });
  $(document).ready(function(){
    $("#Mission").click(function(){
      $("#div1").fadeIn();
      $(".div2a").fadeIn(300);
      $(".p2").fadeIn(3000);
    });
  });
  $(document).ready(function(){
    $("#Objects").click(function(){
      $("#div1").fadeIn();
      $(".div3a").fadeIn(300);
      $(".p3").fadeIn(3000);
    });
  });


  $(document).ready(function(){
    $("#Vision").dblclick(function(){
      $("#div1").fadeIn();
      $(".div1a").fadeOut(300);
      $("p").fadeOut(3000);
    });
  });
  $(document).ready(function(){
    $("#Mission").dblclick(function(){
      $("#div1").fadeIn();
      $(".div2a").fadeOut(300);
      $(".p2").fadeOut(3000);
    });
  });
  $(document).ready(function(){
    $("#Objects").dblclick(function(){
      $("#div1").fadeIn();
      $(".div3a").fadeOut(300);
      $(".p3").fadeOut(3000);
    });
  });