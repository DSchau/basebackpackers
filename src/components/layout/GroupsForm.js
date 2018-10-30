import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Section, Container, Button } from '../common/';
import {
  FormGroup,
  FormLabel,
  Input,
  TextArea,
  Optional,
  FormGroup2col,
  Select
} from '../layout/FormStyles';

import Tick from '../images/tick.svg';

const FormBox = styled.div`
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 3fr 3fr;
  margin-bottom: 1rem;
  form {
    padding: 3rem;
    background: white;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SellingPoints = styled.div`
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.white};
  padding: 4rem;
  h2 {
    line-height: inherit;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    background-image: url(${Tick});
    background-repeat: no-repeat;
    padding-left: 2rem;
    font-size: 1rem;
    margin-bottom: 1.4rem;
  }
`;

const Small = styled.p`
  font-size: 0.8rem;
`;

const GroupsForm = props => {
  return (
    <Section lightBackground id="bookingform">
      <Container maxwidth="900px">
        <h2>Let’s plan your group’s stay</h2>
        <p>
          Fill out this form for more info or to get your booking underway.{' '}
          Booking for a group of 10 people or less?{' '}
          <Link to={`hostels/${props.link}`}>
            You can book online with your credit card here
          </Link>
        </p>
      </Container>
      <FormBox>
        <form
          name="MAD booking form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div style={{ color: 'red', textAlign: 'right' }}>
            <small>* Required field</small>
          </div>
          {/* Hidden form variables below */}
          <input
            type="hidden"
            name="form-name"
            defaultValue="MAD booking form"
            readOnly
          />
          <Input
            type="hidden"
            name="product name"
            defaultValue={props.name}
            readOnly
          />
          <Input
            type="hidden"
            name="price"
            defaultValue={props.price}
            readOnly
          />
          <Input
            type="hidden"
            name="currency code"
            defaultValue={props.currency}
            readOnly
          />

          <FormGroup>
            <FormLabel htmlFor="name">
              Your Name:
              <span className="required">*</span>
            </FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Excited Bob"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">
              Your Email:
              <span className="required">*</span>{' '}
            </FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="bob@bringonthemadness.com"
              required
            />
            <Small>We won't share your email with anyone</Small>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="phone">Your Phone Number:</FormLabel>
            <Input
              id="phone"
              type="phone"
              name="phone"
              placeholder="+61 420 420 420"
            />
            <Small>
              It's so much easier for you if we can talk about detais on the
              phone
            </Small>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="date">
              When would you like to go/start:
              <span className="required">*</span>
            </FormLabel>
            <Input id="date" type="date" name="date" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="requirements">Special requirements:</FormLabel>
            <TextArea
              id="requirements"
              name="requirements"
              placeholder="I'm a vego aka meat is murder"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="terms"
              type="Checkbox"
              name="terms"
              inline
              required
              defaultValue="true"
            />{' '}
            <label htmlFor="terms">
              Of course I read and understood the{' '}
              <a href="/about/terms-and-conditions" target="_blank">
                terms and conditions
              </a>
              .<span className="required">*</span>
            </label>
          </FormGroup>
          <p style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <FormGroup>
            <Button primary type="submit">
              Book it !!!
            </Button>
          </FormGroup>
        </form>

        <SellingPoints>
          <h2>Reasons to love staying with us</h2>
          <div dangerouslySetInnerHTML={{ __html: props.sellingPoints }} />
        </SellingPoints>
      </FormBox>
      <Container maxwidth="900px">
        <p>
          Don’t want to fill out a form? Call our groups hotline 0800 999 999
        </p>
      </Container>
    </Section>
  );
};

export { GroupsForm };
