
//이 소스를 작동시키기 전 먼저 표준국어대사전 api 키를 받아주세요

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("Y국어사전")==0){
    let code = "KEY";
    var allsee = new Array(1000).join(String.fromCharCode(847));
    var data = org.jsoup.Jsoup.connect("https://stdict.korean.go.kr/api/search.do?key="+code+"&q="+encodeURI(msg.substring(6))).get();
    var data1 = data.select("num").toString();
    var data2 = data1.replace("<num>", "검색 결과 갯수 :");
    data2 = data2.replace("</num>", "");
    var data4 = data.select("definition").toString();
    var data5 = data4.replace(/<definition><!/g, "");    
    data5 = data5.replace(/CDATA/g,"");
    data5 = data5.replace(/definition/g, "");
    data5= data5.replace(/<[^>]+>/g, "");
    data5 = data5.replace(/>/g,"");
    var data6 = data.select("pos").toString();
    var data7 = data6.replace(/<pos>/, "품사 :");
    data7 = data7.replace(/pos/, "");
    data7 = data7.replace(/<[^>]+>/g, "");
    var data8 = data.select("type").toString();
    var data9 = data8.replace(/<type>/, "특수어/일반어 :");
    data9 = data9.replace(/type/, "");
    data9 = data9.replace(/<[^>]+>/g, "");
replier.reply(msg.substring(6)+"에 대한 표준국어대사전 검색결과"+allsee+"\n\n"+data9+"\n"+data7+"\n"+data5);
  }
  
  
}
