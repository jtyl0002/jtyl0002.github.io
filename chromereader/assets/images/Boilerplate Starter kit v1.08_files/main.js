$(document).ready(function () {
    console.log("ready");
  
    $(".button").click(function () {
      $(this).next().toggleClass("open");
    });
  
    $(".open-menu").click(function () {
      $(".menu").toggleClass("show");
      $(".title").addClass("hidden");
      $(".author").addClass("hidden");
    });
  
    $(".map-link-oslo").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.oslo").addClass("show");
    });
  
    $(".map-link-docklands").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.docklands").addClass("show");
    });

    $(".map-link-losangeles").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.losangeles").addClass("show");
    });

    $(".map-link-czechrepublic").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.czechrepublic").addClass("show");
    });

    $(".map-link-ostend").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.ostend").addClass("show");
    });

    $(".map-link-milan").click(function () {
      $(".map").removeClass("show");
      $(".menu").removeClass("show");
      $(".map.milan").addClass("show");
    });
  
    $(".button").click(function () {
      $(".info").removeClass("open");
      $(this).next().addClass("open");
       $(".close").removeClass("show");
      $(this).prev().addClass("show");
    });
    
    $(".close").click(function (){
      $(".info").removeClass("open");
      $(this).removeClass("show");
    });
  });
  