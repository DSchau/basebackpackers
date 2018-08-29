
import styled from 'styled-components';

const ScrollContainer = styled.div.attrs({
  maxWidth: props => props.maxWidth || 'none',
  
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
  padding:0 1.5rem 2.5rem 1.5rem;
  max-width:${props => props.maxWidth };
  margin:0 auto;

`;

export { ScrollContainer };
