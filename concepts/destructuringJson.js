let news = [
  {
    "title" : "sbs",
    "imgurl" : "https://localhost/sbs",
    "writer" : "스브스",
    "newslist" : [
      "[경제] 환율 안정으로 0.2퍼센트 포인트 하락 마감",
      "[경제] 코스피 1900선 회복"
    ]
  },
  {
    "title" : "mbc",
    "imgurl" : "https://localhost/mbc",
    "writer" : "엠비씨",
    "newslist" : [
      "[사회] 이태원 게이 클럽 코로나19 확진자 54명으로 급증",
      "[정치] 정부 재난 지원금 전국민에게 지급"
    ]
  }
]

// let [,mbc] = news;
// let {title, writer} = mbc;
// console.log(title, writer);

// let [, {title, imgurl}] = news;
// console.log(imgurl);

function getNewsList([, {newslist}]) {
  console.log(newslist);
}

getNewsList(news);