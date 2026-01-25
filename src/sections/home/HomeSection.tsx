import styled from "styled-components";
import Text from "../../ui/Text";
import { motion } from "framer-motion";
import { AccentIcon, AccentIconreverse, StarAccentIcon } from "../../icons/AccentIcons";

function HomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView="view"
      transition={{ duration: 1 , ease: "easeInOut"}}
    >
      <Intro>
        <IntroBlur />
        
        {/* Decorative icons container - separate from content */}
        <DecorativeIcons>
          <AccentIcon right="8%"top="41%"  />
          <AccentIconreverse top="63%" right="85%" />
          <StarAccentIcon  top="68%" right="13%" />
          <StarAccentIcon  top="32%" right="83%" />
          <StarAccentIcon width="16px" height="16px"  top="40%" right="86%" />
        </DecorativeIcons>

        <TextWrapper>
          <Text variant="medium 30" as="h1" >
            شرکت مهندسی اترس خودرو ایرانیان
          </Text>

          <Text variant="light 14" as="span">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </Text>
        </TextWrapper>
      </Intro>
    </motion.div>
  );
}
export default HomeSection;


const DecorativeIcons = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none; /* Allows clicks to pass through */
  
  @media (max-width: 900px) {
    display: none;
  }
`;


const Intro = styled.div`
  position: relative;
  /* width: 95%; */
  /* margin: auto; */
  width: clamp(400px, 75vw, 714px);
  height: clamp(200px, 50vw, 400px);

  border-radius: 50%;
  /* padding: clamp(1.5rem, 4vw, 4rem); */
  padding: 8rem 5rem;
  /* padding */
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 5rem; */

  /* border: 1px solid rgba(255, 255, 255, 0.2); */


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

  
  @media (max-width: 900px) {
    margin-top: 6rem;
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
  z-index: 1;
  animation: linear infinite, pulse 3s ease-in-out infinite;
  /* width: 85%; */
  margin: auto;
    
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

`;