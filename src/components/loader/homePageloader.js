import './loader.css';
import React from 'react';
import ItemCardLoader from './itemloader.js';

const HomePageLoader = () => {
  return (
    <React.Fragment>
      <div className="spotlight_section homepage_loader">
        <div className="spotlight_1">
          <h2 className='animate'></h2>
          <p className='animate'></p>
        </div>
        <div className="spotlight_2 animate">

        </div>
      </div>

      <h3>Previous Items</h3>
      <div className="previous_items_container item_container">
        <div className="previous_items">
          <ItemCardLoader />
          <ItemCardLoader />
          <ItemCardLoader />
          <ItemCardLoader />
        </div>
      </div>

      <h3>Older Items</h3>
      <div className="old_items_container item_container">
        <ItemCardLoader />
        <ItemCardLoader />
        <ItemCardLoader />
        <ItemCardLoader />
      </div>

    </React.Fragment>
  )
}

export default HomePageLoader;
