const now = new Date();
const luciano_release = new Date("September 4, 2019");

const now_year = now.getFullYear();
const now_month = now.getMonth();
const now_date = now.getDate();

const release_year = luciano_release.getFullYear();
const release_month = luciano_release.getMonth();
const release_date = luciano_release.getDate();

if(now_year == release_year){
  var duration_month = now_month - release_month;
  var text = "まだ" + duration_month + "ヶ月！？";
}else{
  var duration_month = "未実装です！"
}

function tweet_button(){
  var url = encodeURIComponent( document.location );
  var text = "3";
  document.write('<a href="https://twitter.com/share?url=' + url + '&text=' + text + '&count=none&lang=ja">Tweet</a>')
}
