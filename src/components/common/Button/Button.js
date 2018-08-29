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
        color: ${props => props.theme.white}
    `}

    ${props => props.secondary && css`
        background: ${props => props.theme.secondaryColor};
        
    `}

`;

export { Button };
