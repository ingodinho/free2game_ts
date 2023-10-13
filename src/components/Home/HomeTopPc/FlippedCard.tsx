import styled from "styled-components";
import {Game} from "../../../types/game.type.ts";
import {css} from "../../../constants.ts";
import Button from "../../Button/Button.tsx";
import RankChip from "./RankChip.tsx";
import ChipWrapper from "../../ChipWrapper/ChipWrapper.tsx";

type Props = {
    game: Game;
    rank: number
}

const FlippedCard = ({game, rank} : Props) => {

    // index + 0 based + without first one
    const ranked = rank + 2;

    return (
        <Wrapper>
            <Thumbnail src={game.thumbnail} alt={game.title}/>
            <Body>
                <TextWrapper>
                    <Title>{game.title}</Title>
                    <Button url={"/"}>READ MORE</Button>
                </TextWrapper>
                <ChipWrapper platform={game.platform} genre={game.genre}/>
            </Body>
            <RankChip position={"left"} rank={ranked}/>
        </Wrapper>
    )
}

const Wrapper = styled.article`
  border-radius: ${css.borderRadius.l};
  background-color: ${css.color.accentDark};
  color: ${css.color.textLight};
  display: flex;
  position: relative;
  overflow: hidden;
`

const Thumbnail = styled.img`
  border-radius: ${css.borderRadius.xl};
  object-fit: cover;
  object-position: center;
`

const Body = styled.div`
  padding-block-start: ${css.spacing.xxl};
  padding-block-end: ${css.spacing.l};
  padding-inline: ${css.spacing.l};
`

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.h4`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
  margin-bottom: ${css.spacing.m};
`

export default FlippedCard;
