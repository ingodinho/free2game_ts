import styled from "styled-components";
import {css} from "../../constants.ts";
import {Game} from "../../types/game.type.ts";
import Button from "../Button/Button.tsx";
import IconChip from "../IconChip/IconChip.tsx";
import GenreChip from "../GenreChip/GenreChip.tsx";

type CardProps = {
    game: Game;
    includesDescription?: boolean
}

const Card = ({game, includesDescription = false}: CardProps) => {

    return (
        <Wrapper>
            <Thumbnail src={game.thumbnail} alt={game.title}/>
            <Body>
                <TextWrapper>
                    <Title>{game.title}</Title>
                    {includesDescription && <Description>{game.short_description}</Description>}
                    <MarginAuto></MarginAuto>
                    <Button url={"/"}>READ MORE</Button>
                </TextWrapper>
                <ChipWrapper>
                    <IconChip plattform={game.platform}/>
                    <GenreChip genre={game.genre}/>
                </ChipWrapper>
            </Body>
        </Wrapper>
    )
}

export default Card;


const Wrapper = styled.article`
  border-radius: ${css.borderRadius.xl};
  background-color: ${css.color.accentDark};
  color: ${css.color.textLight};
  display: flex;
  flex-direction: column;
`

const Thumbnail = styled.img`
  border-radius: ${css.borderRadius.xl};
  width: 100%;
`

const Body = styled.div`
  display: flex;
  padding-block: ${css.spacing.l};
  padding-inline: ${css.spacing.m};
  flex: 1;
  flex-direction: column;
`

const TextWrapper = styled.div`
  padding-inline-start: ${css.spacing.xs};
  padding-inline-end: ${css.spacing.xxs};
  padding-block-end: ${css.spacing.xl};
  border-bottom: 2px solid ${css.color.seperator};
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

const Description = styled.p`
  font-family: ${css.fontFamily.secondary};
  color: ${css.color.textDark};
  display: -webkit-box;
  margin-block-end: ${css.spacing.l};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

const MarginAuto = styled.div`
  margin-block-start: auto;
`

const ChipWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-block-start: ${css.spacing.m};
  padding-inline: ${css.spacing.xxs};
`
