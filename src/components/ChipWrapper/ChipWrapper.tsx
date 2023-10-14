import styled from "styled-components";
import {css} from "../../constants.ts";
import IconChip from "../IconChip/IconChip.tsx";
import GenreChip from "../GenreChip/GenreChip.tsx";
import {Game} from "../../types/game.type.ts";

type Props = {
    platform: Game["platform"];
    genre: Game["genre"]
}

const ChipWrapper = ({platform, genre} : Props) => {
    return (
        <Wrapper>
            <IconChip platform={platform}/>
            <GenreChip genre={genre}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-block-start: ${css.spacing.m};
  padding-inline: ${css.spacing.xxs};
`

export default ChipWrapper;
