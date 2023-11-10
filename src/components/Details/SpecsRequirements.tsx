import {GridHeadline, GridText, SubHeadline} from "./Details.styles.ts";
import styled from "styled-components";
import {css} from "../../constants.ts";
import {GameDetails} from "../../types/game.type.ts";

type Props = {
    systemRequirements: GameDetails["minimum_system_requirements"]
}

const SpecsRequirements = ({systemRequirements} : Props) => {
    return (
        <SpecsRequirementsWrapper>
            <SubHeadline>Minimum System Requirements (Windows)</SubHeadline>
            <RequirementsGrid>
                <div>
                    <GridHeadline>OS</GridHeadline>
                    <GridText>{systemRequirements.os}</GridText>
                </div>
                <div>
                    <GridHeadline>Processor</GridHeadline>
                    <GridText>{systemRequirements.processor}</GridText>
                </div>
                <div>
                    <GridHeadline>Memory</GridHeadline>
                    <GridText>{systemRequirements.memory}</GridText>
                </div>
                <div>
                    <GridHeadline>Graphics</GridHeadline>
                    <GridText>{systemRequirements.graphics}</GridText>
                </div>
                <div>
                    <GridHeadline>Storage</GridHeadline>
                    <GridText>{systemRequirements.storage}</GridText>
                </div>
                <div>
                    <GridHeadline>Additional Notes</GridHeadline>
                    <GridText>Specifications may change during development</GridText>
                </div>
            </RequirementsGrid>
        </SpecsRequirementsWrapper>
    )
}

const SpecsRequirementsWrapper = styled.div`
  padding-inline: ${css.spacing.m};
`

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${css.spacing.m};
  
  > div {
    display: flex;
    flex-direction: column;
    gap: ${css.spacing.xs};
  }
`

export default SpecsRequirements;
