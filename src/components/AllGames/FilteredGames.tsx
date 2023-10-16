import {useGames} from "../../hooks/use-games.hook.ts";
import CardList from "../CardList/CardList.tsx";
import Card from "../Card/Card.tsx";

const FilteredGames = () => {

    const {data, isLoading} = useGames();

    if(isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <CardList>
                {data!.filter((_, index) => index < 11).map(game => (
                    <Card game={game} key={game.id} />
                ))}
            </CardList>
        </section>
    )
}

export default FilteredGames;
