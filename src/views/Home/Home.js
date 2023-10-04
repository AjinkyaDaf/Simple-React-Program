import style from "./Home.css" ;
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default Home;
 
function Home() {
 return (<>
     <Navbar/>
    <div className="Home">
        <h1>Home</h1></div>
        <Footer/>
        </>
 );
}