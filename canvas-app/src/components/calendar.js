import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  snackbar,
  setOptions,
  Popup,
  Button,
  Input,
  Textarea,
  Switch,
  Datepicker,
  SegmentedGroup,
  SegmentedItem,
} from "@mobiscroll/react";

setOptions({
  theme: "ios",
  themeVariant: "dark",
});

const defaultEvents = [
  {
    id: 4,
    allDay: true,
    start: "2022-11-10T10:30",
    end: "2022-1-10T11:30",
    title: "Stakeholder mtg.",
    description: "",
    // allDay: false,
    free: false,
    color: "#f44437",
  },
  {
    id: "syllabus.html",
    folder: "course_info",
    type: "syllabus",
    grading: "participation",
    points: "na",
    allDay: true,
    start: "8/15/22",
    end: "12/9/22",
    module: "none",
    title: "Syllabus",
    reference: "na",
  },
  {
    id: "module1",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "8/22/22",
    end: "8/26/22",
    module: "module1",
    title: "Foundations",
    reference: "na",
  },
  {
    id: "01-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/22/22",
    end: "8/22/22",
    module: "module1",
    title: "What is computer graphics",
    reference: "na",
  },
  {
    id: "01-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/24/22",
    end: "8/24/22",
    module: "module1",
    title: "Computer graphics pipeline",
    reference: "na",
  },
  {
    id: "01-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    points: "1",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Computer graphics hardware",
    reference: "na",
  },
  {
    id: "assignment_01.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "first assignment",
    reference: "na",
  },
  {
    id: "module2",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "8/29/22",
    end: "9/2/22",
    module: "module2",
    title: "Linear algebra",
    reference: "na",
  },
  {
    id: "02-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/29/31",
    end: "8/29/31",
    module: "module2",
    title: "Linear algebra p1",
    reference: "na",
  },
  {
    id: "02-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/31/22",
    end: "8/31/22",
    module: "module2",
    title: "Linear algebra p2",
    reference: "na",
  },
  {
    id: "02_03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/2/22",
    end: "9/2/22",
    module: "module2",
    title: "Linear algebra p3",
    reference: "na",
  },
  {
    id: "01.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/29/31",
    end: "8/29/31",
    module: "module2",
    title: "Intro",
    reference: "na",
  },
  {
    id: "02.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/29/31",
    end: "8/29/31",
    module: "module2",
    title: "Vectors",
    reference: "na",
  },
  {
    id: "03.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/31/22",
    end: "8/31/22",
    module: "module2",
    title: "Span",
    reference: "na",
  },
  {
    id: "04.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "8/31/22",
    end: "8/31/22",
    module: "module2",
    title: "Linear Transformations",
    reference: "na",
  },
  {
    id: "05.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/2/22",
    end: "9/2/22",
    module: "module2",
    title: "Matrix Multiplication",
    reference: "na",
  },
  {
    id: "06.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/2/22",
    end: "9/2/22",
    module: "module2",
    title: "3D transformations",
    reference: "na",
  },
  {
    id: "assignment_02.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "9/2/22",
    end: "9/9/22",
    module: "module2",
    title: "Linear algebra review",
    reference: "na",
  },
  {
    id: "module3",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "Rasterization",
    reference: "na",
  },
  {
    id: "03-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "How to draw lines",
    reference: "na",
  },
  {
    id: "03-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/9/22",
    end: "9/9/22",
    module: "module3",
    title: "How to draw shapes",
    reference: "na",
  },
  {
    id: "07.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "Determinant",
    reference: "na",
  },
  {
    id: "08.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "Inverse Matrices",
    reference: "na",
  },
  {
    id: "09.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "Nonsquare Marices",
    reference: "na",
  },
  {
    id: "10.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/9/22",
    end: "9/9/22",
    module: "module3",
    title: "Dot Product",
    reference: "na",
  },
  {
    id: "11.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/9/22",
    end: "9/9/22",
    module: "module3",
    title: "Cross product",
    reference: "na",
  },
  {
    id: "12.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/9/22",
    end: "9/9/22",
    module: "module3",
    title: "Cross product",
    reference: "na",
  },
  {
    id: "assignment_03.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "9/9/22",
    end: "9/26/22",
    module: "module3",
    title: "Rasterization exercise",
    reference: "na",
  },
  {
    id: "module4",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "9/12/22",
    end: "9/16/22",
    module: "module4",
    title: "Transformations",
    reference: "na",
  },
  {
    id: "04-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/12/22",
    end: "9/12/22",
    module: "module4",
    title: "Transformations p1",
    reference: "na",
  },
  {
    id: "04-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/14/22",
    end: "9/14/22",
    module: "module4",
    title: "Transformations p2",
    reference: "na",
  },
  {
    id: "04-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/16/22",
    end: "9/16/22",
    module: "module4",
    title: "Transformations p3",
    reference: "na",
  },
  {
    id: "13.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/12/22",
    end: "9/12/22",
    module: "module4",
    title: "Cross product as transformation",
    reference: "na",
  },
  {
    id: "14.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/12/22",
    end: "9/12/22",
    module: "module4",
    title: "Cramer's rule",
    reference: "na",
  },
  {
    id: "15.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/14/22",
    end: "9/14/22",
    module: "module4",
    title: "Change of bias",
    reference: "na",
  },
  {
    id: "16.html",
    folder: "pages",
    type: "inclass",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/16/22",
    end: "9/16/22",
    module: "module4",
    title: "Eigenvectors",
    reference: "na",
  },
  {
    id: "assignment_04.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "9/16/22",
    end: "9/23/22",
    module: "module4",
    title: "Transformations exercise",
    reference: "na",
  },
  {
    id: "module5",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "9/19/22",
    end: "9/23/22",
    module: "module5",
    title: "Projection",
    reference: "na",
  },
  {
    id: "05-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/19/22",
    end: "9/19/22",
    module: "module5",
    title: "Projection p1",
    reference: "na",
  },
  {
    id: "05-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/21/22",
    end: "9/21/22",
    module: "module5",
    title: "Projection p2",
    reference: "na",
  },
  {
    id: "05-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/23/22",
    end: "9/23/22",
    module: "module5",
    title: "Projection p3",
    reference: "na",
  },
  {
    id: "assignment_05.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "9/23/22",
    end: "9/30/22",
    module: "module5",
    title: "Projection exercises",
    reference: "na",
  },
  {
    id: "module6",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "9/26/22",
    end: "9/30/22",
    module: "module6",
    title: "Texture mapping",
    reference: "na",
  },
  {
    id: "06-01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/26/22",
    end: "9/26/22",
    module: "module6",
    title: "Texture mapping",
    reference: "na",
  },
  {
    id: "06-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/28/22",
    end: "9/28/22",
    module: "module6",
    title: "Texture mapping",
    reference: "na",
  },
  {
    id: "06-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "9/30/22",
    end: "9/30/22",
    module: "module6",
    title: "Texture mapping",
    reference: "na",
  },
  {
    id: "assignment_06.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "9/30/22",
    end: "10/5/22",
    module: "module5",
    title: "Texture mapping exercises",
    reference: "na",
  },
  {
    id: "module7",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "10/3/22",
    end: "10/14/22",
    module: "module7",
    title: "Color",
    reference: "na",
  },
  {
    id: "07-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "10/3/22",
    end: "10/3/22",
    module: "module7",
    title: "Color",
    reference: "na",
  },
  {
    id: "07-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "10/5/22",
    end: "10/5/22",
    module: "module7",
    title: "Color",
    reference: "na",
  },
  {
    id: "assignment_07.html",
    folder: "assignment",
    type: "assifgnment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "10/5/22",
    end: "10/14/22",
    module: "na",
    title: "Color",
    reference: "na",
  },
  {
    id: "module8",
    folder: "na",
    type: "module",
    grading: "na",
    points: "na",
    allDay: true,
    start: "10/12/22",
    end: "10/16/22",
    module: "module8",
    title: "Light and shadow",
    reference: "na",
  },
  {
    id: "08-02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "10/12/22",
    end: "10/12/22",
    module: "module8",
    title: "Light and shador",
    reference: "na",
  },
  {
    id: "08-03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "participation",
    points: "1",
    allDay: true,
    start: "10/14/22",
    end: "10/14/22",
    module: "module8",
    title: "Light and shadow",
    reference: "na",
  },
  {
    id: "assignment08.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    points: "10",
    allDay: true,
    start: "10/14/22",
    end: "10/26/22",
    module: "module8",
    title: "Light and shadow",
    reference: "na",
  },
  {
    id: "midterm.html",
    folder: "exams",
    type: "exams",
    grading: "exams",
    points: "100",
    allDay: true,
    start: "10/26/22",
    end: "10/26/22",
    module: "module8",
    title: "Midterm exam",
    reference: "na",
  },
  {
    name: "syllabus.html",
    folder: "course_info",
    type: "syllabus",
    grading: "participation",
    allDay: true,
    start: "8/15/22",
    end: "12/9/22",
    module: "none",
    title: "Syllabus",
    reference: "na",
  },
  {
    name: "module1",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "8/22/22",
    end: "8/26/22",
    module: "module1",
    title: "Introduction",
    reference: "na",
  },
  {
    name: "01.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Introduction",
    reference: "na",
  },
  {
    name: "module2",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "8/29/22",
    end: "9/2/22",
    module: "module2",
    title: "Forming teams",
    reference: "na",
  },
  {
    name: "02.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Forming teams",
    reference: "na",
  },
  {
    name: "module3",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "9/7/22",
    end: "9/7/22",
    module: "module3",
    title: "Initial project design",
    reference: "na",
  },
  {
    name: "03.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Initial project design",
    reference: "na",
  },
  {
    name: "assignment_01.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "First assignment",
    reference: "na",
  },
  {
    name: "module4",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "9/12/22",
    end: "9/16/22",
    module: "module4",
    title: "User profiles",
    reference: "na",
  },
  {
    name: "04.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "User profiles",
    reference: "na",
  },
  {
    name: "assignment_02.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "User profiles",
    reference: "na",
  },
  {
    name: "module5",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "9/19/22",
    end: "9/23/22",
    module: "module5",
    title: "Tasks",
    reference: "na",
  },
  {
    name: "05.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Tasks",
    reference: "na",
  },
  {
    name: "assignment_03.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "Tasks",
    reference: "na",
  },
  {
    name: "module6",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "9/26/22",
    end: "9/30/22",
    module: "module6",
    title: "Timeline",
    reference: "na",
  },
  {
    name: "06.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Timeline",
    reference: "na",
  },
  {
    name: "assignment_04.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "Timeline",
    reference: "na",
  },
  {
    name: "module7",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "10/3/22",
    end: "10/14/22",
    module: "module7",
    title: "Project status update",
    reference: "na",
  },
  {
    name: "07.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Project status update",
    reference: "na",
  },
  {
    name: "assignment_05.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "Project status update",
    reference: "na",
  },
  {
    name: "module8",
    folder: "na",
    type: "module",
    grading: "na",
    allDay: true,
    start: "10/3/22",
    end: "10/14/22",
    module: "module7",
    title: "Project status update",
    reference: "na",
  },
  {
    name: "08.pptx",
    folder: "presentations",
    type: "lecture",
    grading: "partitipation",
    allDay: true,
    start: "8/26/22",
    end: "8/26/22",
    module: "module1",
    title: "Project status update",
    reference: "na",
  },
  {
    name: "assignment_06.html",
    folder: "assignment",
    type: "assignment",
    grading: "assignment",
    allDay: true,
    start: "8/15/22",
    end: "8/29/22",
    module: "module1",
    title: "Project status update",
    reference: "na",
  },
];
const viewSettings = {
  schedule: { type: "month" },
};
const responsivePopup = {
  medium: {
    display: "anchored",
    width: 400,
    fullScreen: false,
    touchUi: false,
  },
};
const colorPopup = {
  medium: {
    display: "anchored",
    touchUi: false,
    buttons: [],
  },
};
const colors = [
  "#ffeb3c",
  "#ff9900",
  "#f44437",
  "#ea1e63",
  "#9c26b0",
  "#3f51b5",
  "",
  "#009788",
  "#4baf4f",
  "#7e5d4e",
];

