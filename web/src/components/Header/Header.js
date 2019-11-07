import React from "react";
import styled from "styled-components";

function Header() {
    const Title = styled.h1`
        font-size: 1.8em;
        text-align: center;
        color: #000;
    `;

    return(
        <Title>
            My Twitter-like application
        </Title>
    );
}

export default Header;