import {apiBaseLink, fetcher} from "../helpers/api.helpers.ts";
import useSWR from "swr";
import {Game} from "../types/game.type.ts";

type useAllGamesProps = {
    platform?: string,
    category?: string,
    ["sort-by"]?: string
}

/**
 * Hook for retrieving games from the api with optional filter-options
 * @param filterOptions
 */
export const useGames = (filterOptions?: useAllGamesProps) => {

    const searchParams = new URLSearchParams({...filterOptions});
    const url = apiBaseLink + "/games?" + searchParams.toString();

    const {data, error, isLoading} = useSWR<Game[]>(url, fetcher);

    return {data, error, isLoading};
}
