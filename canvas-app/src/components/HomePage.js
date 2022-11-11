import React, { Component } from "react";
import CourseCard from "./CourseCard";

export class HomePage extends Component {
  courses = [
    {
      title: "Computer Graphics",
      code: "UC2022-CG",
      room: "812b Rhodes",
      time: "MWF 4:30-5:20pm",
      professor: "Dr. Jillian Aurisano",
      url:
        "/Users/shivamabrol/Desktop/course-data/computer_graphics/pages/08.html",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmSe_SYl6R_HqZ0IEMu--wxj46A4MCXe6LQ&usqp=CAU",
      publishedAt: "2021-08-26T11:40:16+00:00",
      content:
        '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
    },
    {
      title: "Senior Design",
      code: "UC2022-SD",
      room: "812 Rhodes",
      time: "T 12:00-3:00pm",
      professor: "Dr. Jillian Aurisano",
      url:
        "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6a94c310889627.560ed150e2ab3.jpg?h=200",
      publishedAt: "2021-08-26T09:07:52Z",
      content:
        "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
    },
    {
      title: "User Interface Design",
      code: "UC2022-UI",
      room: "661 Baldwin",
      time: "MWF 1:25-2:20pm",
      professor: "Dr. Jillian Aurisano",
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
      courses: this.courses,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container mx-15 ">
        <h2>Courses Fall'22</h2>
        <div className="row">
          {this.state.courses.map((element) => {
            return (
              <div className="col" key={element.url}>
                <CourseCard
                  title={element.title}
                  code={element.code}
                  room={element.room}
                  time={element.time}
                  professor={element.professor}
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

export default HomePage;
