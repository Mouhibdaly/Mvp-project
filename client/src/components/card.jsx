import React, { useState } from "react";

function Card(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [vue, setVue] = useState(false);

  return (
    <div className="Card">
      <p>
        <img src={props.cloth.image} alt="Cloth" />
      </p>
      <h3>Cloth name: {props.cloth.name}</h3>
      <p>Cloth type: {props.cloth.type}</p>
      <p>Cloth price: {props.cloth.price}</p>
      <div className="btns">
      <button onClick={() => setVue(!vue)}>Update</button>
      <button className="delete" onClick={() => props.remove(props.cloth.id)}>
        Delete
      </button>
      </div>
      {vue && (
        <div>
          <input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Type" type="text" onChange={(e) => setType(e.target.value)} />
          <input placeholder="Price" type="text" onChange={(e) => setPrice(e.target.value)} />
          <input placeholder="Image" type="text" onChange={(e) => setImage(e.target.value)} />
          <button
            onClick={() =>
              props.update(props.cloth.id, name, type, price, image)
            }
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
