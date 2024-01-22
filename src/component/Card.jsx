import { useState } from 'react';
import { useEffect } from 'react';
import MyPagination from './Pagination';

const ProductList = ({ selected, searchRes }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterData, setFilterData] = useState([]);

  // search result data 
  let resultData = searchRes; 
  let listToUse;
  // console.log(resultData, "result");

  // showing the product according to the dropdown catagory 
  useEffect(() => {
    const filterCatagory = async () => {
        try {
          const response = await fetch(
            `https://dummyjson.com/products/category/${selected}`
          );
          const filterData = await response.json();
          setFilterData(filterData.products);
          // console.log(filterData);
        } catch (error) {
          console.error("Error fetching dropdown selected data:", error);
        }
    };

    filterCatagory();
  }, [selected]);

  useEffect(() => {
    setProducts(resultData);

    // Calculate total pages based on the number of products (assuming 8 products per page)
    const tData = resultData;
    const totalPages = Math.ceil(tData.length / 8);
    setTotalPages(totalPages);
  }, [resultData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // checking and showing the data from drowdown or searchbar 
  if (selected !== "Select Categories") {
    listToUse = filterData;
  } else if (resultData) {
    listToUse = resultData;
  }

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;

  const displayedProducts = listToUse.slice(startIndex, endIndex);
//   const displayedProducts1 = Array.isArray(products) ? products.slice((currentPage - 1) * 8, currentPage * 8) : [];

  return (
    <>
    <div className="container-lg mt-4">
      <div className="row">
        {displayedProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-2 d-flex mb-3">
            <div className="card cardSection">
                <img className="card-img-top" src={product.images[0]} alt="product img" />
              <div className="card-body flex-fill py-2">
                <h6 className="card-title mb-2">{product.title}</h6>
                <p className="card-text mb-2 truncateText">{product.description}</p>
                <p className="card-text mb-1 fw-bold cardPrice">${product.price}</p>
                <p className="card-text mb-0 cardRating">
                  {/* Render star icons based on product.rating */}
                  {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                  {Array.from({ length: 5 - Math.floor(product.rating) }, (_, index) => (
                    <i key={index + 5} className="fa fa-star-o"></i>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MyPagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
    </>
  );
};

export default ProductList;
