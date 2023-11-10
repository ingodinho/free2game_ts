import styled from "styled-components";
import {css} from "../../constants.ts";
import ChevronDown from "../icons/ChevronDown.tsx";
import useToggle from "../../hooks/use-toggle.hook.ts";
import ChevronUp from "../icons/ChevronUp.tsx";
import Option from "./Option.tsx";
import React from "react";
import {TOption} from "../../types/option.type.ts";

type Props = {
    label: string;
    options: TOption[]
}

const Dropdown = ({label, options}: Props) => {

    const [isExpanded, toggleExpand] = useToggle(false);

    const wrapperRef = React.useRef<HTMLDivElement>(null);

    // todo: change to custom hook!

    const [wrapperHeight, setWrapperHeight] = React.useState<number | undefined>();
    React.useLayoutEffect(() => {
        const rect = wrapperRef.current!.getClientRects();
        setWrapperHeight(rect[0].height);
    }, [])

    return (
        <PositionWrapper>
            <Wrapper ref={wrapperRef}>
                <LabelWrapper onClick={toggleExpand}>
                    <Label>{label}</Label>
                    {isExpanded && <ChevronUp/>}
                    {!isExpanded && <ChevronDown/>}
                </LabelWrapper>
                {isExpanded &&
                    <OptionWrapper $parentHeight={wrapperHeight ? wrapperHeight.toString()+"px" : undefined}>
                        {options.map(option => (
                            <Option label={option.label} key={option.value} value={option.value} category={option.category}/>
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
  padding-block-start: calc(${css.spacing.m} + ${p => p.$parentHeight ? p.$parentHeight : ""});
  padding-block-end: ${css.spacing.m};
  padding-inline: ${css.spacing.xs};
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
`

export default Dropdown;
