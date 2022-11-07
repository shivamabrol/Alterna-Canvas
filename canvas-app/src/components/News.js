import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Sibusiso Mjikeliso",
      title: "Computer Graphics",
      description: "UC2022-CG",
      url:
        "/Users/shivamabrol/Desktop/course-data/computer_graphics/pages/08.html",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmSe_SYl6R_HqZ0IEMu--wxj46A4MCXe6LQ&usqp=CAU",
      publishedAt: "2021-08-26T11:40:16+00:00",
      content:
        '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "ABC News",
      title: "Senior Design",
      description: "UC2022-SD",
      url:
        "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6a94c310889627.560ed150e2ab3.jpg?h=200",
      publishedAt: "2021-08-26T09:07:52Z",
      content:
        "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title: "UI",
      description: "UC2022-UI",
      url:
        "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://www.rasmussen.edu/-/media/images/blogs/school-of-design/2020/what-is-user-interface-design.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container mx-15 ">
        <h2>Courses Fall'22</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
