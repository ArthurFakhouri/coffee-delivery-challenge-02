import styled from "styled-components"

export const PriceContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
`

const titlePattern = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SubTitle = styled(titlePattern)` 
    color: ${props => props.theme["base-text"]};

    & > span:first-child{
        font-size: .875rem;
        line-height: 130%;
    }

    & > h3:last-child{
        line-height: 130%;
    }
`

export const Title = styled(titlePattern)`
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;

    & > span{
        line-height: 130%;
    }
`