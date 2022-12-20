import styled from "styled-components";

type ColorIconType = "purple" | "yellow" | "yellow-dark";

interface IconProps {
    colorIcon: ColorIconType;
}


export const ContentContainer = styled.div`
    display: flex;
`

export const Item = styled.div`
    display: flex;
    gap: .75rem;

    & > div:last-child{
        display: flex;
        flex-direction: column;
        color: ${props => props.theme["base-text"]};

        & > span, & > strong {
            line-height: 130%;
        }
    }
`

export const Icon = styled.div<IconProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    background: ${props => props.theme[props.colorIcon]};

    svg {
        color: ${props => props.theme.white};
    }
`