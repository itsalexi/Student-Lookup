import { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        const { changeHandler, placeholder, className } = this.props;
        return (
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={changeHandler}
            />
        );
    }
}

export default SearchBox;
