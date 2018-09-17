import React from 'react'
import styled from 'styled-components'


const Question = styled.h4`
  color: ${props => props.theme.secondaryColor};
  font-weight:bold;
  &:hover {
      color: #000;
  }
`;

const Answer = styled.div`
display:none;
margin-bottom:2rem;
color: ${props => props.theme.lightGreyText };
`;
const Close = styled.div`
  
`;

class Faq extends React.Component {
    
    state = { showDetails: false }

    toggleDetails = () => {
    console.log("State set.");
      this.setState({
        showDetails: !this.state.showDetails
      })
    }

    render () {     
     
        const detailsActive = this.state.showDetails ? 'show' : '';
     
        return (
        <>
            <Question onClick={this.toggleDetails} dangerouslySetInnerHTML={{ __html: this.props.question }} />
            <Answer className={`${detailsActive}`}>
            <div dangerouslySetInnerHTML={{ __html: this.props.answer }} />
            <Close onClick={this.toggleDetails}>Close x</Close>
            </Answer>
            
        </>
        )
    }
};




export { Faq };