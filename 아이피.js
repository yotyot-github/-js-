//Y아이피 (아이피)로 작동합니다


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.indexOf("Y아이피")==0){
    var ip = msg.replace("Y아이피 ","");
    var allsee = new Array(1000).join(String.fromCharCode(847));   
    var data = org.jsoup.Jsoup.connect("http://ip-api.com/xml/"+ip).get();
    var data2 = data.select("country").toString();
    var data3 = data2.replace("<country>", "국가 :");
    data3 = data3.replace("</country>", "");
    var data4 = data.select("regionName").toString();
    var data5 = data4.replace("<regionName>", "지역 :");
    data5 = data5.replace("</regionName>", "");
    var data6 = data.select("city").toString();
    var data7 = data6.replace("<city>", "도시 :");
    data7 = data7.replace("</city>", "");
    var data8 = data.select("isp").toString();
    var data9 = data8.replace("<isp>", "공유기 :");
    data9 = data9.replace("</isp>", "");
    var data10 = data.select("zip").toString();
    var data11 = data10.replace("<zip>", "우편번호 :");
    data11 = data11.replace("</zip>", "");
    var data12 = "아이피 주소 "+ip+"에 대한 검색 결과"+allsee+"\n\n"+data3+"\n"+data5+"\n"+data7+"\n"+data9+"\n"+data11;
            replier.reply(data12);
    
  }
}
