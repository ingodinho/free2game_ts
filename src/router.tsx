import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import RecentlyAdded from "./components/RecentlyAdded/RecentlyAdded.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/recently-added",
        element: <RecentlyAdded/>
    }
])
