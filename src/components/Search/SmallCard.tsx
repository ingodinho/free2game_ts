import styled from "styled-components";
import {Game} from "../../types/game.type.ts";
import Thumbnail from "../Thumbnail/Thumbnail.tsx";
import {css} from "../../constants.ts";
import {Link} from "react-router-dom";


type Props = {
    title: Game["title"];
    thumbnail: Game["thumbnail"];
    id: Game["id"];
    resetSearchQuery: () => void;
}

const SmallCard = ({title, thumbnail, id, resetSearchQuery} : Props) => {
    return (
        <Wrapper to={`/game/${id}`} onClick={resetSearchQuery}>
            <Thumbnail src={thumbnail} alt={title}/>
            <h4>{title}</h4>
        </Wrapper>
    )
}

const Wrapper = styled(Link)`
  background-color: ${css.color.accentDark};
  color: ${css.color.textLight};
  text-decoration: none;
  display: grid;
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  grid-template-columns: 1fr 1fr;
  padding: ${css.spacing.xs};
  
  h4 {
    align-self: center;
    justify-self: center;
    transition: color 250ms ease;
  }

  &:hover h4 {
    color: ${css.color.primary};
  }
  
`

export default SmallCard;
