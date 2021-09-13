$(document).ready(function(){//시작

  $(".sub_nav_back").hide();


 
  $(".open_nav").click(function(){
    $(".sub_nav_back").show();
    $(".sub_nav_box").animate({"right": "0"},500,"swing")
  });

  $(".x_bnt").click(function(){
    $(".sub_nav_back").hide();
    $(".sub_nav_box").animate({"right": "-220px"},500,"swing")
  });

  $(document).ready(function() {
    $(".category li").click(function() {
      var idx = $(this).index();
      $(".category li").removeClass("on");
      $(".category li").eq(idx).addClass("on");
      $(".tab_cont > div").hide();
      $(".tab_cont > div").eq(idx).fadeIn(700);
    })
  });


  

});//끝