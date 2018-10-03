import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section, Container } from '../common/';
import Xo from '../images/xo.png';

//Blue backgrounded intro text use on hostel and group pages

const IntroContainer = styled(Container)`
  position: relative;
`;

const Intro = styled.div`
  font-size: 1.343rem;
  line-height: 2rem;
`;

const Heart = styled.img`
  position: absolute;
  bottom: -20px;
  right: 35px;
  float: right;
  text-align: right;
`;

const IntroText = props => {
  return (
    <Section lightBlueBackground>
      <IntroContainer>
        <Intro>{props.text}</Intro>
        <Heart src={Xo} alt="base hearts and cross" />
      </IntroContainer>
    </Section>
  );
};

IntroText.propTypes = {
  text: PropTypes.string
};

export { IntroText };
