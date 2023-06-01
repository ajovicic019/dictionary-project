import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/e

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
