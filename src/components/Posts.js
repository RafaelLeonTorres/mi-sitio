// src/components/Home.js
//import { useTranslation } from 'react-i18next';

import React from 'react';
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Post1 from './Posts/Post1';

const Home = () => {

  //const { t } = useTranslation();

  return (
    <Container className="my-5">
      <Post1/>
    </Container>
  );
};

export default Home;
