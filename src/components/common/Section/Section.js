
import styled from 'styled-components';

const Section = styled.section.attrs({
  padding: props => props.padding || '3rem',
  margin: props => props.margin || '0',
  
})`
  padding:${props => props.padding};
  margin:${props => props.margin};
  background:${props => props.lightBlueBackground ? props => props.theme.lightBlue : props.lightBackground ? props => props.theme.lightGrey : 'white'};
  
  
  @media only screen and (max-width: 768px) {
    padding:${props => props.paddningNone ? '0' : '1.5rem'};
} 
`;
export { Section };

