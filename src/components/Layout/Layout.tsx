import styled from "styled-components";
import {css} from "../../constants.ts";
import React from "react";
import TopMenu from "../TopMenu/TopMenu.tsx";
import Hero, {Page} from "../Hero/Hero.tsx";
import SideMenu from "../SideMenu/SideMenu.tsx";
import {useLocation} from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {

    const {pathname} = useLocation();

    return (
        <Wrapper>
            <SideMenu/>
            <TopMenu/>
            {!pathname.startsWith("/game") && <Hero page={pathname as Page}/>}
            <Main>{children}</Main>
        </Wrapper>
    )
}

// todo: better way for background color
const Wrapper = styled.div`
  background-color: ${css.color.background};
  height: 100%;
`

const Main = styled.main`
  padding-inline-start: calc(${css.spacing.xxl} + ${css.spacing.sideMenuClosed});
  padding-inline-end: ${css.spacing.xxl};
  padding-block-start: ${css.spacing.layoutTop};
  padding-block-end: ${css.spacing.layoutBottom};
`

export default Layout;
