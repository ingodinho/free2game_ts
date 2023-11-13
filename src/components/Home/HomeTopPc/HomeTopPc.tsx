import styled from "styled-components";
import BigCard from "./BigCard.tsx";
import FlippedCard from "./FlippedCard.tsx";
import {css} from "../../../constants.ts";
import {useGamesWithFilter} from "../../../hooks/use-games.hook.ts";

const HomeTopPc = () => {

    const {data, isLoading} = useGamesWithFilter({
        platform: ["pc"],
        tag: [],
        "sort-by": ["popularity"]
    })

    if(isLoading) {
        return <p>Loading...</p>
    }

    const gameBigCard = data![0];
    const gamesRest = data!.slice(1, 4);

    return (
        <Wrapper>
            <BigCard game={gameBigCard} />
            {gamesRest.map((game, index) => (
                <FlippedCard
                    game={game}
                    key={game.id}
                    rank={index}
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: ${css.spacing.m};
`

export default HomeTopPc;
