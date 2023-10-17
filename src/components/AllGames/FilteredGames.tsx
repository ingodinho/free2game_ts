import {useGamesWithFilter} from "../../hooks/use-games.hook.ts";
import CardList from "../CardList/CardList.tsx";
import Card from "../Card/Card.tsx";
import {useFilterContext} from "../../hooks/use-filter.hook.ts";
import Loading from "../Loading/Loading.tsx";

const FilteredGames = () => {

    const {filterOptions} = useFilterContext();
    const {data, isLoading} = useGamesWithFilter(filterOptions);

    if(isLoading) {
        return <Loading/>;
    }

    return (
        <section>
            <CardList>
                {data!.filter((_, index) => index < 12).map(game => (
                    <Card game={game} key={game.id} />
                ))}
            </CardList>
        </section>
    )
}

export default FilteredGames;
