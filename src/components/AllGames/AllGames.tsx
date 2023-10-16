import Layout from "../Layout/Layout.tsx";
import FilteredGames from "./FilteredGames.tsx";
import FilterControls from "./FilterControls.tsx";
import Spacer from "../Spacer/Spacer.tsx";
import {css} from "../../constants.ts";

const AllGames = () => {
    return (
        <>
            <Layout>
                <FilterControls/>
                <Spacer height={css.spacing.xl}/>
                <FilteredGames/>
            </Layout>
        </>
    )
}

export default AllGames;
