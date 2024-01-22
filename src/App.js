import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import MyPagination from './component/Pagination';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  const [searchRes, SetSearchRes] = useState([]);

  function getSearchRes(res) {
    SetSearchRes(res);
  }

  return (
    <div className="App">
      <Navbar getSearchRes = {getSearchRes} />
      <Home searchRes = {searchRes} />
      <MyPagination />
      <Footer />
    </div>
  );
}

export default App;
