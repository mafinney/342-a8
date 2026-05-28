import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;