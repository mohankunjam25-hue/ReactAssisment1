// import { useState } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import StudentCard from "./component/StudentCard";
import StudentList from "./component/StudentList";

function App(){
  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "mohankunjam25@navgurukul.org",
      course: "SOP",
      marks: 90,
    },
    {
      id: 2,
      name: "John Doe",
      email: "mohankunjam25@navgurukul.org",
      course: "SOP",
      marks: 80,
    },
    {
      id: 3,
      name: "John Doe",
      email: "mohankunjam25@navgurukul.org",
      course: "SOP",
      marks: 70,
    },
    {
      id: 4,
      name: "John Doe",
      email: "mohankunjam25@navgurukul.org",
      course: "SOP",
      marks: 70,
    },
    {
      id: 5,
      name: "John Doe",
      email: "mohankunjam25@navgurukul.org",
      course: "SOP",
      marks: 60,
    },
  ];

  return(
    div
    div
      <Navbar/>
      <StudentCard students={students}/>
      <StudentList students={students}/>
      <Footer/>
    </div>
  )

}
export default App;








