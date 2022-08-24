import { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name } = this.props;
        return (
            <div key={id}>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Student;
