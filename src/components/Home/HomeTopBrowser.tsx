import CardList from "../CardList/CardList.tsx";
import Card from "../Card/Card.tsx";
import {Game} from "../../types/game.type.ts";

type Props = {
    allGames: Game[] | undefined,
    isLoading: boolean,
    error: boolean
}
const HomeTopBrowser = ({allGames, isLoading, error} : Props) => {
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            {allGames && <CardList>{allGames.filter((_, index) => index < 4).map(game => (
                <Card game={game} key={game.id} includesDescription={false}/>
            ))}
            </CardList>}
        </>
    )
}

export default HomeTopBrowser
