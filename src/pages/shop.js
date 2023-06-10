import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';
import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Layout from '../components/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';

const ShopPage = (props) => {
  const data = generateMockProductData(4, 'woman');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'small'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Solis' },
                { label: 'Shop' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Solis Timepieces`}
          subtitle={
            'Where you found the timeless timepieces'
          }
        />
        <Container size={'small'} spacing={'min'}>

          <div className={styles.productContainer}>
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
