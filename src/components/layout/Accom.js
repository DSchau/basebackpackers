import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { Container, ScrollContainer, Button } from '../common';
import Fade from 'react-reveal/Fade';

const RoomTitle = styled.div`
    margin: 0px; 
    overflow: hidden; 
    position: absolute; 
    z-index: 2;
    padding:10px;
    bottom:0;
    right:0;
    font-size:.8rem;
    background:${props => props.theme.secondaryColor};
    color:${props => props.theme.white};
    
`;

const AccomBlock = styled.div`
  display:none;  
`;

const GalleryItem = styled.div`
  box-shadow: ${props => props.theme.shadow};
  margin: 0; 
  overflow: hidden; 
  position: relative; 
  z-index:2;
  min-height: 140px;
  padding:0 0 1rem;
`;


const BookSectionText = styled.div`
  margin: 3rem 0 .7rem;
  font-size:1.2rem;
  font-weight:bold;
  line-height:1.4;
  padding-right:1rem;
`;

const BookPriceInc = styled.div`
  background:${props => props.theme.lightBlue};
  padding:1rem;
`;

const Price = styled.div`
  font-size:4rem;
  
`;
const AltRoom = styled.span`
  color:${props => props.theme.secondaryColor};
  text-decoration:underline;
  & :hover {
    cursor:pointer;
  }
`;

class Accom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showNext: false,
    };
  }

    toggleNext = () => {
      this.setState({
        showNext: !this.state.showNext,
      });
    }

    render() {
      const nextActive = this.state.showNext ? 'show' : '';
      const people = Math.floor(Math.random() * 9) + 20;
      

    return (

      <>
        <Container>
          <h2>Where you‘re staying</h2>
        </Container>
          {
          this.props.source.map((block, index) => (
            <AccomBlock key={block.id} className={`${block.model.apiKey}-${index} ${nextActive} `}>
            
            
              {
                block.model.apiKey === 'accom' &&
                  <>
                  <Fade>
                  <Container>
                  <p>{block.intro}. <AltRoom onClick={this.toggleNext} >Wait! I want to say in 
                  {
          this.props.source.map((block, index) => (
            <span key={index} className={`room room-${index} ${nextActive} `}> {block.name} </span>
          ))
 }
                  
                  </AltRoom > </p>
                  </Container>
                  <ScrollContainer padding="0 0 15px 0" maxwidth="960px" className="scroll">
                  
                  {/* Hostel image Gallery here */}
                  {block.roomGallery.map(( photo, index) => {
                    return <GalleryItem key={index} >
                      <Img fluid={photo.fluid} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", zIndex:1,}}/>
                      <RoomTitle>{photo.title}</RoomTitle>
                    </GalleryItem>
                    }
                  )}
                  </ScrollContainer>
                          <Container col="2" gap="1rem" mobcol="1fr">
                            <div>
                              <BookSectionText>
                                There are {people} other people looking at staying at {this.props.hostelName} right now
                              </BookSectionText>
                              <Button primary large>Check availability and book</Button>
                            </div>
                            <Container col="2" margin="1.5rem 0" mobcol="1fr 1fr" gap="1rem">
                              <BookPriceInc>Stay from just 
                                <Price>${block.priceFrom}</Price>Per person/per night</BookPriceInc>
                              <div className="includes">
                                <h5>Includes:</h5>
                                <div dangerouslySetInnerHTML={{ __html: block.features }} />
                              </div>
                            </Container>
                        </Container>
                      </Fade>
                  </>
              }
            </AccomBlock>                
            ))
          }

      </>


      
    );
  }
}

export { Accom };