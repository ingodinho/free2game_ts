import styled from "styled-components";
import React from "react";
import {css} from "../../constants.ts";

type ButtonProps = {
    children: React.ReactNode
}
const Button = ({children} : ButtonProps) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
  background-color: ${css.color.primary};
  border: none;
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
  padding-block: ${css.spacing.xs};
  padding-inline: ${css.spacing.m};
  text-transform: uppercase;
`
