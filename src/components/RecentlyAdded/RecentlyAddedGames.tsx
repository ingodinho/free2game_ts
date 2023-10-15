import CardList from "../CardList/CardList.tsx";
import {useGames} from "../../hooks/use-games.hook.ts";
import Card from "../Card/Card.tsx";

const RecentlyAddedGames = () => {

    const {data, isLoading} = useGames();

    if(isLoading) {
        return <p>...isLoading</p>
    }

    return (
        <>
            <CardList>
                {data!.filter((_,index) => index < 15).map(game => (
                    <Card game={game} key={game.id}/>
                ))}
            </CardList>
        </>
    )
}

export default RecentlyAddedGames;
