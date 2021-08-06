import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React ZTF's blog</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;