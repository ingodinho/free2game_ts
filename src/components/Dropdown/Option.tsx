import styled from "styled-components";
import Rectangle from "../icons/Rectangle.tsx";
import {css} from "../../constants.ts";
import Union from "../icons/Union.tsx";
import useToggle from "../../hooks/use-toggle.hook.ts";

type Props = {
    label: string;
}

const Option = ({label}: Props) => {

    const [isSelected, toggleSelect] = useToggle(false);

    return (
        <Wrapper onClick={toggleSelect}>
            <IconWrapper>
                <Rectangle/>
                {/*todo: fix with styled components*/}
                {isSelected && <Union style={{position: "absolute", inset: 0}}/>}
            </IconWrapper>
            <Label>{label}</Label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  align-items: center;
  background-color: ${css.color.accentLight};
  border-radius: ${css.borderRadius.m};
  color: ${css.color.textLight};
  cursor: pointer;
  display: flex;
  gap: ${css.spacing.xs};
  padding-block: ${css.spacing.xs};
  padding-inline: ${css.spacing.m};
`

const IconWrapper = styled.div`
  position: relative;
`

const Label = styled.span`
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
`

export default Option;
