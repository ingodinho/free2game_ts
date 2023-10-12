import React from "react";
import styled from "styled-components";
import {css} from "../../constants.ts";

type CardListProps = {
    children: React.ReactNode
}

const CardList = ({children}: CardListProps) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  gap: ${css.spacing.m};
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
`

export default CardList
