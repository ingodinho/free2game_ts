import React from "react";
import useToggle from "../hooks/use-toggle.hook.ts";

type Props = {
    children: React.ReactNode;
}

// todo: check if this is ok
export const SideMenuContext = React.createContext<{isMenuOpen: boolean, toggleMenu: () => void}>({isMenuOpen: false, toggleMenu: () => undefined});

const SideMenuContextProvider = ({children} : Props) => {

    const [isMenuOpen, toggleMenu] = useToggle(false);

    return (
        <SideMenuContext.Provider value={{isMenuOpen, toggleMenu}}>
            {children}
        </SideMenuContext.Provider>
    )
}


export default SideMenuContextProvider;
