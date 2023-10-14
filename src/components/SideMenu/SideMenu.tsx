import styled from "styled-components";
import {css} from "../../constants.ts";
import Burger from "../icons/Burger.tsx";
import HomeIcon from "../icons/HomeIcon.tsx";
import GameIcon from "../icons/GameIcon.tsx";
import RecentlyIcon from "../icons/RecentlyIcon.tsx";
import {NavLink} from "react-router-dom";

const SideMenu = () => {
    return (
        <Wrapper>
            <FlexSpacer>
                <Burger/>
            </FlexSpacer>
            <Navigation>
                <NavLink to={"/"}>
                    <HomeIcon/>
                </NavLink>
                <NavLink to={"/"}>
                    <GameIcon/>
                </NavLink>
                <NavLink to={"/"}>
                    <RecentlyIcon/>
                </NavLink>
            </Navigation>
            <FlexSpacer></FlexSpacer>
        </Wrapper>
    )
}


const Wrapper = styled.aside`
  align-items: center;
  background-color: ${css.color.background};
  border-right: 2px solid ${css.color.textLight};
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  
  // in dev time
  width: ${css.spacing.sideMenuClosed};
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${css.spacing.l};
  justify-content: center;
`

const FlexSpacer = styled.div`
  flex: 1;
`

export default SideMenu;
