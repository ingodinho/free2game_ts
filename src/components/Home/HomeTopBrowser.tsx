import CardList from "../CardList/CardList.tsx";
import Card from "../Card/Card.tsx";
import {useGamesWithFilter} from "../../hooks/use-games.hook.ts";

const HomeTopBrowser = () => {

    const {data, isLoading, error} = useGamesWithFilter({
        platform: ["browser"],
        tag: [],
        "sort-by": ["popularity"]
    })

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            {data && <CardList>{data.filter((_, index) => index < 4).map(game => (
                <Card game={game} key={game.id} includesDescription={false}/>
            ))}
            </CardList>}
        </>
    )
}

export default HomeTopBrowser
