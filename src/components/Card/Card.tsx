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
                    <Button>READ MORE</Button>
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
`

const Thumbnail = styled.img`
  border-radius: ${css.borderRadius.xl};
  width: 100%;
`

const Body = styled.div`
  padding-block: ${css.spacing.l};
  padding-inline: ${css.spacing.m};
`

const TextWrapper = styled.div`
  padding-bottom: ${css.spacing.xl};
  border-bottom: 2px solid ${css.color.seperator};
`

const Title = styled.h4`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
  margin-bottom: ${css.spacing.m};
  min-height: 2em;
`

const Description = styled.p`
  font-family: ${css.fontFamily.secondary};
  color: ${css.color.textDark};
  padding-block-end: ${css.spacing.l};
`

const ChipWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-block-start: ${css.spacing.m};
  padding-inline: ${css.spacing.xxs};
`
