import Student from '../Student/Student';
import './StudentList.css';

const StudentList = ({ students }) => (
    <div className="student-list">
        {students.map((student) => {
            return (
                <Student
                    name={student.name}
                    id={student.id}
                    key={student.id}
                    email={student.email}
                />
            );
        })}
    </div>
);

export default StudentList;
