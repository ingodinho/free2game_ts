import styled from "styled-components";
import React from "react";

type Props = {
    children: React.ReactNode;
}

const VisuallyHidden = ({children} : Props) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.span`
  clip: rect(0 0 0 0);
  bottom: 0;
  display: inline-block;
  position: absolute;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`

export default VisuallyHidden;
