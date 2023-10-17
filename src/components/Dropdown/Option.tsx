import styled from "styled-components";
import Rectangle from "../icons/Rectangle.tsx";
import {css} from "../../constants.ts";
import Union from "../icons/Union.tsx";
import useToggle from "../../hooks/use-toggle.hook.ts";
import {useFilterContext} from "../../hooks/use-filter.hook.ts";
import {TOption} from "../../types/option.type.ts";
import {FilterOptions} from "../../context/Filter.context.tsx";


const Option = ({label, value, category}: TOption) => {

    const {filterOptions, setFilterOptions} = useFilterContext();

    const [isSelected, toggleSelect] = useToggle(filterOptions[category].includes(value));

    const clickHandler = () => {
        toggleSelect()
        setFilterOptions(setNextFilterOptions);
    }

    const setNextFilterOptions = (currentFilter: FilterOptions) => {
        const filterIsAlreadySet = currentFilter[category].includes(value);

        if (category !== "tag") {
            return {...currentFilter, [category]: filterIsAlreadySet ? [] : [value]};
        }

        let nextCategory = [...currentFilter[category]];

        if (filterIsAlreadySet) {
            nextCategory = nextCategory.filter(filterValue => value !== filterValue);
        } else {
            nextCategory = [...nextCategory, value];
        }

        return {...currentFilter, [category]: nextCategory};
    }

    return (
        <Wrapper onClick={clickHandler}>
            <IconWrapper>
                <Rectangle/>
                {/*todo: fix with styled components*/}
                {isSelected && <Union style={{position: "absolute", inset: 0}}/>}
            </IconWrapper>
            <Label>{label}</Label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  align-items: center;
  background-color: ${css.color.accentLight};
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  cursor: pointer;
  display: flex;
  gap: ${css.spacing.xs};
  padding-block: ${css.spacing.xs};
  padding-inline: ${css.spacing.m};
`

const IconWrapper = styled.div`
  position: relative;
`

const Label = styled.span`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
`

export default Option;
