import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SOLIS</h4> */}
      <svg width={127} height={24} xmlns="http://www.w3.org/2000/svg"> <text x="100" y="50" font-size="40" text-anchor="middle" fill="black">SOLIS</text> </svg>
    </div>
  );
};

export default Brand;
