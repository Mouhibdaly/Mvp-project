// ClothesList.jsx
import React from "react";
import Card from "./card.jsx";

const ClothesList = (props) => {
  console.log(props,"this is prosps");
  return (
    <div className="container">
      {props.clothes.map((cloth, index) => (
        <div key={index}>
          <Card
            cloth={cloth} 
            update={props.update}
            remove={props.remove}
          />
        </div>
      ))}
    </div>
  );
};

export default ClothesList;
