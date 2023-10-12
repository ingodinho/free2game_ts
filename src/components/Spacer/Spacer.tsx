import styled from "styled-components";

type SpacerProps = {
    width?: string,
    height?: string,
}

const Spacer = ({height, width} : SpacerProps) => {
    return <Wrapper height={height} width={width}></Wrapper>
}


const Wrapper = styled.div<SpacerProps>`
    height: ${props => props.height};
    width: ${props => props.width};
`

export default Spacer;
