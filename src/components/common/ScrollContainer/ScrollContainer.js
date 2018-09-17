
import styled from 'styled-components';

const ScrollContainer = styled.div.attrs({
  maxwidth: props => props.maxwidth || 'none',
  padding: props => props.padding|| '0 1.5rem 2.5rem 1.5rem',
  
})`
  display:grid;
  grid-gap:20px;
  grid-template-columns: repeat(20, 13rem); 
  overflow-x: auto;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  padding:${props => props.padding };
  max-width:${props => props.maxwidth };
  margin:0 auto;

`;

export { ScrollContainer };
