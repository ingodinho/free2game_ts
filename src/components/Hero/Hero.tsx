import styled from "styled-components";
import homeBg from "../../assets/img/hero/hero__home.jpeg";
import allGamesBg from "../../assets/img/hero/hero__all-games.jpeg";
import recentlyBg from "../../assets/img/hero/hero__recently.png";
import {css} from "../../constants.ts";

export type Page = "/" | "/all-games" | "/recently-added";

const heroData = {
    "/": {
        imageSrc: homeBg,
        title: "FIND & TRACK THE BEST FREE-TO-PLAY GAMES!",
    },
    "/all-games": {
        imageSrc: allGamesBg,
        title: "ALL GAMES"
    },
    "/recently-added": {
        imageSrc: recentlyBg,
        title: "RECENTLY ADDED"
    }
}

type HeroProps = {
    page: Page
}

const Hero = ({page}: HeroProps) => {

    const isHome = page === "/";
    const {imageSrc, title} = heroData[page];

    return (
        <Wrapper $isHome={isHome} $imageSrc={imageSrc}>
            <Title>{title}</Title>
        </Wrapper>
    )
}

type WrapperProps = {
    $isHome: boolean;
    $imageSrc: string;
}

const Wrapper = styled.section<WrapperProps>`
  align-items: flex-end;
  background: url(${props => props.$imageSrc}) center / cover no-repeat;
  border-radius: ${props => !props.$isHome && css.borderRadius.xl};
  display: flex;
  margin-inline-start: calc(${props => !props.$isHome && css.spacing.m} + ${css.spacing.sideMenuClosed});
  margin-inline-end: ${props => !props.$isHome && css.spacing.m};
  min-height: ${props => props.$isHome ? "580px" : "490px"};
  padding-block-end: 80px;
  padding-inline-start: calc(80px + ${css.spacing.sideMenuClosed});
`

const Title = styled.h2`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["48"]};
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  width: 25rem;
`

export default Hero;
