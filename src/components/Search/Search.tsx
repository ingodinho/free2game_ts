import Lens from "../icons/Lens.tsx";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden.tsx";
import {css} from "../../constants.ts";

const Search = () => {
    return (
        <Wrapper tabIndex={-1}>
            <VisuallyHidden>
                <label htmlFor="search">Search</label>
            </VisuallyHidden>
            <Input type="text" name="search" id="search"/>
            <Lens/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${css.color.accentLight};
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  display: flex;
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  gap: ${css.spacing.s};
  padding: 5px 20px;
  width: min(18.75rem, 100%);
  
  //todo not focus when icon is focussed // better effect
  &:focus-within {
    //outline: 2px solid ${css.color.primary};
    box-shadow: 0 0 5px 2px ${css.color.primary};
  }
`

const Input = styled.input`
  background-color: initial;
  border: initial;
  color: inherit;
  flex: 1;
  outline: initial;
`

export default Search;
