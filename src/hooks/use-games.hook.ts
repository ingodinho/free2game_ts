import {apiBaseLink, fetcher} from "../helpers/api.helpers.ts";
import useSWR from "swr";
import {Game} from "../types/game.type.ts";
import {FilterOptions} from "../context/Filter.context.tsx";
import {optionToString} from "../helpers/filter.helpers.ts";


type Category = "platform" | "tag" | "sort-by";

/**
 * Hook for retrieving games from the api with filter-options
 * @param filterOptions
 */
export const useGamesWithFilter = (filterOptions: FilterOptions) => {

    // todo: refactor this shit. but works though
    const filterArray = Object.keys(filterOptions).map(category => optionToString(filterOptions, category as Category));
    let url : string;

    if(filterArray.join("") === "") {
        url = apiBaseLink + "/games";
    } else if (filterOptions["tag"].length > 1){
        const queryString = filterArray.filter(string => string !== "").join("&");
        url = apiBaseLink + "/filter?" + queryString;
    } else {
        const queryString = filterArray.filter(string => string !== "").join("&").replace("tag", "category");
        url = apiBaseLink + "/games?" + queryString;
    }

    const {data, error, isLoading} = useSWR<Game[]>(url, fetcher);

    return {data, error, isLoading};
}


/**
 * Hook for retrieving all games from the api
 */
export const useGames = () => {
    const url = apiBaseLink + "/games";
    const {data, error, isLoading} = useSWR<Game[]>(url, fetcher);

    return {data, error, isLoading};
}
