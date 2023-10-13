import {useGames} from "../../hooks/use-games.hook.ts";
import Hero from "../Hero/Hero.tsx";
import Layout from "../Layout/Layout.tsx";
import HomeSection from "./HomeSection.tsx";
import Spacer from "../Spacer/Spacer.tsx";
import {css} from "../../constants.ts";
import HomeRecentlyAdded from "./HomeRecentlyAdded.tsx";
import HomeTopBrowser from "./HomeTopBrowser.tsx";
import HomeTopPc from "./HomeTopPc/HomeTopPc.tsx";

const Home = () => {

    const {data: games, isLoading, error} = useGames();

    return (
        <>
            <Hero page={"home"}>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</Hero>
            <Layout>
                {/*todo: Loading and Error Component*/}
                <HomeSection title={"Recently Added"} url={"/"}>
                  <HomeRecentlyAdded games={games} isLoading={isLoading} error={error} />
                </HomeSection>
                <Spacer height={css.spacing.layoutTop}/>
                <HomeSection title={"Top 4 Games in PC"} url={"/"}>
                    <HomeTopPc games={games} isLoading={isLoading}/>
                </HomeSection>
                <Spacer height={css.spacing.layoutTop}/>
                <HomeSection title={"Top 4 Games for Browser"} url={"/"}>
                    <HomeTopBrowser games={games} isLoading={isLoading} error={error}/>
                </HomeSection>
            </Layout>
        </>
    )
}

export default Home;
