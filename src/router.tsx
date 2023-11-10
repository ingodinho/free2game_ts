import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import RecentlyAdded from "./components/RecentlyAdded/RecentlyAdded.tsx";
import AllGames from "./components/AllGames/AllGames.tsx";
import Details from "./components/Details/Details.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/recently-added",
        element: <RecentlyAdded/>
    },
    {
        path: "/all-games",
        element: <AllGames/>
    },
    {
        path: "/game/:id",
        element: <Details/>
    }
])
