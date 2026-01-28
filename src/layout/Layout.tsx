import styled from "styled-components"
import patterns from "../../public/images/PATTERN.png";
import HeaderSection from "../sections/header/HeaderSection";
// import PatternIcon from "../icons/PatternIcon";
// import FooterSection from "../sections/footer/FooterSection";


function Layout({children} : any) {
  return (
    <>
    <StyledLayout dir="rtl">
        <HeaderSection/>
        {/* <MainContentWrapper> */}
         {children}
        {/* </MainContentWrapper> */}
        {/* <FooterSection/> */}
    </StyledLayout>
        {/* <PatternIcon top="1500px" left="-0.3%" /> */}
    </>
  )
}

export default Layout


const StyledLayout = styled.div`
  min-height: 100vh;
  background-color: #212121;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* TOP PATTERN AREA */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px; /* 👈 controls pattern height */

    background-image: url(${patterns});
    background-repeat: repeat;
    background-size: auto;
    opacity: 0.5;

    pointer-events: none;
    z-index: 0;
  }

  /* CONTENT ABOVE BACKGROUND */
  > * {
    position: relative;
    z-index: 1;
  }
`;

// const MainContentWrapper = styled.div`
// border: 1px solid red;
// padding: 5rem;
// display: flex;
// flex-direction: column;
// gap: 5rem;

//   `