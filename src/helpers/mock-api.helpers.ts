import {allGamesData, gameDetailsData} from "./mock-data.helpers.ts";
import {delay} from "../utils.ts";
import {Game} from "../types/game.type.ts";

export const getAllGames = async () : Promise<Game[]> => {
    await delay(750);
    return allGamesData as Game[];
}

export const getGameDetails = async () => {
    await delay(750);
    return gameDetailsData;
}
