//Y예능 (예능)으로 작동합니다.

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("Y예능")==0){
    var allsee = new Array(1000).join(String.fromCharCode(847));
    var get = msg.replace("Y예능 ", "");
    var tv = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+get+" 정보").get();
    tv = tv.select('dd');
    tv = tv.select("span");
    tv = tv.select("span.text").toString();
    tv = tv.replace("<span class=\"text\">", "편성 : ");
    tv = tv.replace(/<[^>]+>/g, "");
    tv = tv.replace("정보확인 내용 열고 닫기", "");
    var tv2 = tv.substr(48);
    var tv3 = tv.substr(0, 48);
    var tv4 = "예능/드라마 프로그램 " + get + "에 대한 검색 결과\n\n" + allsee + tv3 + "\n제작진 :" + tv2;
    replier.reply(tv4);
  }
}
