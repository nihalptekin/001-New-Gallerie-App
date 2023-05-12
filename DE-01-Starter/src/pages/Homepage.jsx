import React from "react";

import "../styles/style.css";

const Homepage = ({ data }) => {
  console.log(data);

  return (
  
    <div>
        <h1>Image Gallery</h1>
        <div  className="container"> 
      {data.map(({ id, photographer, src }) => {
        return (
          <div className="main" key={id}>
            <div className="picture">
              <img src={src.large} />
            </div>
            <div className="link">
              <a href="#">{photographer}</a>
            </div>
          </div>
         
        );
      })}
      </div>
    </div>
  );
};

export default Homepage;
