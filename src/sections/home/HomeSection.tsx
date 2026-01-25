import styled from "styled-components";
import Text from "../../ui/Text";
import { motion } from "framer-motion";
import { AccentIcon, AccentIconreverse, StarAccentIcon } from "../../icons/AccentIcons";
import Button from "../../components/Button";

function HomeSection() {

  return (
    <section>
      {/* INTRO */}
      <Intro
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView="view"
        transition={{ duration: 1 , ease: "easeInOut"}}
      >
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
        <ContactUsButton/>
      </Intro>

      {/* INFO CARDS */}
      <InfoCard/>
    </section>
  );
}
export default HomeSection;

function ContactUsButton() {
  return (
      <ButtonWrapper>
        <Button variant="outlined">
          فرم تماس با ما
        </Button>
      </ButtonWrapper>
  )
}

function InfoCard() {
  return(
      <InfoBox
          initial="hidden" //initial value
           whileInView="visible" //final value
           viewport={{once : true , amount: 0.5 }}
           transition={{duration : 1.5}}
           variants={{
            hidden : {opacity : 0, x:-50},//initial condition
            visible : {opacity : 1 , x:0},//final condition
           }}
      >
        <InfoWrapper>
          {
            InfoCardField.map((i) => {
              return(
                <StyledSingleInfoCard key={i.key}>
                  <Text variant="bold 40">{i.header} +</Text>
                  <Text variant="regular 16" color="#B1B1B1" >{i.description}</Text>
                </StyledSingleInfoCard>
              )
            })
          }
        </InfoWrapper>
      </InfoBox>
  )
}

const InfoCardField = [
  {key:"1", header: "1000", description: "لورم ایپسوم"},
  {key:"2", header: "88", description: "لورم ایپسوم"},
  {key:"1", header: "500", description: "لورم ایپسوم"},
  {key:"1", header: "150", description: "لورم ایپسوم"},
]
const DecorativeIcons = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none; /* Allows clicks to pass through */
  
  @media (max-width: 900px) {
    display: none;
  }
`;


const Intro = styled(motion.div)`
  position: relative;
  /* width: 95%; */
  /* margin: auto; */
  width: clamp(400px, 75vw, 714px);
  height: clamp(200px, 50vw, 450px);

  border-radius: 50%;
  /* padding: clamp(1.5rem, 4vw, 4rem); */
  padding: 9rem 5rem;
  /* padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 5rem; */


  /* text-align: center; */
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

const ButtonWrapper = styled.div`
  z-index: 1;
  margin-top: -2rem;

  @media (max-width: 900px) {
    display: none;
}

`;

const InfoBox = styled(motion.div)`
  /* height: 140px; */
  background-color: #272727;
  border-radius: 32px;
  box-shadow: 0px 0px 20px #000000;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  width: clamp(100px, 50vw, 800px);
`

const InfoWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  padding: 2rem;
`

const StyledSingleInfoCard  = styled.li`
    border-left: 1px solid #B1B1B1;

    width: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 900px) {
    border-bottom: 1px solid #B1B1B1;
    border-left: none;
    padding: 2rem 0rem;
  }

  &:last-child {
    border: none;
  }

    
`

