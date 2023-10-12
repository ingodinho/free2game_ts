import React, {useEffect} from "react";
import {getAllGames} from "../helpers/mock-api.helpers.ts";
import {Game} from "../types/game.type.ts";

export const useAllGames = () => {
    const [allGames, setAllGames] = React.useState<Game[]>([]);

    useEffect(() => {
        const runEffect = async () => {
            const allGames = await getAllGames();
            setAllGames(allGames);
        }

        runEffect();

    }, []);

    return allGames;
}
