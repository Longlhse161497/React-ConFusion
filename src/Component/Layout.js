import { Link, NavLink } from "react-router-dom";

function Layout(props){
    return(
        <nav>
            <ul>
                <li>
                    {/* <Link to="/Home">Home</Link> */}
                    <NavLink to="/Home" activeStyle={{color:'red'}}>Home</NavLink>
                </li>
                <li>
                    {/* <Link to="/Blogs">Blogs</Link> */}
                    <NavLink to="/Blogs" activeStyle={{color:'red'}}>Blogs</NavLink>
                </li>
                <li>
                    {/* <Link to="/Contact">Contact</Link> */}
                    <NavLink to="/Contact" activeStyle={{color:'red'}}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Layout;