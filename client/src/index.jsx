// index.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ClothesList from "./components/clothes.jsx";

const App = () => {
  const [clothes, setClothes] = useState([]);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/clothes/getAll`)
      .then((res) => {
        console.log(res.data);
        setClothes(res.data);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const addNewClothes = (clotheName, clotheType, clothePrice, clotheImage) => {
    axios
      .post("http://localhost:3001/api/clothes/post", {
        name: clotheName, 
        type: clotheType,
        price: clothePrice,
        image: clotheImage,
      })
      .then(function (response) {
        console.log(response);
        setUpdate(!update);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateClothes = (id, clotheName, clotheType, clothePrice, clotheImage) => {
    axios
      .put(`http://localhost:3001/api/clothes/update/${id}`, {
        name: clotheName,
        type: clotheType,
        price: clothePrice,
        image: clotheImage,
      })
      .then((res) => {
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  const removeClothes = (id) => {
    axios
      .delete(`http://localhost:3001/api/clothes/delete/${id}`)
      .then((res) => {
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button className="add" onClick={() => setShow(!show)}>Add new clothes</button>
      
      {show && (
        <div className="add_input">
          <div>
        
          </div>
          
          <input className = "addName" placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
          <input className = "addType" placeholder="Type" type="text" onChange={(e) => setType(e.target.value)} />
          <input  className = "addPrice" placeholder="Price" type="text" onChange={(e) => setPrice(e.target.value)} />
          <input  className = "addImage" placeholder="Image" type="text" onChange={(e) => setImage(e.target.value)} />
          <button
          className="submit"
            onClick={() => {
              addNewClothes(name, type, price, image);
              setShow(!show);
            }}
          >
            Submit
          </button>
        </div>
      )}
      <ClothesList clothes={clothes} remove={removeClothes} update={updateClothes} setShow = {setShow} show = {show}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
