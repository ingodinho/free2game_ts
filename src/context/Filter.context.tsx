import React from "react";

type FilterContextType = {
    filterOptions?: FilterOptions,
    setFilterOptions?: React.Dispatch<React.SetStateAction<FilterOptions>>
}

const initialFilterOptions = {
    platform: [],
    tag: [],
    "sort-by": []
}

export const FilterContext = React.createContext<FilterContextType>({filterOptions: initialFilterOptions, setFilterOptions: () => {}});

type Props = {
    children: React.ReactNode
}

export type FilterOptions = {
    platform: string[],
    tag: string[],
    ["sort-by"]: string[]
}
const FilterContextProvider = ({children}: Props) => {

    const [filterOptions, setFilterOptions] = React.useState<FilterOptions>(initialFilterOptions);

    return (
        <FilterContext.Provider value={{filterOptions, setFilterOptions}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;
