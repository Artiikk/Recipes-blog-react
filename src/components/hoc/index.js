import React from 'react';
import { CookingServiceConsumer } from '../../cooking-context';

const withCookingService = () => (Wrapped) => {

  return (props) => {
    return (
      <CookingServiceConsumer>
        {
          (cookingService) => {
            return (<Wrapped {...props}
                     cookingService={cookingService}/>);
          }
        }
      </CookingServiceConsumer>
    );
  }
};

export default withCookingService;
