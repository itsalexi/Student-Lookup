import { Component } from 'react';
import Student from '../Student';

class StudentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { students } = this.props;
        return (
            <div className="student-list">
                {students.map((student) => {
                    return <Student name={student.name} id={student.id} />;
                })}
            </div>
        );
    }
}

export default StudentList;
