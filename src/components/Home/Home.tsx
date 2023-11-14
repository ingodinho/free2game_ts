import Layout from "../Layout/Layout.tsx";
import HomeSection from "./HomeSection.tsx";
import Spacer from "../Spacer/Spacer.tsx";
import {css} from "../../constants.ts";
import HomeRecentlyAdded from "./HomeRecentlyAdded.tsx";
import HomeTopBrowser from "./HomeTopBrowser.tsx";
import HomeTopPc from "./HomeTopPc/HomeTopPc.tsx";

const Home = () => {

    return (
        <>
            <Layout>
                <HomeSection title={"Recently Added"} url={"/"}>
                  <HomeRecentlyAdded/>
                </HomeSection>
                <Spacer height={css.spacing.layoutTop}/>
                <HomeSection title={"Top 4 Games in PC"} url={"/"}>
                    <HomeTopPc/>
                </HomeSection>
                <Spacer height={css.spacing.layoutTop}/>
                <HomeSection title={"Top 4 Games for Browser"} url={"/"}>
                    <HomeTopBrowser/>
                </HomeSection>
            </Layout>
        </>
    )
}

export default Home;
