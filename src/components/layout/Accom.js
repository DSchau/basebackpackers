import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Container, ScrollContainer, Button } from '../common';
import Gallery from './Gallery';

const AccomBlock = styled.div`
  display: none;
`;

const BookSectionText = styled.div`
  margin: 2.3rem 0 0.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4;
  padding-right: 1rem;
  @media (max-width: 768px) {
    margin: 0 0 1rem;
  }
`;

const BookPriceInc = styled.div`
  background: ${props => props.theme.lightBlue};
  padding: 1rem;
`;

const Price = styled.div`
  font-size: 4rem;
  span {
    font-size: 1rem;
  }
`;
const AltRoom = styled.span`
  color: ${props => props.theme.secondaryColor};
  text-decoration: underline;
  & :hover {
    cursor: pointer;
  }
`;

const PriceBook = styled(Container)`
  grid-template-areas: 'CTA prices';
  @media (max-width: 768px) {
    grid-template-areas:
      'prices'
      'CTA';
  }
`;

class Accom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNext: {}
    };
  }

  toggleNext = () => {
    this.setState({
      showNext: !this.state.showNext
    });
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('interest in private');

    if (localStorageRef) {
      this.setState({ showNext: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'interest in private',
      JSON.stringify(this.state.showNext)
    );
  }

  render() {
    const nextActive = this.state.showNext ? 'show' : '';
    const people = Math.floor(Math.random() * 9) + 13;

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
              fluid: photo.fluid,
              alt: photo.alt
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
                        Wait! I want to stay in
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

                  <PriceBook gap="1rem">
                    <div style={{ gridArea: 'CTA' }}>
                      <BookSectionText>
                        There are {people} other people looking at staying at{' '}
                        {this.props.hostelName} now.
                      </BookSectionText>
                      <Button primary large className="distributor">
                        Check availability and book
                      </Button>
                      <p>
                        <small>
                          Best price & service when you book direct!
                        </small>
                      </p>
                    </div>

                    <Container
                      col="2"
                      margin="1.5rem 0 0"
                      mobcol="1fr 1fr"
                      gap="1rem"
                      style={{ gridArea: 'prices' }}
                    >
                      <BookPriceInc>
                        Stay from just
                        <Price>
                          ${block.priceFrom}
                          <span>{block.currency}</span>
                        </Price>
                        {block.name === 'Private Rooms'
                          ? 'Per room/per night'
                          : 'Per person/per night'}
                      </BookPriceInc>
                      <div className="includes">
                        <h5>Includes:</h5>
                        <div
                          dangerouslySetInnerHTML={{ __html: block.features }}
                        />
                      </div>
                    </Container>
                  </PriceBook>
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
  // hostelName: PropTypes.string,
  // source: PropTypes.object
};
export { Accom };
