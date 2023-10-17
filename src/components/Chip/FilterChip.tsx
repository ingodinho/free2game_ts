import Chip from "./Chip.tsx";
import styled from "styled-components";
import Union from "../icons/Union.tsx";
import {css} from "../../constants.ts";
import {useFilterContext} from "../../hooks/use-filter.hook.ts";

type Props = {
    label: string;
    category: "platform" | "tag" | "sort-by";
}

const FilterChip = ({label, category}: Props) => {

    const {filterOptions, setFilterOptions} = useFilterContext();

    const removeOption = () => {
        const currentFilter = [...filterOptions[category]];
        const nextFilter = currentFilter.filter(value => label !== value);
        setFilterOptions(currentOptions => ({...currentOptions, [category]: nextFilter}));
    }

    return (
        <Chip>
            <Wrapper>
                <Union style={{cursor: "pointer"}} onClick={removeOption}/>
                <Title>{label}</Title>
            </Wrapper>
        </Chip>
    )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${css.spacing.xs};
  width: fit-content;
`

const Title = styled.span`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-weight: 500;
`
export default FilterChip;
