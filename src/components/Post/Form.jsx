import { useState } from "react";
import FileBase64 from "react-file-base64";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import NavBar from "./NavBar";

const Form = () => {
  const [newPostState, setnewPostState] = useState({
    image: "",
    author: "",
    location: "",
    description: "",
  });
  const handleUserPost = () => {
    axios({
      url:"https://instaclone-10x.onrender.com/new",
      method: "POST",
      headers: {},
      data: newPostState,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar />
       <br />
       <br />
      <div className="formbox">
        <form>
          <div className="box1">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setnewPostState({ ...newPostState, image: base64 })
              }
            />
            
          </div>

          <div className="box2">
            <input
              type="text"
              placeholder="Author"
              onChange={(e) =>
                setnewPostState({ ...newPostState, author: e.target.value })
              }
            />
          
          
            <input
              type="text"
              placeholder="location"
              onChange={(e) =>
                setnewPostState({ ...newPostState, location: e.target.value })
              }
            />
           </div>
          
          <div className="box3">
            <input
              type="text"
              placeholder="description"
              onChange={(e) =>
                setnewPostState({
                  ...newPostState,
                  description: e.target.value,
                })
              }
            />
        
          </div>
<div className="button1">
          <Link to="/post">
            <button id="post-button" type="submit" onClick={handleUserPost}>
              POST
            </button>
          </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;