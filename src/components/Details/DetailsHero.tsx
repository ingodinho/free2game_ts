import styled from "styled-components";
import {css} from "../../constants.ts";

type Props = {
    title: string;
    imageSrc: string
}

const DetailsHero = ({title, imageSrc}: Props) => {

    return (
        <Wrapper $isHome={false} $imageSrc={imageSrc}>
            <Title>{title}</Title>
        </Wrapper>
    )
}

type WrapperProps = {
    $isHome: boolean;
    $imageSrc: string;
}

const Wrapper = styled.section<WrapperProps>`
  align-items: flex-end;
  background: url(${props => props.$imageSrc}) center / cover no-repeat;
  border-radius: ${props => !props.$isHome && css.borderRadius.xl};
  display: flex;
  margin-inline-start: calc(${props => !props.$isHome && css.spacing.m} + ${css.spacing.sideMenuClosed});
  margin-inline-end: ${props => !props.$isHome && css.spacing.m};
  min-height: ${props => props.$isHome ? "580px" : "490px"};
  padding-block-end: 80px;
  padding-inline-start: calc(80px + ${css.spacing.sideMenuClosed});
`

const Title = styled.h2`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["48"]};
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  width: 25rem;
`

export default DetailsHero;
