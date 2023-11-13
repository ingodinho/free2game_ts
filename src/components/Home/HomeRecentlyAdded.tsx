import CardList from "../CardList/CardList.tsx";
import Card from "../Card/Card.tsx";
import {useGamesWithFilter} from "../../hooks/use-games.hook.ts";

const HomeRecentlyAdded = () => {

    const {data, isLoading, error} = useGamesWithFilter({
        platform: [],
        tag: [],
        "sort-by": ["release-date"]
    })

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            {data && (
                <CardList>{data.filter((_, index) => index < 4).map(game => (
                    <Card game={game} key={game.id} includesDescription={true}/>
                ))}
                </CardList>)}
        </>
    )
}

export default HomeRecentlyAdded;
