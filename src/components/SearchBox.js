import React from "react";
import { useState } from "react";
import axios from "axios";


const SearchBox = ({ setCharacter }) => {
  const [search, setSearch] = useState("");

  const searchType = () => {
    // Hacemos la petición con el id que haya
    // colocado el usuario en el input
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}/`)
      .then((res) => setCharacter(res.data));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={searchType}><b>Search</b></button>
    </div>
  );
};

export default SearchBox;