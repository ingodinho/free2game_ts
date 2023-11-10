import Thumbnail from "../Thumbnail/Thumbnail.tsx";
import GenreChip from "../Chip/GenreChip.tsx";
import Spacer from "../Spacer/Spacer.tsx";
import {css} from "../../constants.ts";
import Button from "../Button/Button.tsx";
import React from "react";
import styled from "styled-components";
import {GameDetails} from "../../types/game.type.ts";
import {columnGap, Description, minColumnWidth, SubHeadline} from "./Details.styles.ts";

type Props = {
    data: GameDetails
}

const DetailsDescription = ({data} : Props) => {

    const descriptionParagraphs = React.useMemo(() => data?.description.split("\r\n").filter(string => string !== ""), [data]);

    return (
        <section>
            <Headline>{data.title}</Headline>
            <DetailsBody>
                <InfoWrapper>
                    <Thumbnail src={data.thumbnail} alt={data.title}/>
                    <InfoBody>
                        <Platform>Platform: {data.platform}</Platform>
                        <GenreChip genre={data.genre}/>
                        <Spacer height={css.spacing.l}/>
                        <Button url={data.freetogame_profile_url}>PLAY NOW</Button>
                    </InfoBody>
                </InfoWrapper>
                <DescriptionWrapper>
                    <SubHeadline>About</SubHeadline>
                    {descriptionParagraphs && descriptionParagraphs.map((paragraph, index) => (
                        <Description key={index}>{paragraph}</Description>
                    ))}
                </DescriptionWrapper>
            </DetailsBody>
        </section>
    )
}

export default DetailsDescription;

const Headline = styled.h2`
  font-size: ${css.fontSize["48"]};
  font-family: ${css.fontFamily.primary};
  font-weight: 700;
  margin-bottom: ${css.spacing.xl};
`

const DetailsBody = styled.div`
  column-gap: ${columnGap};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(${minColumnWidth}, 100%), 1fr));
  margin-bottom: ${css.spacing.layoutTop};
`

const InfoWrapper = styled.div``

const InfoBody = styled.div`
  padding-block: ${css.spacing.l};
  padding-inline: ${css.spacing.m};
`

const Platform = styled.h3`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["24"]};
  margin-bottom: ${css.spacing.m};
`

const DescriptionWrapper = styled.div`
  max-width: 55ch;
`
