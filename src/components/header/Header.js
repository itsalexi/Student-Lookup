import './Header.css';

const Header = ({ className, children }) => (
    <header className={className}>
        <nav>{children}</nav>
    </header>
);

export default Header;
