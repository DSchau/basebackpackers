import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { Section, Container, ScrollContainer } from '../common';

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



class Accom extends React.Component {

  render() {

    return (

      <Section padding="0">
        <Container>
          <h2>Where you‘re staying</h2>
          
        </Container>
          {
          this.props.source.map((block) => (
            <div key={block.id} className={block.model.apiKey}>
              {
                block.model.apiKey === 'accom' &&
                  <>
                  <Container>
                  <p>Get ready to make new friends in our spacious dorm rooms. Wait! I want to say in a Privateroom </p>
                  </Container>
                  <ScrollContainer padding="0" maxwidth="960px">
                  
                  {/* Hostel image Gallery here */}
                  {block.roomGallery.map(( photo, index) => {
                    return <div key={index} style={{ margin: 0, overflow:"hidden", position:"relative", zIndex:2, minHeight:"140px" }}>
                      <Img fluid={photo.fluid} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", zIndex:1,}}/>
                      <RoomTitle>{photo.title}</RoomTitle>
                    </div>
                    }
                  )}
                  </ScrollContainer>
                          <Container col="2">
                          <h2>Where you‘re staying</h2>
                          <p>Get ready to make new friends in our spacious dorm rooms.</p>
                        </Container>
                        </>
              }
            </div>                
            ))
          }

      </Section>


      
    );
  }
}

export { Accom };