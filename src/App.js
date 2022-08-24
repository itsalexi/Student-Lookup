import { Component } from 'react';
import StudentList from './components/student-list/StudentList';
import SearchBox from './components/searchbox/SearchBox';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            students: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((students) => {
                this.setState({ students });
            });
    }

    searchHandler = (event) => {
        // Everytime the input changes, we store the search field to the state
        // So everytime it changes, we re-render the DOM with the newly filtered data
        const search = event.target.value;
        this.setState({ searchField: search });
    };

    render() {
        const { students, searchField } = this.state;
        const { searchHandler } = this;

        // Everytime we re-render the app, we filter through the students array.
        let filtered = students.filter((student) => {
            return student.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        return (
            <div className="App">
                <SearchBox
                    className="search-box"
                    changeHandler={searchHandler}
                    placeholder="Student Name"
                />
                <StudentList students={filtered} />
            </div>
        );
    }
}

export default App;
