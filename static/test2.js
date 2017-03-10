var _ua = (function(){
 return {
  ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
  ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
  ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
  ltIE9:document.uniqueID && typeof window.matchMedia == "undefined",
  gtIE10:document.uniqueID && window.matchMedia,
  Trident:document.uniqueID,
  Gecko:'MozAppearance' in document.documentElement.style,
  Presto:window.opera,
  Blink:window.chrome,
  Webkit:typeof window.chrome == "undefined" && 'WebkitAppearance' in document.documentElement.style,
  Touch:typeof document.ontouchstart != "undefined",
  Mobile:(typeof window.orientation != "undefined") || (navigator.userAgent.indexOf("Windows Phone") != -1),
  ltAd4_4:typeof window.orientation != "undefined" && typeof(EventSource) == "undefined",
  Pointer:window.navigator.pointerEnabled,
  MSPoniter:window.navigator.msPointerEnabled
 }
})();

console.log(_ua);

$(function() {
  var userAgent = window.navigator.userAgent;
  var appVersion = window.navigator.appVersion;
  var appName = window.navigator.appName;
  var platform = window.navigator.platform;
  var appCodeName = window.navigator.appCodeName;
  console.log(appName);
  $("#box2").text(userAgent);
  $("#box3").text(appVersion);
  $("#box4").text(appName);
  $("#box5").text(platform);
  $("#box6").text(appCodeName);
  if(userAgent.match(/Line/)){
    $("#ch-id").text("LINE");
  }else
  if(userAgent.match(/FBAV/)){
    $("#ch-id").text("Facebook");
  }else
  if(userAgent.match(/IAB/)){
    $("#ch-id").text("OUTTTTTT");
  }if(userAgent.match(/Twitter/)){
    $("#ch-id").text("OUTTTTTT");
  }else{
    $("#ch-id").text(appCodeName);
  }
});
