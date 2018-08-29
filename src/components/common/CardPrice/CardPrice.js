import React from 'react'
import styled from 'styled-components'

const Price = styled.div`
        margin-bottom:1rem;
        font-style: italic;
`;

const CardPrice = (props) => (
        <Price>From: ${props.price}</Price>
       
)

export { CardPrice };