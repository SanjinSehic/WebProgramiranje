$(document).ready(function(){
  setTimeout(function(){
    console.log("Nesto");
    $("#error").css("display", "none");
    $(".lds-dual-ring").css("display", "none");
    $(".loader").css("display", "block");
  }, 2000);
})
