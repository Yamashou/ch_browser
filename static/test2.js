$(function(){
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search(/iphone|ipad|ipod/) > -1) {
    // Launch myapp via URL scheme
    launch_frame.location.href= "{{ app }}://";
    setTimeout(function(){
      // Open App DL page in iTunes Store
      location.href= "https://www.kayac.com/";
    } , 500);
  }else if(userAgent.search(/android/) > -1){
    setTimeout(function(){
      // Open App DL page in iTunes Store　http://d.hatena.ne.jp/
      // location.href= "android-app://com.android.chrome/https/aqueous-fjord-46391.herokuapp.com/app/test";
      location.href="intent://aqueous-fjord-46391.herokuapp.com#Intent;scheme=https;action=android.intent.action.VIEW;package=com.android.chrome;end";
    } , 500);
  }
});
