import styled from "styled-components"
import TitleText from "../../components/TitleText"


function FooterSection() {
  return (
    <StyledFooterSection>
        <TitleText titleText="تماس با ما"/>
    </StyledFooterSection>
  )
}

export default FooterSection

const StyledFooterSection = styled.div`
margin-top: 5rem;
`