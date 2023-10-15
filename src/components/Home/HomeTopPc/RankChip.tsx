import styled from "styled-components";
import {css} from "../../../constants.ts";

type Props = {
    position: "left" | "right";
    rank: number
}

const RankChip = ({position = "right", rank} : Props) => {
    return (
        <Wrapper $position={position}>
            <Number>{rank.toString()}</Number>
        </Wrapper>
    )
}

type WrapperProps = {
    $position: "left" | "right";
}

const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  background-color: ${css.color.accentDark};
  border: 2px solid ${css.color.primary};
  border-radius: 50%;
  display: flex;
  height: 3.625rem;
  justify-content: center;
  left: ${props => props.$position === "left" && css.spacing.m};
  position: absolute;
  right: ${props => props.$position === "right" && css.spacing.m};
  top: ${css.spacing.m};
  width: 3.625rem;
`

const Number = styled.span`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["24"]};
  font-weight: 700;
`

export default RankChip;
