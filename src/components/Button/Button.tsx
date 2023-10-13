import styled from "styled-components";
import React from "react";
import {css} from "../../constants.ts";
import {Link} from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode;
    url: string
}
const Button = ({children, url} : ButtonProps) => {
    return (
        <StyledButton to={url}>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled(Link)`
  background-color: ${css.color.primary};
  border: none;
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  cursor: pointer;
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
  padding-block: ${css.spacing.xs};
  padding-inline: ${css.spacing.m};
  text-decoration: none;
  text-transform: uppercase;
  width: fit-content;
`
