import styled from "styled-components";
import Text from "../ui/Text";
import LittleLineIcon from "../icons/LittleLineIcon";
import { motion } from "framer-motion";

function TitleText({ titleText }: { titleText?: string }) {
  return (
    <StyledTitleText
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div variants={iconVariants}>
        <LittleLineIcon />
      </motion.div>

      <motion.div variants={textVariants}>
        <Text variant="medium 20">{titleText ?? "درباره ما"}</Text>
      </motion.div>

      <motion.div variants={iconVariants}>
        <LittleLineIcon />
      </motion.div>
    </StyledTitleText>
  );
}

export default TitleText;

const StyledTitleText = styled(motion.div)`
  padding: 0.5rem 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  width: max-content;
  margin: auto;

  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(8px);

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    opacity: 0.95;
  }
`;


const containerVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    x: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,

    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,

    },
  },
};
