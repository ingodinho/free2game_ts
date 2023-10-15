import styled from "styled-components";
import {css} from "../../constants.ts";
import Burger from "../icons/Burger.tsx";
import HomeIcon from "../icons/HomeIcon.tsx";
import GameIcon from "../icons/GameIcon.tsx";
import RecentlyIcon from "../icons/RecentlyIcon.tsx";
import {NavLink} from "react-router-dom";
import useSideMenu from "../../hooks/use-side-menu.hook.ts";
import Close from "../icons/Close.tsx";

const SideMenu = () => {

    const {isMenuOpen, toggleMenu} = useSideMenu();

    return (
        <Wrapper $isMenuOpen={isMenuOpen}>
            <FlexSpacer $isMenuOpen={isMenuOpen}>
                {isMenuOpen ? <Close onClick={toggleMenu}/> : <Burger onClick={toggleMenu}/>}
            </FlexSpacer>
            <Navigation>
                <StyledNavLink to={"/"}>
                    <HomeIcon/>
                    {isMenuOpen && <LinkTitle>Home</LinkTitle>}
                </StyledNavLink>
                <StyledNavLink to={"/"}>
                    <GameIcon/>
                    {isMenuOpen && <LinkTitle>All Games</LinkTitle>}
                </StyledNavLink>
                <StyledNavLink to={"/recently-added"}>
                    <RecentlyIcon/>
                    {isMenuOpen && <LinkTitle>Recently Added</LinkTitle>}
                </StyledNavLink>
            </Navigation>
            <FlexSpacer></FlexSpacer>
        </Wrapper>
    )
}


const Wrapper = styled.aside<{ $isMenuOpen: boolean }>`
  align-items: center;
  background-color: ${css.color.background};
  border-right: 2px solid ${css.color.textLight};
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  transition: width ${css.animation.transitionDelay.sideMenu} ease;
  width: ${p => p.$isMenuOpen ? css.spacing.sideMenuOpened : css.spacing.sideMenuClosed};
  z-index: 5;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${css.spacing.l};
  justify-content: center;
  padding-inline: ${css.spacing.xs};
  width: 100%;
`

type FlexSpacerProps = {
    $isMenuOpen?: boolean
}

const FlexSpacer = styled.div<FlexSpacerProps>`
  align-self: ${p => p.$isMenuOpen && "flex-end"};
  flex: 1;
`

// todo Fix Visual Bug
const StyledNavLink = styled(NavLink)`
  align-items: center;
  &.active {
    background-color: ${css.color.primary};
  }
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  display: flex;
  gap: ${css.spacing.xxs};
  justify-content: center;
  text-decoration: none;
`

const LinkTitle = styled.span`
  flex: 1;
  font-size: ${css.spacing.m};
  font-family: ${css.fontFamily.primary};
`

export default SideMenu;
