import { Component } from 'react';
import Student from '../Student/Student';
import './StudentList.css';

class StudentList extends Component {
    render() {
        const { students } = this.props;
        return (
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
    }
}

export default StudentList;
