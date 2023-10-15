import styled from "styled-components";
import {css} from "../../constants.ts";
import Logo from "../icons/Logo.tsx";
import Search from "../Search/Search.tsx";
import useSideMenu from "../../hooks/use-side-menu.hook.ts";

const TopMenu = () => {

    const {isMenuOpen} = useSideMenu();

    const widthSideMenu = isMenuOpen ? css.spacing.sideMenuOpened : css.spacing.sideMenuClosed;

    return (
        <Wrapper $widthSideMenu={widthSideMenu}>
            <Logo/>
            <Title>FREE2GAME</Title>
            <Search/>
        </Wrapper>
    )
}

type WrapperProps = {
    $widthSideMenu: string;
}

const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  background-color: ${css.color.background};
  display: flex;
  gap: ${css.spacing.s};
  padding-inline-start: calc(${css.spacing.m} + ${p => p.$widthSideMenu});
  padding-inline-end: ${css.spacing.m};
  padding-block: ${css.spacing.s};
  transition: padding-inline-start ${css.animation.transitionDelay.sideMenu} ease;
`

const Title = styled.h1`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["24"]};
  font-weight: 700;
  margin-right: auto;
`

export default TopMenu;
