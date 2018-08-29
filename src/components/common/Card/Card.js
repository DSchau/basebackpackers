
import styled from 'styled-components'


const Card = styled.div`
    background: ${props => props.lightBackground ? props => props.theme.lightGrey : 'white'};
    text-align: center;
    transition: all .2s ease-out;
    align-self: stretch;
    scroll-snap-align: start;
    &:hover {
        background-color: #1bace017;
        transform: scale(1.02);
        box-shadow: 3px 5px 20px #888;
    }
`;


export { Card };
