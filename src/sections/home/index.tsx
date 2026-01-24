import { motion } from "framer-motion";

type Props = {}

function index({}: Props) {
  return (
    <motion.div
        initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -35 },
            visible: { opacity: 1, x: 0 },
          }}
    >oldfjk
    </motion.div>
  )
}

export default index