import styled from "styled-components"
import Text from "../ui/Text"
import LittleLineIcon from "../icons/littleLineIcon"

function TitleText({titleText} : {titleText?: string}) {
  return (
    <StyledTitleText>
        <LittleLineIcon/>
        <Text variant="medium 20">
            {titleText ?? "درباره ما"}
        </Text>
        <LittleLineIcon/>
    </StyledTitleText>
  )
}

export default TitleText

const StyledTitleText = styled.div`
    border: 1px solid red;
    padding: 0%.5rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`