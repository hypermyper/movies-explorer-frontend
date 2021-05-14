import React from "react";
import "./MoreButton.css";

function MoreButton(props) {
  return (
    <section className="more">
      <button
        type="button"
        onClick={props.onMoreButtonClick}
        className="more__button"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;