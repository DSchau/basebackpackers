import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Container, ScrollContainer, Button } from '../common';
import Gallery from './Gallery';

const AccomBlock = styled.div`
  display: none;
`;

const BookSectionText = styled.div`
  margin: 3rem 0 0.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4;
  padding-right: 1rem;
`;

const BookPriceInc = styled.div`
  background: ${props => props.theme.lightBlue};
  padding: 1rem;
`;

const Price = styled.div`
  font-size: 4rem;
`;
const AltRoom = styled.span`
  color: ${props => props.theme.secondaryColor};
  text-decoration: underline;
  & :hover {
    cursor: pointer;
  }
`;

class Accom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNext: false
    };
  }

  toggleNext = () => {
    this.setState({
      showNext: !this.state.showNext
    });
  };

  render() {
    const nextActive = this.state.showNext ? 'show' : '';
    const people = Math.floor(Math.random() * 9) + 20;

    return (
      <>
        <Container>
          <h2>Where you‘re staying</h2>
        </Container>
        {this.props.source.map((block, index) => {
          const im2 = block.roomGallery.map(photo =>
            Object.assign({
              srcSet: photo.fluid.srcSet,
              src: photo.fluid.src,
              caption: photo.caption,
              fluid: photo.fluid
            })
          );

          return (
            <AccomBlock
              key={block.id}
              className={`${block.model.apiKey}-${index} ${nextActive} `}
            >
              {block.model.apiKey === 'accom' && (
                <>
                  <Container>
                    <p>
                      {block.intro}.{' '}
                      <AltRoom onClick={this.toggleNext}>
                        Wait! I want to say in
                        {this.props.source.map((block, index) => (
                          <span
                            key={index}
                            className={`room room-${index} ${nextActive} `}
                          >
                            {' '}
                            {block.name}{' '}
                          </span>
                        ))}
                      </AltRoom>{' '}
                    </p>
                  </Container>
                  <ScrollContainer
                    padding="0 0 15px 0"
                    maxwidth="960px"
                    className="scroll"
                  >
                    <Gallery images={im2} />
                  </ScrollContainer>
                  <Container col="2" gap="1rem" mobcol="1fr">
                    <div>
                      <BookSectionText>
                        There are {people} other people looking at staying at{' '}
                        {this.props.hostelName} right now
                      </BookSectionText>
                      <Button primary large className="distributor">
                        Check availability and book
                      </Button>
                    </div>
                    <Container
                      col="2"
                      margin="1.5rem 0"
                      mobcol="1fr 1fr"
                      gap="1rem"
                    >
                      <BookPriceInc>
                        Stay from just
                        <Price>${block.priceFrom}</Price>
                        Per person/per night
                      </BookPriceInc>
                      <div className="includes">
                        <h5>Includes:</h5>
                        <div
                          dangerouslySetInnerHTML={{ __html: block.features }}
                        />
                      </div>
                    </Container>
                  </Container>
                </>
              )}
            </AccomBlock>
          );
        })}
      </>
    );
  }
}

Accom.propTypes = {
  hostelName: PropTypes.string
};
export { Accom };
