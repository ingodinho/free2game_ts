import React from "react";
import {SideMenuContext} from "../context/SideMenu.context.tsx";

const useSideMenu = () => {
    const {isMenuOpen, toggleMenu} = React.useContext(SideMenuContext);

    return {isMenuOpen, toggleMenu};
}

export default useSideMenu;
