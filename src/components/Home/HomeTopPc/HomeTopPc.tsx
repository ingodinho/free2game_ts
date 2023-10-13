import styled from "styled-components";
import BigCard from "./BigCard.tsx";
import {Game} from "../../../types/game.type.ts";
import FlippedCard from "./FlippedCard.tsx";
import {css} from "../../../constants.ts";

type Props = {
    games: Game[] | undefined;
    isLoading: boolean
}

const HomeTopPc = ({games, isLoading} : Props) => {

    if(isLoading) {
        return <p>Loading...</p>
    }

    // todo: check undefined
    const gameBigCard = games![0];
    const gamesRest = games!.slice(1, 4);

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
