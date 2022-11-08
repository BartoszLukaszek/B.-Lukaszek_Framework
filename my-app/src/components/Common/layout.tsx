import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;


const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #a2a8d3;
`;


interface IProps {
    children: JSX.Element;
};

export const Layout: FC<IProps> = props => {
    return (
        <Wrapper>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
};