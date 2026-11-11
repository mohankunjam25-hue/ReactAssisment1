import Navbar from "./component/Navbar";
import StudentCard from "./component/StudentCard";
import StudentList from "./component/StudentList";
import Footer from "./component/Footer";

const students = [
  { id: 1, name: "Rahul", email: "rahul@gmail.com", course: "React", marks: 85 },
  { id: 2, name: "Priya", email: "priya@gmail.com", course: "JavaScript", marks: 92 },
  { id: 3, name: "Aman", email: "aman@gmail.com", course: "Python", marks: 65 },
  { id: 4, name: "Neha", email: "neha@gmail.com", course: "React", marks: 78 },
  { id: 5, name: "Rohit", email: "rohit@gmail.com", course: "JavaScript", marks: 55 },
];

// const studentNames = students.map(student => student.name);

const topStudents = students.filter(student => student.marks > 70);

const findStudent = (id) => students.find(student => student.id === id);

const averageMarks = students.reduce(
  (total, student) => total + student.marks, 0
) / students.length;

function App() {
  const featuredStudent = findStudent(1);

  return (
    <>
      <Navbar />

      <main>
        <h1>Student Information Dashboard</h1>

        <section>
          <h2>Total Students: {students.length}</h2>
          <h2>Average Marks: {averageMarks.toFixed(2)}</h2>
          <h2>Students Above 70: {topStudents.length}</h2>
        </section>

        <section>
          <h2>Featured Student</h2>
          <StudentCard student={featuredStudent} />
        </section>

        <section>
          <h2>All Students</h2>
          <StudentList students={students} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;