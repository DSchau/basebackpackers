import React from 'react'
import styled from 'styled-components'


const Heading = styled.h3`
    margin-bottom:.5rem;
    font-size:1.1rem;
    line-height:1.4;
`;

const CardHeading = (props) => (    

    <Heading>{props.title}</Heading>

)


export { CardHeading };