import styled from "styled-components";
import Text from "../../ui/Text";
import { motion } from "framer-motion";

function HomeSection() {
  return (
    <StyledHome>


      <Intro>
  <IntroBlur />
  <TextWraapper>
    <Text variant="medium 32">
      شرکت مهندسی اترس خودرو ایرانیان
    </Text>

    <Text variant="light 14">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
       چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
    </Text>
  </TextWraapper>
</Intro>

{/* <InfoBox>lkpok</InfoBox> */}

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
`;


const IntroBlur = styled.div`
  position: absolute;
  inset: -5%; 

  border-radius: 50%;
  background: #232323;
  /* background: red; */

  filter: blur(clamp(24px, 6vw, 45px));
  transform: scale(1.1);

  z-index: -1;
`;

const TextWraapper = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`
// const InfoBox = styled.div`
//   width: 886px;
//   height: 140px;
//   background-color: #272727;
//   border-radius: 32px;
//   box-shadow: 0px 0px 20px #000000;
// `