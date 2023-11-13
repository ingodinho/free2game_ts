import Lens from "../icons/Lens.tsx";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden.tsx";
import {css} from "../../constants.ts";
import React from "react";
import {useGames} from "../../hooks/use-games.hook.ts";
import Loading from "../Loading/Loading.tsx";
import SmallCard from "./SmallCard.tsx";

const Search = () => {

    const {data, isLoading} = useGames();

    const [searchQuery, setSearchQuery] = React.useState("");

    const resetSearchQuery = () => {
        setSearchQuery("");
    }

    if (isLoading || !data) {
        return <Loading/>
    }

    const searchGames = (query: string) => {
        return data.filter(game => game.title.toLowerCase().includes(query.toLowerCase())).filter((_, index) => index < 5);
    }

    const foundGames = searchGames(searchQuery);

    return (
        <Wrapper tabIndex={-1}>
            <VisuallyHidden>
                <label htmlFor="search">Search</label>
            </VisuallyHidden>
            <Input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}/>
            <Lens/>
            {searchQuery && foundGames.length > 0 && (
                <FoundGamesWrapper>
                    {foundGames.map(game => (
                        <SmallCard title={game.title} thumbnail={game.thumbnail} id={game.id} key={game.id} resetSearchQuery={resetSearchQuery}/>
                    ))}
                </FoundGamesWrapper>
            )}
            {searchQuery && foundGames.length < 1 && (
                <FoundGamesWrapper>
                    <p>Sorry, no games found!</p>
                </FoundGamesWrapper>
            )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${css.color.accentLight};
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  display: flex;
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  gap: ${css.spacing.s};
  padding: 5px 20px;
  position: relative;
  width: min(18.75rem, 100%);

  //todo not focus when icon is focussed // better effect
  &:focus-within {
      //outline: 2px solid ${css.color.primary};
    box-shadow: 0 0 5px 2px ${css.color.primary};
  }
`

const Input = styled.input`
  background-color: initial;
  border: initial;
  color: inherit;
  flex: 1;
  outline: initial;
`

const FoundGamesWrapper = styled.div`
  background-color: ${css.color.accentLight};
  display: flex;
  flex-direction: column;
  gap: ${css.spacing.xs};
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  height: fit-content();
  max-height: 500px;
  overflow-y: scroll;
`

export default Search;
