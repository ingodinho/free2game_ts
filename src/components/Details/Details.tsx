import DetailsLayout from "./DetailsLayout.tsx";
import {useParams} from "react-router-dom";
import {useGameDetails} from "../../hooks/use-games.hook.ts";
import Loading from "../Loading/Loading.tsx";
import styled from "styled-components";
import {css} from "../../constants.ts";
import Thumbnail from "../Thumbnail/Thumbnail.tsx";
import Spacer from "../Spacer/Spacer.tsx";
import DetailsDescription from "./DetailsDescription.tsx";
import {minColumnWidth} from "./Details.styles.ts";
import SpecsInfo from "./SpecsInfo.tsx";
import SpecsRequirements from "./SpecsRequirements.tsx";

const Details = () => {

    const {id} = useParams();

    const {data, isLoading} = useGameDetails(id as string);

    return (
        <DetailsLayout game={data} isLoading={isLoading}>
            {isLoading && <Loading/>}
            {data &&
                <>
                    <DetailsDescription data={data}/>
                    <ScreenshotWrapper>
                        {data.screenshots.filter((_, index) => index < 2).map((screenShot) => (
                            <Thumbnail key={screenShot.id} src={screenShot.image} alt={"screenshot"}/>
                        ))}
                    </ScreenshotWrapper>
                    <Spacer height={css.spacing.layoutTop}/>
                    <SpecsWrapper>
                        <SpecsInfo developer={data.developer} publisher={data.publisher} releaseDate={data.release_date} />
                        {data.platform === "Windows" && (
                            <SpecsRequirements systemRequirements={data.minimum_system_requirements} />
                        )}
                    </SpecsWrapper>
                </>
            }
        </DetailsLayout>
    )
}

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

export default Details;
