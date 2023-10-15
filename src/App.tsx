import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import SideMenuContext from "./context/SideMenu.context.tsx";

function App() {

    return (
        <>
            <SideMenuContext>
                <RouterProvider router={router}/>
            </SideMenuContext>
        </>
    )
}

export default App
