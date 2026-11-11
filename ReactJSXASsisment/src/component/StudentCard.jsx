// import React from 'react'

function StudentCard({students}) {
  return (
    <div>
        <h2>Students Card</h2>
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Email: {student.email}</p>
                    <p>Course: {student.course}</p>
                    <p>Marks: {student.marks}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default StudentCard;