import { Link } from "react-router-dom";
import "./LandingPage.css"
const Landing = () => {
  return (
    <>
     <div className="containerL">
      <div className="imageC">
        <img src="./images/space.jpg" alt="space" width={"500px"} height={"600px"}/>
      </div>
      <div className="btn">
        <h1>10x Team 04</h1>
        <Link to="/Post">
        <button>Enter</button>
        </Link>
      </div>
     </div>
    </>
  );
};
export default Landing;
