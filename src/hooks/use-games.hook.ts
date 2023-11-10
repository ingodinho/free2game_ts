import {apiBaseLink, fetcher} from "../helpers/api.helpers.ts";
import useSWR from "swr";
import {Game, GameDetails} from "../types/game.type.ts";
import {FilterOptions} from "../context/Filter.context.tsx";
import {optionToString} from "../helpers/filter.helpers.ts";


type Category = "platform" | "tag" | "sort-by";

/**
 * Hook for retrieving games from the api with filter-options
 * @param filterOptions
 */
export const useGamesWithFilter = (filterOptions: FilterOptions) => {

    // todo: refactor this code. but works though
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

/**
 * Hook for retrieving Information to a specific game
 * @param id GameId
 */
export const useGameDetails = (id: string) => {

    const url = apiBaseLink + `/game?id=${id}`;
    const {data, error, isLoading} = useSWR<GameDetails>(url, fetcher);

    return {data, error, isLoading}
}
