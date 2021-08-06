import styled, { css } from 'styled-components';

// example 1
export const SPrompt = styled.span`
    position: absolute;
    bottom: -16px;
    left: 0;
    font-size: 14px;
	margin: 5px 10px 10px;
`;

// example 2
const flexCenter = ({vertical = true, horizontal = true}) => css`
    display: flex;
    justify-content: ${horizontal && 'center'};
    align-items: ${vertical && 'center'};
`;

export const SPrompt2 = styled.span`
    ${flexCenter({horizontal: false})};
    height: 16px;
    font-size: 14px;
	margin: 5px 10px 10px;
`;