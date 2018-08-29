
import styled from 'styled-components'


const CardHolder = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  padding:3rem;
  background:#cfecf7;

  @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding:2rem;
}
`;


export { CardHolder };