import styled from 'styled-components';

export const SModalWindow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #888;
    width: 80%;
    margin: 5% auto 15% auto;
    background: ${({theme}) => theme.bgColor};
`;