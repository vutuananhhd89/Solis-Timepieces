import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>


{/* Config.footerLinks */}


            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>Discover more vintage watches</span>
                <p className={styles.promoMessage}>
                  Get 10% off when buying our 1st watch of the week through Instagram & Facebook
                </p>
                {/* <form
                  className={styles.newsLetterForm}
                  onSubmit={(e) => subscribeHandler(e)}
                >
                  <FormInputField
                    icon={'arrow'}
                    id={'newsLetterInput'}
                    value={email}
                    placeholder={'Email'}
                    handleChange={(_, e) => setEmail(e)}
                  />
                </form> */}
                <div className={styles.socialContainer}>
                  {/* {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick('youtube')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'youtube'}></Icon>
                    </div>
                  )} */}

                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick('instagram')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'instagram'}></Icon>
                    </div>
                  )}

                  {Config.social.facebook && (
                    <div
                      onClick={() => handleSocialClick('facebook')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'facebook'}></Icon>
                    </div>
                  )}

                  {/* {Config.social.twitter && (
                    <div
                      onClick={() => handleSocialClick('twitter')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'twitter'}></Icon>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            {/* <div className={styles.settings}>
              <Dropdown
                label={'Country/Region'}
                optionList={Config.currencyList}
              />
              <Dropdown label={'Language'} optionList={Config.languageList} />
            </div> */}
            <div className={styles.copyrightContainer}>
              <div className={styles.creditCardContainer}>
                {Config.paymentOptions.amex && (
                  <img
                    className={styles.amexSize}
                    src={'/amex.png'}
                    alt={'amex'}
                  ></img>
                )}
                {Config.paymentOptions.mastercard && (
                  <img
                    className={styles.masterSize}
                    src={'/master.png'}
                    alt={'mastercard'}
                  ></img>
                )}
                {Config.paymentOptions.visa && (
                  <img
                    className={styles.visaSize}
                    src={'/visa.png'}
                    alt={'visa'}
                  ></img>
                )}
              </div>
              {/* <span>
                Solis Timepieces {new Date().getFullYear()}© 
              </span> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
