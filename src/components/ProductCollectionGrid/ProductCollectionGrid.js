import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/citizenV2.jpg'}
        title={'Men'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/omegaSeamaster.jpg'}
        title={'Women'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/seiko.jpg'}
        title={'Accessories'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/UniversalGen.jpg'}
        title={'Simple Cotton'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
