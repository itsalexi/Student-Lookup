import './Student.css';

const Student = ({ id, name, email }) => (
    <div className="student-card">
        <div className="student-info">
            <img
                className="student-img"
                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                alt="student"
            />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </div>
);

export default Student;
