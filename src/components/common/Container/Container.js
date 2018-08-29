
import styled from 'styled-components';

const Container = styled.div.attrs({
  col: props => props.col || '1',
  gap: props => props.gap || '0',
  padding: props => props.padding || '0',
  maxWidth: props => props.maxWidth || 'none',
  
})`
  display:grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-gap:${props => props.gap};
  padding:${props => props.padding};
  text-align:${props => props.center ? 'center' : 'left'};
  max-width:${props => props.maxWidth };
  margin:0 auto;
  
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export { Container };
