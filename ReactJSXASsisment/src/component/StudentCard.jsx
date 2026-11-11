function StudentCard({ student }) {
  const { id, name, email, course, marks } = student;

  return (
    <div>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>

      <p>{marks > 70 ? "Good Performance" : "Needs Improvement"}</p>
    </div>
  );
}

export default StudentCard;
