import { Component } from 'react';

class SearchBox extends Component {
    render() {
        const { changeHandler, placeholder, className } = this.props;
        return (
            <input
                className={className}
                type="search"
                placeholder={placeholder}
                onChange={changeHandler}
            />
        );
    }
}

export default SearchBox;
