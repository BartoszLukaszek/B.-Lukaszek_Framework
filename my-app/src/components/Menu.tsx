import { FC } from "react";

import styled, { css } from "styled-components";

const Wrapper = styled.div`
    border: 10px solid black;
`;

//adding styling to already existing styling
const SecondWrapper = styled(Wrapper)`
    background: red;
`;


const ExampleDiv = styled.div<{ isActive: boolean }>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
`;


export const Menu: FC = () => {
    return (
        <ExampleDiv isActive={false}>
            <h2>test</h2>
        </ExampleDiv>
    );
};