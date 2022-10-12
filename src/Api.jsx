import React from "react";
import "./Api.css";

import { useState, useEffect } from "react";
import NavBar from "./components/Post/NavBar";
function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://node-api-instaclone-10x.herokuapp.com/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data.reverse());
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="api">
        {data.map((item) => {
          return (
            <>
            <div className="Card">
                <div className="header">
                <div className="namel">
                    <h4>{item.author}</h4>
                    <p>{item.location}</p>
                </div>
                <div className="dots">...</div>

                </div>
                <div className="contain">
                    <img src={item.image} alt="" />
                </div>
                <div className="footer">
                    <div className="f1">
                      <img src="./images/heart.png" alt="" />
                      <img src="./images/share.png" alt="" />
                      <h3>{item.date}</h3>
                    </div>
                    <div className="f2">
                       <h2>60 likes</h2>
                    </div>
                    <div className="f3">
                      <p>{item.description}</p>
                    </div>
                </div>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Api;
