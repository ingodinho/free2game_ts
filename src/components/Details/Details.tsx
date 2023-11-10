import DetailsLayout from "./DetailsLayout.tsx";
import {useParams} from "react-router-dom";
import {useGameDetails} from "../../hooks/use-games.hook.ts";
import Loading from "../Loading/Loading.tsx";
import styled from "styled-components";
import {css} from "../../constants.ts";
import GenreChip from "../Chip/GenreChip.tsx";
import Button from "../Button/Button.tsx";
import Thumbnail from "../Thumbnail/Thumbnail.tsx";
import React from "react";
import Spacer from "../Spacer/Spacer.tsx";

const Details = () => {

    const {id} = useParams();

    const {data, isLoading, error} = useGameDetails(id as string);

    const descriptionParagraphs = React.useMemo(() => data?.description.split("\r\n").filter(string => string !== ""), [data]);

    return (
        <DetailsLayout game={data} isLoading={isLoading}>
            {isLoading && <Loading/>}
            {data &&
                <>
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
                    <ScreenshotWrapper>
                        {data.screenshots.filter((_, index) => index < 2).map((screenShot) => (
                            <Thumbnail key={screenShot.id} src={screenShot.image} alt={"screenshot"}/>
                        ))}
                    </ScreenshotWrapper>
                    <Spacer height={css.spacing.layoutTop}/>
                    <SpecsWrapper>
                        <SpecsInfoWrapper>
                            <SubHeadline>Additional Information</SubHeadline>
                            <SpecDescription>Please note this free-to-play game may or may not offer optional in-game
                                purchases.</SpecDescription>
                            <InfoGrid>
                                <GridHeadline>Developer</GridHeadline>
                                <GridText>{data.developer}</GridText>
                                <GridHeadline>Publisher</GridHeadline>
                                <GridText>{data.publisher}</GridText>
                                <GridHeadline>Release Date</GridHeadline>
                                <GridText>{data.release_date}</GridText>
                            </InfoGrid>
                        </SpecsInfoWrapper>
                        {data.platform === "Windows" && (
                            <SpecsRequirementsWrapper>
                                <SubHeadline>Minimum System Requirements (Windows)</SubHeadline>
                                <RequirementsGrid>
                                    <div>
                                        <GridHeadline>OS</GridHeadline>
                                        <GridText>{data.minimum_system_requirements.os}</GridText>
                                    </div>
                                    <div>
                                        <GridHeadline>Processor</GridHeadline>
                                        <GridText>{data.minimum_system_requirements.processor}</GridText>
                                    </div>
                                    <div>
                                        <GridHeadline>Memory</GridHeadline>
                                        <GridText>{data.minimum_system_requirements.memory}</GridText>
                                    </div>
                                    <div>
                                        <GridHeadline>Graphics</GridHeadline>
                                        <GridText>{data.minimum_system_requirements.graphics}</GridText>
                                    </div>
                                    <div>
                                        <GridHeadline>Storage</GridHeadline>
                                        <GridText>{data.minimum_system_requirements.storage}</GridText>
                                    </div>
                                    <div>
                                        <GridHeadline>Additional Notes</GridHeadline>
                                        <GridText>Specifications may change during development</GridText>
                                    </div>
                                </RequirementsGrid>
                            </SpecsRequirementsWrapper>
                        )}
                    </SpecsWrapper>
                </>
            }
        </DetailsLayout>
    )
}

// todo: compare to design system
const minColumnWidth = `350px`;
const columnGap = `150px`;

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

const SubHeadline = styled.h3`
  font-size: ${css.fontSize["24"]};
  font-family: ${css.fontFamily.primary};
  font-weight: 700;
  margin-bottom: ${css.spacing.l};
`

const Description = styled.p`
  font-family: ${css.fontFamily.secondary};
  font-size: ${css.fontSize["16"]};
  line-height: 1.6;
  margin-bottom: ${css.spacing.s};
`

const ScreenshotWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(${minColumnWidth}, 100%), 1fr));
  gap: ${css.spacing.m};
`

const SpecsWrapper = styled.section`
  column-gap: ${css.spacing.m};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(${minColumnWidth}, 100%), 1fr));
`

const SpecsInfoWrapper = styled.div`
  padding-inline: ${css.spacing.m};
`

const SpecDescription = styled(Description)`
  margin-bottom: ${css.spacing.m};
`

const InfoGrid = styled.div`
  align-items: baseline;
  column-gap: ${css.spacing.m};
  display: grid;
  grid-template-columns: auto 1fr;
  margin-block-end: ${css.spacing.m};
`

const GridHeadline = styled.h5`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
`

const GridText = styled.span`
  font-family: ${css.fontFamily.secondary};
`

const SpecsRequirementsWrapper = styled.div`
  padding-inline: ${css.spacing.m};
`

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${css.spacing.m};
`

export default Details;
