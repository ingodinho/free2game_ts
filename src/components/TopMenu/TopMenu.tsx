import styled from "styled-components";
import {css} from "../../constants.ts";
import Logo from "../icons/Logo.tsx";
import Search from "../Search/Search.tsx";

const TopMenu = () => {
    return (
        <Wrapper>
            <Logo/>
            <Title>FREE2GAME</Title>
            <Search/>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  align-items: center;
  background-color: ${css.color.background};
  display: flex;
  gap: ${css.spacing.s};
  padding-inline-start: calc(${css.spacing.m} + ${css.spacing.sideMenuClosed});
  padding-inline-end: ${css.spacing.m};
  padding-block: ${css.spacing.s};
`

const Title = styled.h1`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["24"]};
  font-weight: 700;
  margin-right: auto;
`

export default TopMenu;
