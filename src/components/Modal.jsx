import styled from 'styled-components';

const SModalRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3339;
`;

const SModalWindow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #888;
    width: 80%;
    margin: 5% auto 15% auto;
    background: ${({theme}) => theme.bgColor};
`;

const SCloseButton = styled.button`
    margin: 5px;
    align-self: flex-end;
    border: none;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    background: ${({theme}) => theme.bgColor};
`;


export function Modal({children, handleClose}) {
    return (
        <SModalRoot>
            <SModalWindow>
                <SCloseButton onClick={handleClose}>x</SCloseButton>
                {
                    children
                }
            </SModalWindow>
        </SModalRoot>
    )
};