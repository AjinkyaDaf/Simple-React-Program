import style from "./About.css" ;
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default About;
 
function About() {
 return (<>
       <Navbar/>
    <div className="About">
        <h1>About</h1></div>
        <Footer/>
        </>
 );
}