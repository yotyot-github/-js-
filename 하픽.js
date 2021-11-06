//마인크래프트 서버 하이픽셀의 동시 접속자 수를 알려주는 소스입니다.

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("Y하픽동접")==0){
    
var data = org.jsoup.Jsoup.connect("https://minecraft-api.com/api/ping/online/mc.hypixel.net/25565").get();
data = data.select("body").toString();
data = data.replace("<body>", "현재 하이픽셀의 동시접속자 수는");
data = data.replace("</body>", "명 입니다");
data = data.replace("\n", "");
data = data.replace(/(\r\n|\n|\r)/gm, "");
replier.reply(data);

  
 
}}
