/* eslint-disable react/prop-types */
import { motion } from 'motion/react'

/**
 * Revela o texto letra por letra: cada caractere sobe de dentro da
 * superfície com desfoque, em cascata.
 */
const SplitText = ({ text, className = '', delay = 0, stagger = 0.035, as = 'span' }) => {
  const MotionTag = motion[as] || motion.span
  const chars = Array.from(text)

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre will-change-transform"
          variants={{
            hidden: { opacity: 0, y: '0.45em', filter: 'blur(10px)' },
            show: {
              opacity: 1,
              y: '0em',
              filter: 'blur(0px)',
              transition: { duration: 0.65, ease: [0.22, 0.8, 0.28, 1] },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </MotionTag>
  )
}

export default SplitText
