import React from "react";

export default function Example(props) {
  if (props.example && props.example.length > 0) {
    return (
      <span className="Example">
        <strong>Example: </strong>
        <ul>
          {props.example.map(function (example, index) {
            return <li key={index}>{example}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return (
      <div>
        <em>We could not find any examples for this definition</em>
      </div>
    );
  }
}
