import styled from "styled-components";
import {css} from "../../constants.ts";

type Props = {
    src: string;
    alt: string
}

const Thumbnail = ({src, alt} : Props)  => {
    return (
        <Image src={src} alt={alt}/>
    )
}

const Image = styled.img`
  border-radius: ${css.borderRadius.xl};
  width: 100%;
`

export default Thumbnail;
