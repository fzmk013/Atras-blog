import styled from "styled-components"
import patterns from "../../public/images/PATTERN.png";
import HeaderSection from "../sections/header/HeaderSection";


function Layout({children} : any) {
  return (
    <StyledLayout dir="rtl">
        {/* <HeaderSection/> */}
        {children}
    </StyledLayout>
  )
}

export default Layout


const StyledLayout = styled.div`
min-height: 100vh;
background-image: url(${patterns});
background-color: #212121;
/* background: radial-gradient(258.19% 74.24% at 50% 12.21%, #E9F5FC 0%, rgba(203, 220, 243, 0.87) 22%, rgba(5, 52, 186, 0) 100%), radial-gradient(63.78% 39.75% at 50% 18.41%, #29ba05 0%, rgba(5, 52, 186, 0) 100%), radial-gradient(100% 100% at 50% 0%, #29ba05  0%, rgba(5, 52, 186, 0) 100%) black; */
background-repeat: no-repeat;
background-size: auto;
background-position: top left;


  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  margin: auto;


  min-height: 100vh;
background-image: url(${patterns});
/* background-repeat: repeat; */
background-size: auto;
background-position: top left;
background-color: #212121;
  `