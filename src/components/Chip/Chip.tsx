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
  border: 1px solid ${css.color.primary};
  background: ${css.color.accentDark};
  border-radius: ${css.borderRadius.ml};
  padding-block: ${props => props.$isIcon ? "11px" : "6px"};
  padding-inline: ${css.spacing.xs};
`

export default Chip;
