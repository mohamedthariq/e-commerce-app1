import React, { useEffect, useState } from "react";

function Navbar({getSearchRes}) {
  const [searchDataValue, setSearchDataValue] = useState("");
  const [searchDataValue1, setSearchDataValue1] = useState([]);

  const handleChange = (event)=> {
    setSearchDataValue(event.target.value);
  }
  // By Default when load page we showing the product list and when search in navbar showing the product list 
  useEffect(() => {
    const searchProd = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/search?q=${searchDataValue}`);
          const searchData = await response.json();
          setSearchDataValue1(searchData.products);
          //  console.log(searchDataValue, "searchdata");
        } catch(error) {
            console.error("Error searching data:", error);
        }
    }
    searchProd();

  }, [searchDataValue]);

  useEffect(()=> {
    getSearchRes(searchDataValue1);
  }, [searchDataValue1]);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container-lg">
          <a className="navbar-brand fw-bold fs-2 logoText" href="#">
            M<span className="logoCol">oBoo</span>M
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">  
          {/* serach bar  */}
          <form className="searchProduct mx-auto">
              <input id="inpSearch"
                onChange={handleChange}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mx-auto me-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-transparent">
                    <a className="nav-link" href="#">
                    Store
                    </a>
                </button>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-transparent">
                    <a className="nav-link" href="#">
                    Account
                    </a>
                </button>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-transparent">
                    <a className="nav-link" href="#">
                    Wish List
                    </a>
                </button>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-transparent">
                    <a className="nav-link fw-bold" href="#">
                    Basket <i className="fa fa-shopping-basket ms-1"></i>
                    </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
