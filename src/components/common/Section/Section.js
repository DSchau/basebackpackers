
import styled from 'styled-components';

const Section = styled.section`
  padding:${props => props.paddningNone ? '0' : '3rem'};
  background:${props => props.lightBackground ? props => props.theme.lightGrey : 'white'};
  
  
  @media only screen and (max-width: 768px) {
    padding:${props => props.paddningNone ? '0' : '1.5rem'};
} 
`;
export { Section };
