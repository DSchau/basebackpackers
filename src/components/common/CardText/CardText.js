
import styled, { css } from 'styled-components'


const CardText = styled.p`
  font-size:.9rem;
  line-height: 1.4rem;
  margin-bottom:1rem;

  ${props => props.mobileHidden && css`
    @media only screen and (max-width: 500px) {
      display:none;
    }
  `}

`;



export { CardText };