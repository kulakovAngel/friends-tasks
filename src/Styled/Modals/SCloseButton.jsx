import styled from 'styled-components';

export const SCloseButton = styled.button`
    margin: 5px;
    align-self: flex-end;
    border: none;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    background: ${({theme}) => theme.bgColor};
`;