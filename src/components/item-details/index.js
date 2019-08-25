import React, { useState, useEffect } from "react";

import withCookingService from "../hoc";
import Spinner from "../spinner";

import "./_item-details.scss";

const randomId = () => Math.floor(Math.random() * 100000);
const ItemDetails = ({ itemId, cookingService }) => {
  const [data, setData] = useState({
    elements: {
      ingredients: [],
      instructions: []
    },
    loading: true
  });

  useEffect(() => {
    async function fetchData() {
      const result = await cookingService.getFood();
      const foundItem = result.find(({ id }) => id === Number(itemId));
      setData({ elements: foundItem, loading: false });
    }
    fetchData();
  }, []);

  const items = (
    <div className="item-details d-flex">
      <div className="uk-overflow-hidden">
        <img
          src={data.elements.coverImage}
          alt="Example image"
          className="uk-animation-reverse uk-transform-origin-top-right"
          uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
      </div>
      <div className="uk-animation-toggle">
        <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
          <h2>{data.elements.title}</h2>
          <h3>Recipes</h3>
          <ul className="item-instructions">
            {data.elements.instructions.map(el => {
              return <li key={randomId()}>{el}</li>;
            })}
          </ul>
          <h3>Ingredients</h3>
          <ul className="item-ingredients">
            {data.elements.ingredients.map(el => (
              <li key={randomId()}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const content = data.loading ? <Spinner /> : items;
  return <>{content}</>;
};

export default withCookingService()(ItemDetails);