function App() {
  const [myEvents, setMyEvents] = React.useState(defaultEvents);
  const [tempEvent, setTempEvent] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const [start, startRef] = React.useState(null);
  const [end, endRef] = React.useState(null);
  const [popupEventTitle, setTitle] = React.useState("");
  const [popupEventDescription, setDescription] = React.useState("");
  const [popupEventAllDay, setAllDay] = React.useState(true);
  const [popupEventDate, setDate] = React.useState([]);
  const [popupEventStatus, setStatus] = React.useState("busy");
  const [mySelectedDate, setSelectedDate] = React.useState(new Date());
  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
  const [colorAnchor, setColorAnchor] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState("");
  const [tempColor, setTempColor] = React.useState("");
  const colorPicker = React.useRef();
  const colorButtons = React.useMemo(() => {
    return [
      "cancel",
      {
        handler: () => {
          setSelectedColor(tempColor);
          setColorPickerOpen(false);
        },
        keyCode: "enter",
        text: "Save",
        cssClass: "mbsc-popup-button-primary",
      },
    ];
  }, [tempColor]);

  const saveEvent = React.useCallback(() => {
    const newEvent = {
      id: tempEvent.id,
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      allDay: popupEventAllDay,
      status: popupEventStatus,
      color: selectedColor,
    };
    if (isEdit) {
      // update the event in the list
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      setMyEvents([...myEvents, newEvent]);
      // here you can add the event to your storage as well
      // ...
    }
    setSelectedDate(popupEventDate[0]);
    // close the popup
    setOpen(false);
  }, [
    isEdit,
    myEvents,
    popupEventAllDay,
    popupEventDate,
    popupEventDescription,
    popupEventStatus,
    popupEventTitle,
    tempEvent,
    selectedColor,
  ]);

  const deleteEvent = React.useCallback(
    (event) => {
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              setMyEvents((prevEvents) => [...prevEvents, event]);
            },
            text: "Undo",
          },
          message: "Event deleted",
        });
      });
    },
    [myEvents]
  );

  const loadPopupForm = React.useCallback((event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start, event.end]);
    setAllDay(event.allDay || false);
    setStatus(event.status || "busy");
    setSelectedColor(event.color || "");
  }, []);

  // handle popup form changes

  const titleChange = React.useCallback((ev) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = React.useCallback((ev) => {
    setDescription(ev.target.value);
  }, []);

  const allDayChange = React.useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);

  const dateChange = React.useCallback((args) => {
    setDate(args.value);
  }, []);

  const statusChange = React.useCallback((ev) => {
    setStatus(ev.target.value);
  }, []);

  const onDeleteClick = React.useCallback(() => {
    deleteEvent(tempEvent);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  // scheduler options

  const onSelectedDateChange = React.useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const onEventClick = React.useCallback(
    (args) => {
      setEdit(true);
      setTempEvent({ ...args.event });
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventCreated = React.useCallback(
    (args) => {
      setEdit(false);
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventDeleted = React.useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  const onEventUpdated = React.useCallback((args) => {
    // here you can update the event in your storage as well, after drag & drop or resize
    // ...
  }, []);

  // datepicker options
  const controls = React.useMemo(
    () => (popupEventAllDay ? ["date"] : ["datetime"]),
    [popupEventAllDay]
  );
  const responsiveOptions = React.useMemo(
    () =>
      popupEventAllDay
        ? {
            medium: {
              controls: ["calendar"],
              touchUi: false,
            },
          }
        : {
            medium: {
              controls: ["calendar", "time"],
              touchUi: false,
            },
          },
    [popupEventAllDay]
  );

  // popup options
  const headerText = React.useMemo(
    () => (isEdit ? "Edit event" : "New Event"),
    [isEdit]
  );
  const popupButtons = React.useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Save",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    } else {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Add",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const onClose = React.useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setOpen(false);
  }, [isEdit, myEvents]);

  const selectColor = React.useCallback((color) => {
    setTempColor(color);
  }, []);

  const openColorPicker = React.useCallback(
    (ev) => {
      selectColor(selectedColor || "");
      setColorAnchor(ev.currentTarget);
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor]
  );

  const changeColor = React.useCallback(
    (ev) => {
      const color = ev.currentTarget.getAttribute("data-value");
      selectColor(color);
      if (!colorPicker.current.s.buttons.length) {
        setSelectedColor(color);
        setColorPickerOpen(false);
      }
    },
    [selectColor, setSelectedColor]
  );

  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={myEvents}
        clickToCreate="double"
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        selectedDate={mySelectedDate}
        onSelectedDateChange={onSelectedDateChange}
        onEventClick={onEventClick}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        onEventUpdated={onEventUpdated}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={responsivePopup}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Textarea
            label="Description"
            value={popupEventDescription}
            onChange={descriptionChange}
          />
        </div>
        <div className="mbsc-form-group">
          <Switch
            label="All-day"
            checked={popupEventAllDay}
            onChange={allDayChange}
          />
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker
            select="range"
            controls={controls}
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            responsive={responsiveOptions}
            onChange={dateChange}
            value={popupEventDate}
          />
          <div onClick={openColorPicker} className="event-color-c">
            <div className="event-color-label">Color</div>
            <div
              className="event-color"
              style={{ background: selectedColor }}
            ></div>
          </div>
          <SegmentedGroup onChange={statusChange}>
            <SegmentedItem value="busy" checked={popupEventStatus === "busy"}>
              Show as busy
            </SegmentedItem>
            <SegmentedItem value="free" checked={popupEventStatus === "free"}>
              Show as free
            </SegmentedItem>
          </SegmentedGroup>
          {isEdit && (
            <div className="mbsc-button-group">
              <Button
                className="mbsc-button-block"
                color="danger"
                variant="outline"
                onClick={onDeleteClick}
              >
                Delete event
              </Button>
            </div>
          )}
        </div>
      </Popup>
      <Popup
        display="bottom"
        contentPadding={false}
        showArrow={false}
        showOverlay={false}
        anchor={colorAnchor}
        isOpen={colorPickerOpen}
        buttons={colorButtons}
        responsive={colorPopup}
        ref={colorPicker}
      >
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index < 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={
                    "crud-color-c " + (tempColor === color ? "selected" : "")
                  }
                  data-value={color}
                >
                  <div
                    className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                    style={{ background: color }}
                  ></div>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index >= 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={
                    "crud-color-c " + (tempColor === color ? "selected" : "")
                  }
                  data-value={color}
                >
                  <div
                    className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                    style={{ background: color }}
                  ></div>
                </div>
              );
            } else return null;
          })}
        </div>
      </Popup>
    </div>
  );
}

export default App;
