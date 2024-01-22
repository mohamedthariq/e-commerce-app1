import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./Card";
import { Dropdown } from "bootstrap";

function Home({searchRes}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Select Categories");
  const [catageryProduct, setCatageryProduct] = useState([]);

  // the below useEffect is setting the content in the drowdown list 
  useEffect(() => {
    const fetchCatagory = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const CatagoryData = await response.json();
        setCatageryProduct(CatagoryData);
      } catch (error) {
        console.error("Error fetching catagory data:", error);
      }
    };

    fetchCatagory();
  }, []);

  // when we search in the navbar changing the Dropdown text to default 
  useEffect(()=> {
    setIsSelected("Select Categories");
  }, [searchRes])

  // console.log(selected, "selected");

  return (
    <div>
      {/* Banner Component  */}
      <div className="container-lg mt-1">
        <div className="banner px-4 py-3 bg-primary text-white rounded">
          <h3>Lorem Example</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a href="#"> Read More</a>
          </p>
        </div>
      </div>
      {/* Dropdown Component  */}
      <div className="container-lg mt-3 rounded-3">
        <div className="dropdown ms-0">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            {selected}
            <span
              className={
                isActive ? "fa fa-angle-up fs-4" : "fa fa-angle-down fs-4"
              }
            />
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            {catageryProduct.map((cat, index) => (
              <div
                className="item"
                onClick={(e) => {
                  document.getElementById("inpSearch").value = "";
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductList selected = {selected} searchRes = {searchRes} />
    </div>
  );
}

export default Home;
