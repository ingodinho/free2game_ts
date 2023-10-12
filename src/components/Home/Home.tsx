import Card from "../Card/Card.tsx";
import {useAllGames} from "../../hooks/useAllGames.hook.ts";

const Home = () => {

    const allGames = useAllGames();

    return (
        <>
            {allGames.filter((_, index) => index < 10).map(game => (
                <Card game={game} key={game.id} includesDescription={true}/>
            ))}
        </>
    )
}

export default Home;
