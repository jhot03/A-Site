import { Link } from 'react-router-dom';
import "../styles/Header.css"


const Header = () => {
    return (
        <div className="header">
            <nav className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/testimonies">Testimonies</Link>
            </nav>
        </div>
    );
}

export default Header;