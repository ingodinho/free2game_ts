import React from "react";
import {FilterContext} from "../context/Filter.context.tsx";

export const useFilterContext = () => {
    const {filterOptions, setFilterOptions} = React.useContext(FilterContext);

    if(filterOptions === undefined || setFilterOptions === undefined) {
        throw new Error("useFilterContext must be used within the FilterContextProvider");
    }

    return {filterOptions, setFilterOptions};
}
