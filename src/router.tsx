import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    }
])
