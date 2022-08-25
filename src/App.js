import { useState, useEffect } from 'react';

import StudentList from './components/student-list/StudentList';
import SearchBox from './components/searchbox/SearchBox';
import Header from './components/header/Header';

const App = () => {
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState(students);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setStudents(users));
    }, []);

    useEffect(() => {
        let newFilteredStudents = students.filter((student) => {
            return student.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        setFilteredStudents(newFilteredStudents);
    }, [students, searchField]);

    const searchHandler = (event) => {
        const search = event.target.value;

        setSearchField(search);
    };

    return (
        <div className="App">
            <Header className="header">
                <h1 className="title">Student Lookup</h1>
                <SearchBox
                    changeHandler={searchHandler}
                    placeholder="Find student"
                />
            </Header>
            <StudentList students={filteredStudents} />
        </div>
    );
};
export default App;
