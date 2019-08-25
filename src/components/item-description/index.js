import React from "react";

import "./_item-description.scss";

const ItemDescription = ({
  title,
  image,
  onClick
}) => {
  return (
    <span className="item-description" onClick={onClick}>
      <span className="foodImage">
          <div className="uk-inline-clip uk-transition-toggle uk-overflow-hidden">
            <img
              src={image}
              alt="Example image"
              className="uk-animation-reverse uk-transform-origin-top-right"
              uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
            <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
              <p className="uk-h4 uk-margin-remove">{title}</p>
            </div>
          </div>
      </span>
    </span>
  );
};

export default ItemDescription;
