import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            students: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((students) => {
                this.setState({ students });
            });
    }

    render() {
        return (
            <div className="App">
                {this.state.students.map((student) => {
                    return (
                        <div key={student.id}>
                            <h1>{student.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
