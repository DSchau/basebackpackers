import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'



const CardLinkStyle = styled(Link)`
    text-decoration:none;
    color: inherit;

`;

const CardLink = (props) => (
    
        
            <CardLinkStyle to={props.url}>
            {props.children}        
            </CardLinkStyle>
        
    
       
)

export { CardLink };
