
import styled from 'styled-components';

const ContainerResponsive = styled.div.attrs({
  maxWidth: props => props.maxWidth || '250px',
})`
  display:grid;
  grid-gap:20px;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.maxWidth}, 1fr)); 
  
`;

export { ContainerResponsive };
