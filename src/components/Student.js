import { Component } from 'react';

class Student extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Student;
