import styled from "styled-components";
import {css} from "../../constants.ts";
import React from "react";
import TopMenu from "../TopMenu/TopMenu.tsx";
import Hero from "../Hero/Hero.tsx";
import SideMenu from "../SideMenu/SideMenu.tsx";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <SideMenu/>
            <TopMenu/>
            <Hero page={"home"}>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</Hero>
            <Main>{children}</Main>
        </>
    )
}

const Main = styled.main`
  background-color: ${css.color.background};
  padding-inline-start: calc(${css.spacing.xxl} + ${css.spacing.sideMenuClosed});
  padding-inline-end: ${css.spacing.xxl};
  padding-block-start: ${css.spacing.layoutTop};
  padding-block-end: ${css.spacing.layoutBottom};
`

export default Layout;
