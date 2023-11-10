import styled from "styled-components";
import {css} from "../../constants.ts";
import React from "react";

type ChipProps = {
    children: React.ReactNode;
    isIcon?: boolean
}

const Chip = ({children, isIcon = false} : ChipProps) => {
    return (
        <Wrapper $isIcon={isIcon}>{children}</Wrapper>
    )
}

type WrapperProps = {
    $isIcon: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${css.color.accentDark};
  border: 1px solid ${css.color.primary};
  border-radius: ${css.borderRadius.ml};
  max-width: fit-content;
  padding-block: ${props => props.$isIcon ? "11px" : "6px"};
  padding-inline: ${css.spacing.xs};
`

export default Chip;
