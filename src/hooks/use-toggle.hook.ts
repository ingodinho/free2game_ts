import React from "react";

const useToggle = (initialState : boolean = false) : [boolean, () => void] => {
    const [state, setState] = React.useState<boolean>(initialState);

    const toggleState = () => {
        setState(currentValue => !currentValue);
    }

    return [state, toggleState]
}

export default useToggle;
