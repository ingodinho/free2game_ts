import styled from "styled-components";
import {css} from "../../constants.ts";
import React from "react";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.main`
  padding-inline-start: ${css.spacing.xxl};
  padding-inline-end: ${css.spacing.xxl};
  padding-block-start: ${css.spacing.layoutTop};
  padding-block-end: ${css.spacing.layoutBottom};
`

export default Layout;
