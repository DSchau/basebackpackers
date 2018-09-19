import styled, {css} from 'styled-components';

const Button = styled.button`
    background:${props => props.theme.white};
    border:0;
    padding: 5px 15px;
        &:hover {
            filter: brightness(90%);
        } 

    ${props => props.primary && css`
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
    `}

    ${props => props.secondary && css`
        background: ${props => props.theme.secondaryColor};
        
    `}
    ${props => props.large && css`
        padding: 15px 25px;
        font-size:1rem;
        
    `}

`;

export { Button };
