import styled from "styled-components";
import Text from "../../ui/Text";
import { motion } from "framer-motion";
import { AccentIcon, AccentIconreverse, StarAccentIcon } from "../../icons/AccentIcons";

function HomeSection() {
  return (
    <StyledHome>

      <Intro>
        <IntroBlur  />
      
        <AccentIcon right="14%" top="-5%" />
        <AccentIconreverse top="13%" right="92%" />
        <StarAccentIcon  top="20%" right="5%" />
        <StarAccentIcon  top="-16%" right="82.5%" />
        <StarAccentIcon width="16px" height="16px"  top="-10%" right="80%" />


        <TextWrapper>
          <Text variant="medium 32">
            شرکت مهندسی اترس خودرو ایرانیان
          </Text>

          <Text variant="light 14">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </Text>
        </TextWrapper>
      </Intro>


    </StyledHome>
  );
}

export default HomeSection;



const StyledHome = styled(motion.div)`

`;

const Intro = styled.div`
  position: relative;

  width: clamp(400px, 75vw, 714px);
  height: clamp(190px, 50vw, 450px);

  border-radius: 50%;
  padding: clamp(1.5rem, 4vw, 4rem);

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: white;

  margin: auto; /* centers on page */

  /* Prevent blur overflow on small screens */
  isolation: isolate;
@media (max-width: 900px) {
  
  & svg{
    display: none;
  }
}
`;


const IntroBlur = styled.div`
  position: absolute;
  inset: -5%;
  border-radius: 50%;
  background: #232323;

  filter: blur(clamp(24px, 6vw, 45px));
  transform: scale(1.1);

  z-index: 0;
`;

const TextWrapper = styled.div`
  /* position: relative; */
  z-index: 1;
  animation: linear infinite, pulse 2s ease-in-out infinite;


    
  @keyframes pulse {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(133, 153, 119, 0.6))
              drop-shadow(0 0 16px rgba(115, 134, 101, 0.4))
              drop-shadow(0 0 24px rgba(138, 231, 73, 0.2));
    }
    50% {
      filter: drop-shadow(0 0 12px rgba(59, 65, 55, 0.8))
              drop-shadow(0 0 24px rgba(70, 70, 70, 0.6))
              drop-shadow(0 0 36px rgba(138, 231, 73, 0.3));
    }
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  text-align: center;

  /* border: 1px solid red; */

  
  
  @media (min-width: 900px) {
    
    margin-left: 6rem;

}
`;