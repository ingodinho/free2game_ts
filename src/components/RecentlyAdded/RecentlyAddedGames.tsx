import CardList from "../CardList/CardList.tsx";
import {useGamesWithFilter} from "../../hooks/use-games.hook.ts";
import Card from "../Card/Card.tsx";

const RecentlyAddedGames = () => {

    const {data, isLoading} = useGamesWithFilter({"sort-by": ["release-date"], platform: [], tag: []});

    if(isLoading) {
        return <p>...isLoading</p>
    }

    return (
        <>
            <CardList>
                {data!.filter((_,index) => index < 8).map(game => (
                    <Card game={game} key={game.id}/>
                ))}
            </CardList>
        </>
    )
}

export default RecentlyAddedGames;
