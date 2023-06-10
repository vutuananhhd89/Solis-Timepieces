import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
