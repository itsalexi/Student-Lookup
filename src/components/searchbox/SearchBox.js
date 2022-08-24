import { Component } from 'react';

class SearchBox extends Component {
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

export default SearchBox;
