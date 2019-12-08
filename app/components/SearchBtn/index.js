import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './_searchBtn.css';

function SearchBtn() {
  return (
  <div>
    <IoIosSearch size={25} color='#ffffff'/><span className='search-text'>Search</span>
  </div>
  );
}

export default SearchBtn;
