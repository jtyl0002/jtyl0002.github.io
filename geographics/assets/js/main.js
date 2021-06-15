$( document ).ready(function() {
    console.log( "ready!" );
  
  $(".about").click(function(){
    $(".para1"). slideToggle("fast")
  });
  
});

$( document ).ready(function() {
  console.log( "ready!" );

$(".aboutchapter").click(function(){
  $(".para2"). slideToggle("fast")
});

});

window.onload = function() {

  //add constraints object
  var constraints = { audio: true,
                      video: true};

  //call getUserMedia, then the magic
  navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
      var video = document.querySelector('.webcam');
      video.srcObject = mediaStream;
      video.play();
  }).catch(function(err){
  });

}
