import styled from "styled-components";
import CardList from "../CardList/CardList.tsx";
import Dropdown from "../Dropdown/Dropdown.tsx";

const filterData = [
    {
        label: "platform",
        options: [
            "Windows",
            "Browser"
        ]
    },
    {
        label: "Genre/Tag",
        options: [
            "Shooter",
            "Adventure",
            "Dieses",
            "Jenes"
        ]
    },
    {
        label: "Sort By",
        options: [
            "Date",
            "Rating"
        ]
    }
]

const FilterControls = () => {
    return (
        <Wrapper>
            <CardList>
                {filterData.map(filter => (
                    <Dropdown key={filter.label} label={filter.label} options={filter.options}/>
                ))}
            </CardList>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  
`

export default FilterControls;
