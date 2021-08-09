import React from "react";

function Dl(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.name}
        </span>
        <span>{props.emoji}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
export default Dl;
