import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import SideMenuContext from "./context/SideMenu.context.tsx";
import FilterContextProvider from "./context/Filter.context.tsx";

function App() {

    return (
        <>
            <SideMenuContext>
                <FilterContextProvider>
                    <RouterProvider router={router}/>
                </FilterContextProvider>
            </SideMenuContext>
        </>
    )
}

export default App
