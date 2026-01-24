import styled from "styled-components";
import darkLogo from "../../../public/images/DarkModeLogo.png"
import CallIcon from "../../icons/CallIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import  {AnimatePresence,  motion } from "framer-motion"
import Text from "../../ui/Text";

const MenuItems = [
  {key: "home", name: "خانه"},
  {key: "projects", name: "پروژه ها"},
  {key: "about-us",name: "درباره ما" },
  {key: "contact-us", name: "تماس با ما"}
]
export default  function HeaderSection() {
    const isAboveMediumScreen = useMediaQuery("(min-width: 900px)");
    const LogoImage = darkLogo
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<AnimatePresence mode="wait">
  {isAboveMediumScreen ? (
    <motion.div
      key="desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.36 , ease: "easeInOut"}}
    >
      <DesktopHeader LogoImage={LogoImage} />
    </motion.div>
  ) : (
    <motion.div
      key="mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.36 , ease: "easeInOut"}}
    >
      <MobileHeader LogoImage={LogoImage} />
    </motion.div>
  )}
</AnimatePresence>

  )
}

function DesktopHeader ({LogoImage}: any) {
return (
  <StyledDesktopHeader
  
  >
    {/* RIGHT DIV */}
      <StyledHeaderRightSection>
        <Image src={LogoImage} alt="atrasLogo"/>
         {
          MenuItems.map((m) => {
            return(
              <Text key={m.key} variant="regular 20" >{m.name}</Text>
            )
          })
         }
      </StyledHeaderRightSection>

    {/* LEFT DIV */}
      <PhoneCallButton/> 

  </StyledDesktopHeader>
)
}



    // key={isAboveMediumScreen as any}
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // whileInView="view"
    // transition={{ duration: 1 , ease: "easeInOut"}}
function MobileHeader({isAboveMediumScreen, LogoImage} : any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
  <>
<StyledBarIconSvg
  initial={false}  
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
  onClick={() => setIsMobileMenuOpen(p => !p)}
>
  <MenuIcon />
</StyledBarIconSvg>

    <Overlay 
        $isOpen={isMobileMenuOpen} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />
  {!isAboveMediumScreen && (
  <StyledMobileSidebar $isMobileOpen={isMobileMenuOpen}>
    <Image src={LogoImage} alt="atrasLogo"/>
    <SiderBarMenu>
            {
          MenuItems.map((m) => {
            return(
              <Text key={m.key} variant="regular 24" >{m.name}</Text>
            )
          })
         }

    </SiderBarMenu>


  </StyledMobileSidebar>
)}
  </>
)

}

function PhoneCallButton(){
  return (
    <StyledHeaderLeftSection>
        <Button>
          <span>09912382015</span>
          <CallIcon/>
        </Button>                
    </StyledHeaderLeftSection>
  )
}

// DESKTOP
const StyledDesktopHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding: 1rem 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  z-index: 10;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    /* Dark neutral tint */
    background: rgba(35, 35, 35, 0.35);

    /* Subtle blur, no brightness kill */
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    z-index: -1;
  }

`;

const StyledHeaderLeftSection = styled.div`
    display: flex;
    position: relative;
    top: 0;
    right: 0;

`

const StyledHeaderRightSection = styled.nav`
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
`


// MOBILE

const StyledBarIconSvg = styled(motion.button)`
  width: 51px;
  border: none !important;
  border-radius: 4px;

  position: fixed;
  top: 10px;
  right: 5px;
  
  & svg{
    width: clamp(28px, 6vw, 36px);
    height: clamp(28px, 6vw, 36px);
    stroke : #B1B1B1;
  }

  /* transition: all ease-in-out 1s; */

  background: none !important;

  &:hover {
    transform: scale(1.2);

    & svg{
      stroke: #49e79d;
    }
  }
`

const StyledMobileSidebar = styled.aside<{ $isMobileOpen?: boolean }>`
  background-color: #212121;
  border-radius: 8px;

  align-items: center;
  gap: 2rem;


  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: clamp(100px, 70vw, 250px);
    z-index: 1000;
    transform: ${({ $isMobileOpen }) =>
    $isMobileOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    border-radius: 0;
    overflow-y: auto;
    /* border: 1px solid red; */
  }

  padding: 2rem;
`;


const SiderBarMenu = styled.div`
/* border: 1px solid pink; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 4rem;

  /* box-shadow: 0 0 3px 2px red; */
  padding: 2rem;

`


const Image = styled.img`
  width: 120px;
  width: clamp(96px, 8vw, 120px);
`


const Button = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.7rem;
  background: #8AE749;

  padding: 0.5rem 1rem;

  border: none !important;

  color: #000000;
  font-size: var(--font-size-16);


  &:hover{
    background: #49e79d;
  }

`


const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    display: block;
  }
`;

// const Text = styled.span`
//   font-size: var(--font-size-26);
//   font-weight: 500;
//   `