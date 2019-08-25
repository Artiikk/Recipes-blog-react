import React from 'react';

import ItemList from '../components/item-list';
import { withRouter } from 'react-router-dom';

const MainPage = ({ history, match }) => {
  return <ItemList onItemSelected={(id) => history.push(`Recipes-blog-react/${id}`)} />
}

export default withRouter(MainPage);
