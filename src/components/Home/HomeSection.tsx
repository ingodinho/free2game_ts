import React from "react";
import Button from "../Button/Button.tsx";
import styled from "styled-components";
import {css} from "../../constants.ts";

type HomeSectionProps = {
    children: React.ReactNode;
    title: string;
    url: string
}

const HomeSection = ({children, title, url}: HomeSectionProps) => {
    return (
        <Wrapper>
            <Headline>{title}</Headline>
            {children}
            <ButtonWrapper>
                <Button url={url}>Show More</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.section`
`

const Headline = styled.h3`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["24"]};
  font-weight: 700;
  margin-block-end: ${css.spacing.xl};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-block-start: ${css.spacing.l};
`

export default HomeSection;
