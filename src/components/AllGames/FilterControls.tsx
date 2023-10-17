import styled from "styled-components";
import CardList from "../CardList/CardList.tsx";
import Dropdown from "../Dropdown/Dropdown.tsx";
import {filterData} from "../../helpers/filter.helpers.ts";
import Spacer from "../Spacer/Spacer.tsx";
import {useFilterContext} from "../../hooks/use-filter.hook.ts";
import FilterChip from "../Chip/FilterChip.tsx";
import {css} from "../../constants.ts";

const FilterControls = () => {

    const {filterOptions} = useFilterContext();
    const platformFilter = filterOptions["platform"];
    const tagFilter = filterOptions["tag"];
    const sortBy = filterOptions["sort-by"];

    return (
        <Wrapper>
            <CardList>
                {filterData.map(filter => (
                    <Dropdown key={filter.label} label={filter.label} options={filter.options}/>
                ))}
            </CardList>
            <Spacer height={"36px"}/>
            <ChipList>
                {platformFilter.map(value => (
                    <FilterChip key={value} label={value} category={"platform"}/>
                ))}
                {tagFilter.map(value => (
                    <FilterChip key={value} label={value} category={"tag"}/>
                ))}
                {sortBy.map(value => (
                    <FilterChip key={value} label={value} category={"sort-by"}/>
                ))}
            </ChipList>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const ChipList = styled.div`
    display: flex;
    gap: ${css.spacing.m};
`

export default FilterControls;
