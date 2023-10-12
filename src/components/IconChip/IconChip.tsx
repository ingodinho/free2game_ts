import Chip from "../Chip/Chip.tsx";
import browser from "../../assets/img/icons/browser.svg";
import windows from "../../assets/img/icons/windows.svg";
import styled from "styled-components";

type IconChipProps = {
    plattform: "PC (Windows)" | "Web Browser";
}
const IconChip = ({plattform}: IconChipProps) => {

    const iconSrc = plattform === "PC (Windows)" ? windows : browser;

    return (
        <Chip isIcon={true}><Icon src={iconSrc} alt={plattform}/></Chip>
    )
}

const Icon = styled.img`
  height: 15px;
  width: 16px;
`

export default IconChip;
