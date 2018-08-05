import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const CardContainer = styled.div`
    background: #fff;
    margin-right: 1rem;
    margin-bottom:1rem;
    text-align: center;
`;

const CardLink = styled(Link)`
    text-decoration:none;
    color: inherit;
`;

const Card = (props) => (
    <CardLink to={props.url}>
        <CardContainer>
            {props.children}        
        </CardContainer>
    </CardLink>
       
)

export { Card };
