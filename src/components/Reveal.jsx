/* eslint-disable react/prop-types */
import { motion } from 'motion/react'

/** Entrada suave: o elemento sobe e materializa quando entra na viewport. */
const Reveal = ({ children, width = 'fit-content', delay = 0, y = 26 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 0.8, 0.28, 1] }}
    style={{ width }}
    className="h-full"
  >
    {children}
  </motion.div>
)

export default Reveal
