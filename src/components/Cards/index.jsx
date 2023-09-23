import { useEffect, useState } from "react";
import data from "../Cards/data.json";
import "../Cards/styles.css";
import axios from "axios";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getData();
  }, []);

  return <div className="card-list">
    {products.map((item, index) =>
      <div className="card" key={index}>
        <img src= alt="" />
      </div>
    )}
  </div>;
};

export default Cards;
