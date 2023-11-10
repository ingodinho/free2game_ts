import styled from "styled-components";
import {css} from "../../constants.ts";

// todo: compare to design system
export const minColumnWidth = `350px`;
export const columnGap = `150px`;

export const Description = styled.p`
  font-family: ${css.fontFamily.secondary};
  font-size: ${css.fontSize["16"]};
  line-height: 1.6;
  margin-bottom: ${css.spacing.s};
`

export const GridHeadline = styled.h5`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
`

export const GridText = styled.span`
  font-family: ${css.fontFamily.secondary};
`

export const SubHeadline = styled.h3`
  font-size: ${css.fontSize["24"]};
  font-family: ${css.fontFamily.primary};
  font-weight: 700;
  margin-bottom: ${css.spacing.l};
`
