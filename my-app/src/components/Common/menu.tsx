import React, { FC } from "react";

import styled, { css } from "styled-components";

const MenuWrapper = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #e7eaf6;
`;


interface IProps {
    children: JSX.Element;
};


export const Menu: FC<IProps> = (props) => {
    return (
        <MenuWrapper>
            {props.children}
        </MenuWrapper>
    );
};