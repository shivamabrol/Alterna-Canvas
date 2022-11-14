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
      url: "/secondC",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmSe_SYl6R_HqZ0IEMu--wxj46A4MCXe6LQ&usqp=CAU",
    },
    {
      title: "Senior Design",
      code: "UC2022-SD",
      room: "812 Rhodes",
      time: "T 12:00-3:00pm",
      professor: "Dr. Jillian Aurisano",
      url: "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6a94c310889627.560ed150e2ab3.jpg?h=200",
    },
    {
      title: "User Interface Design",
      code: "UC2022-UI",
      room: "661 Baldwin",
      time: "MWF 1:25-2:20pm",
      professor: "Dr. Jillian Aurisano",
      url: "/UserInterfaceHome",
      urlToImage:
        "https://www.rasmussen.edu/-/media/images/blogs/school-of-design/2020/what-is-user-interface-design.jpg",
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
