import styled from "styled-components";
import {Game} from "../../../types/game.type.ts";
import {css} from "../../../constants.ts";
import RankChip from "./RankChip.tsx";
import ChipWrapper from "../../ChipWrapper/ChipWrapper.tsx";
import Button from "../../Button/Button.tsx";

type Props = {
    game: Game;
}

const BigCard = ({game}: Props) => {
    return (
        <Wrapper $bg={game.thumbnail}>
            <RankChip position={"right"} rank={1}/>
            <Body>
                <TextWrapper>
                    <Title>{game.title}</Title>
                    <Button url={"/"}>READ MORE</Button>
                </TextWrapper>
                <ChipWrapper platform={game.platform} genre={game.genre}/>
            </Body>
        </Wrapper>
    )
}

type WrapperProps = {
    $bg: string;
}

const Wrapper = styled.article<WrapperProps>`
  background: url(${props => props.$bg}) center / cover no-repeat;
  border-radius: ${css.borderRadius.xl};
  color: ${css.color.textLight};
  grid-row: 1 / 4;
  padding-inline: ${css.spacing.l};
  padding-block: ${css.spacing.xl};
  position: relative;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const TextWrapper = styled.div``

const Title = styled.h4`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["48"]};
  margin-block-end: ${css.spacing.l};
`

export default BigCard;
