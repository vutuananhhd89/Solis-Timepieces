import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.jpg'}
        title={'Timeless Timepieces'}
        subtitle={'Discover your vintage watches'}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'Universal Geneve'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'Universal Geneve back'}
            title={'Universal Geneve'}
            description={`Rare and original 1941-42 Universal Geneve waterproof-style man's larger size Spillmann-cased chronograph, in very good condition and in proper working`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>
      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Solis'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
