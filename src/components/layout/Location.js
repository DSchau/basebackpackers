import React from 'react';
import { Container, Section } from '../common';
import GoogleApiWrapper from './GoogleMapsContainer';
import styled from 'styled-components';

const Mapbox = styled.div`
  position: relative;
  height: 16rem;
`;

const Contact = styled.div`
  margin-top: 1rem;
`;
const ContactDetails = styled.div`
  margin-bottom: 0.5rem;
`;

const Location = props => {
  return (
    <Section id="location" lightBlueBackground>
      <Container>
        <h2>Location</h2>
      </Container>
      <Container col="2" mobcol="1fr" gap="2rem">
        <div>
          <Mapbox>
            <GoogleApiWrapper
              title={props.title}
              street={props.streetAddress}
              city={props.city}
              lat={props.latitude}
              long={props.longitude}
              placeholder={props.mapScreenShot}
            />
          </Mapbox>

          <Contact>
            <ContactDetails>
              <a
                target="_blank"
                rel="noopener noreferrer "
                href="https://www.google.com/maps/dir/?api=1&destination=base+backpackers+sydney"
              >
                Get directions
              </a>
            </ContactDetails>
            <ContactDetails>
              Address: {props.streetAddress}, {props.city}
            </ContactDetails>
            <ContactDetails>Phone: {props.phone}</ContactDetails>
            <ContactDetails>Email: {props.emailAddress}</ContactDetails>
          </Contact>
        </div>

        <div>
          <h3>Things near by</h3>
          {props.thingsNearBy.map(near => (
            <div key={near.id}>
              <h4>
                {near.time} {near.tripType}
              </h4>
              <p>{near.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { Location };
