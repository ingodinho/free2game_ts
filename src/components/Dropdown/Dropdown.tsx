import styled from "styled-components";
import {css} from "../../constants.ts";
import ChevronDown from "../icons/ChevronDown.tsx";
import useToggle from "../../hooks/use-toggle.hook.ts";
import ChevronUp from "../icons/ChevronUp.tsx";
import Option from "./Option.tsx";
import React from "react";

type Props = {
    label: string;
    options: string[]
}

const Dropdown = ({label, options}: Props) => {

    const [isExpanded, toggleExpand] = useToggle(false);

    const labelWrapperRef = React.useRef<HTMLDivElement>(null);

    // todo: change to custom hook!

    const [wrapperHeight, setWrapperHeight] = React.useState<number | undefined>();
    React.useEffect(() => {
        const rect = labelWrapperRef.current!.getClientRects();
        setWrapperHeight(rect[0].height);
    }, [])

    return (
        <PositionWrapper>
            <Wrapper>
                <LabelWrapper onClick={toggleExpand} ref={labelWrapperRef}>
                    <Label>{label}</Label>
                    {isExpanded && <ChevronUp/>}
                    {!isExpanded && <ChevronDown/>}
                </LabelWrapper>
                {isExpanded &&
                    <OptionWrapper $parentHeight={wrapperHeight ? wrapperHeight.toString()+"px" : undefined}>
                        {options.map(label => (
                            <Option label={label} key={label}/>
                        ))}
                    </OptionWrapper>
                }
            </Wrapper>
        </PositionWrapper>
    )
}

const PositionWrapper = styled.div`
  isolation: isolate;
`

const Wrapper = styled.div`
  background-color: ${css.color.primary};
  border-radius: ${css.borderRadius.m};
  padding-block: ${css.spacing.xs};
  padding-inline: ${css.spacing.m};
  position: relative;
`

const Label = styled.h5`
  color: ${css.color.textLight};
  font-family: ${css.fontFamily.primary};
  font-size: ${css.fontSize["18"]};
  font-weight: 700;
  text-transform: uppercase;
`

const LabelWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const OptionWrapper = styled.div<{$parentHeight?: string}>`
  background-color: ${css.color.accentDark};
  border-radius: ${css.borderRadius.ml};
  display: flex;
  flex-direction: column;
  gap: ${css.spacing.xs};
  left: 0;
  padding-block-start: ${css.spacing.m} + ${p => p.$parentHeight ? p.$parentHeight : ""};
  padding-block-end: ${css.spacing.m};
  padding-inline: ${css.spacing.xs};
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
`

export default Dropdown;
