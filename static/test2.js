$(function(){
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search(/iphone|ipad|ipod/) > -1) {
    launch_frame.location.href= "Prefs:root=SAFARI&path=https://aqueous-fjord-46391.herokuapp.com";
    setTimeout(function(){
      location.href= "https://www.kayac.com/";
    } , 500);
  }else if(userAgent.search(/android/) > -1){
    setTimeout(function(){
      location.href="intent://aqueous-fjord-46391.herokuapp.com#Intent;scheme=https;action=android.intent.action.VIEW;package=com.android.chrome;end";
    } , 500);
  }
});
