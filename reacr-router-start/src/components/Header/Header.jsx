import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/posts'>Posts</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;