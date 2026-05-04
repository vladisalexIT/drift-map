import { useState, useEffect } from "react";
import { products } from "../mock/products";

export default function useProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(products);
    }, 100); 
  }, []);

  return data;
}