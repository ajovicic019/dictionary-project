import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition"> {definitions.definition}</div>

            <div className="example">
              {" "}
              <em> {definitions.example}</em>
            </div>

            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
