import React from 'react'
import styled from 'styled-components'


const Text = styled.p`
  padding:.75rem;
    margin:0;
`;


const CardText = (props) => (
  <Text>{props.content}</Text> 
)

export { CardText };