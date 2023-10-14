import Chip from "../Chip/Chip.tsx";
import styled from "styled-components";
import {css} from "../../constants.ts";
import {Game} from "../../types/game.type.ts";

type GenreChipProps = {
    genre: Game["genre"]
}

const GenreChip = ({genre}: GenreChipProps) => {
    return (
        <Chip>
            <Title>{genre}</Title>
        </Chip>
    )
}

const Title = styled.span`
  font-family: ${css.fontFamily.primary};
  font-weight: 500;
`

export default GenreChip;
