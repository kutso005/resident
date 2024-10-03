import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Search = ({ setSearch, searchInput, setSearchInput }) => {
  return (
    <div className="search">
      <div className="d-flex  search_border mt-1">
        <CiSearch size={24} style={{ cursor: "pointer" }} />
        <input
          className="inputs"
          type="text"
          placeholder="Поиск"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <IoMdClose
          size={24}
          onClick={() => setSearch(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Search;
