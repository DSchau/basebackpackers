import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  padding:3rem;
  background:#cfecf7;

  @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding:2rem;
}
`;

const CardHolder = ({children}) => (    

    <CardContainer>
        {children}
    </CardContainer>

)


export { CardHolder };