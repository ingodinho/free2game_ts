import SideMenu from "../SideMenu/SideMenu.tsx";
import TopMenu from "../TopMenu/TopMenu.tsx";
import React from "react";
import styled from "styled-components";
import {css} from "../../constants.ts";
import DetailsHero from "./DetailsHero.tsx";
import {GameDetails} from "../../types/game.type.ts";
import Loading from "../Loading/Loading.tsx";

type Props = {
    children: React.ReactNode;
    game: GameDetails | undefined;
    isLoading: boolean;
}

const DetailsLayout = ({children, game, isLoading} : Props ) => {

    if(isLoading) {
        return <Loading/>
    }

    return (
        <Wrapper>
            <SideMenu/>
            <TopMenu/>
            <DetailsHero title={game!.title} imageSrc={game!.screenshots[0].image}/>
            <Main>{children}</Main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${css.color.background};
  color: ${css.color.textLight};
  height: 100%;
`

const Main = styled.main`
  padding-inline-start: calc(${css.spacing.xxl} + ${css.spacing.sideMenuClosed});
  padding-inline-end: ${css.spacing.xxl};
  padding-block-start: ${css.spacing.layoutTop};
  padding-block-end: ${css.spacing.layoutBottom};
`

export default DetailsLayout;
