import React from 'react';

import ItemList from '../components/item-list';
import { withRouter } from 'react-router-dom';

const MainPage = ({ history, match }) => {
  return <ItemList onItemSelected={(id) => history.push(`${id}`)} />
}

export default withRouter(MainPage);
