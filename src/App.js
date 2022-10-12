import Landing from "./components/Landing/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./components/Post/Form";
import NavBar from "./components/Post/NavBar";
import Postview from "./components/Post/Postview";
import Api from "./Api";
import Form2 from "./components/Post/Form2";


function App() {
  return (
    <BrowserRouter>
  
        <Routes>         
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/createpost' element={<Form/>}/>
          {/* <Route path='/createpost' element={<Form2/>}/> */}
          <Route path='/post' element={<Postview/>}/>
          <Route path='/api' element={<Api/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
