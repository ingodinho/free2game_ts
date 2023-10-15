import Chip from "../Chip.tsx";
import browser from "../../../assets/img/icons/browser.svg";
import windows from "../../../assets/img/icons/windows.svg";
import styled from "styled-components";
import {Game} from "../../../types/game.type.ts";

type IconChipProps = {
    platform: Game["platform"];
}
const IconChip = ({platform}: IconChipProps) => {

    const iconSrc = platform === "PC (Windows)" ? windows : browser;

    return (
        <Chip isIcon={true}><Icon src={iconSrc} alt={platform}/></Chip>
    )
}

const Icon = styled.img`
  height: 15px;
  width: 16px;
`

export default IconChip;
