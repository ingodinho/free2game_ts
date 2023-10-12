import Card from "../Card/Card.tsx";
import {useAllGames} from "../../hooks/useAllGames.hook.ts";
import Hero from "../Hero/Hero.tsx";
import Layout from "../Layout/Layout.tsx";
import CardList from "../CardList/CardList.tsx";

const Home = () => {

    const allGames = useAllGames();

    return (
        <>
            <Hero page={"home"}>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</Hero>
            <Layout>
                <CardList>{allGames.filter((_, index) => index < 10).map(game => (
                    <Card game={game} key={game.id} includesDescription={true}/>
                ))}
                </CardList>

            </Layout>
        </>
    )
}

export default Home;
