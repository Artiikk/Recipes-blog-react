import React, { useState, useEffect } from "react";
import withCookingService from "../hoc";
import ItemDescription from "../item-description";

import Spinner from '../spinner';

import "./_item-list.scss";

const ItemList = ({ cookingService, onItemSelected }) => {
  const [foods, setFood] = useState({ food: [], loading: true });

  useEffect(() => {
    cookingService
      .getFood()
      .then(data => setFood({ food: data, loading: false }));
  }, []);
  
  const items = (
    <ul className="recipes">
      {foods.food.map(food => {
        const { id, title, coverImage } = food;
        return (
          <li key={id} className="col-md-4 mt-5">
            <ItemDescription
              title={title}
              image={coverImage}
              onClick={() => onItemSelected(id)}
            />
          </li>
        );
      })}
    </ul>
  );
  const content = foods.loading ? <Spinner /> : items;
  return <>{content}</>
};

export default withCookingService()(ItemList);
