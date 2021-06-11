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
    padding: 24px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.bgColor};
`;


export function Modal({children, handleClose}) {
    return (
        <SModalRoot>
            <SModalWindow>
                <button onClick={handleClose}>x</button>
                {
                    children
                }
            </SModalWindow>
        </SModalRoot>
    )
};