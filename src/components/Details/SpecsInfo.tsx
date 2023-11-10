import {Description, GridHeadline, GridText, SubHeadline} from "./Details.styles.ts";
import styled from "styled-components";
import {css} from "../../constants.ts";
import {GameDetails} from "../../types/game.type.ts";

type Props = {
    developer: GameDetails["developer"];
    publisher: GameDetails["publisher"];
    releaseDate: GameDetails["release_date"]
}

const SpecsInfo = ({developer, publisher, releaseDate} : Props) => {
    return (
        <SpecsInfoWrapper>
            <SubHeadline>Additional Information</SubHeadline>
            <SpecDescription>Please note this free-to-play game may or may not offer optional in-game
                purchases.</SpecDescription>
            <InfoGrid>
                <GridHeadline>Developer</GridHeadline>
                <GridText>{developer}</GridText>
                <GridHeadline>Publisher</GridHeadline>
                <GridText>{publisher}</GridText>
                <GridHeadline>Release Date</GridHeadline>
                <GridText>{releaseDate}</GridText>
            </InfoGrid>
        </SpecsInfoWrapper>
    )
}

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
  row-gap: ${css.spacing.m};
`

export default SpecsInfo;
