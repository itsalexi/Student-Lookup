import './SearchBox.css';

const SearchBox = ({ changeHandler, placeholder, className }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={changeHandler}
    />
);

export default SearchBox;
