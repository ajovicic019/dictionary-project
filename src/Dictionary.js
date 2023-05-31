import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
