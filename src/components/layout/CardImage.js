import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
`;

const CardImage = (props) => (
        <ImageContainer><img src={props.image} alt="bungee" /></ImageContainer>
       
)

export { CardImage };