import React from 'react'
import styled from 'styled-components'


const Heading = styled.h3`
    padding:.75rem;
    margin:0;
`;

const CardHeading = (props) => (    

    <Heading>{props.title}</Heading>

)


export { CardHeading };