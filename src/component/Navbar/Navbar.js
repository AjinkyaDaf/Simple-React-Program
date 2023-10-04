import { Link } from "react-router-dom";
import "./Navbar.css";
export default Navbar;
function Navbar(){
    return(


        <header>
        <div className="logo">
            <h1>Tristone</h1>
        </div>
        <nav>
            <div className="options">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </header>
    )
}