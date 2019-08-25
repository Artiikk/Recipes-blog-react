import React from 'react';

import { withRouter } from 'react-router-dom';
import ItemDetails from '../components/item-details';

const ItemDetailsPage = ({ itemId }) => {
  return <ItemDetails itemId={itemId} />
}

export default withRouter(ItemDetailsPage);
