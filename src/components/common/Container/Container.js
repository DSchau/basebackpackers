
import styled from 'styled-components';

const Container = styled.div.attrs({
  col: props => props.col || '1',
  mobcol: props => props.mobcol || '1',
  gap: props => props.gap || '0',
  padding: props => props.padding || '0',
  maxwidth: props => props.maxwidth || props.theme.maxwidth,
  margin: props => props.margin || '0 auto',
})`
  display:grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-gap:${props => props.gap};
  padding:${props => props.padding};
  text-align:${props => props.center ? 'center' : 'left'};
  max-width:${props => props.maxwidth };
  margin:${props => props.margin };
  
  @media only screen and (max-width: 768px) {
    grid-template-columns: ${props => props.mobcol };
  }
`;

export { Container };
