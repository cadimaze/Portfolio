import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'habilidades',    to: 'skills' },
  { label: 'certificações',  to: 'certifications' },
  { label: 'projetos',       to: 'portfolio' },
  { label: 'experiência',    to: 'experience' },
  { label: 'sobre',          to: 'contact' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const toggleNav = () => setNav(!nav)
  const closeNav = () => setNav(false)

  const menuVariants = {
    open:   { x: 0,       transition: { stiffness: 20, damping: 15 } },
    closed: { x: '-100%', transition: { stiffness: 20, damping: 15 } },
  }

  return (
    <div className='fixed top-0 left-0 w-full z-50 border-b border-stone-800 bg-[#0b0906]/85 backdrop-blur-md'>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-8 h-16'>

        <Link to="hero" smooth offset={50} duration={500}
          className='cursor-pointer select-none font-mono text-sm md:text-base tracking-tight'>
          <span className='text-amber-500'>~/</span>
          <span className='text-stone-200'>guilherme-cadima</span>
          <span className='text-amber-400 cursor-blink ml-0.5'>▮</span>
        </Link>

        <ul className='hidden md:flex gap-8 font-mono text-sm text-stone-400'>
          {navLinks.map(({ label, to }) => (
            <li key={to} className='group cursor-pointer transition-colors duration-200 hover:text-amber-400'>
              <Link to={to} smooth offset={50} duration={500}>
                <span className='text-amber-600/60 group-hover:text-amber-400 transition-colors'>/</span>{label}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={toggleNav} className='md:hidden z-50 text-stone-300 cursor-pointer'>
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={nav ? 'open' : 'closed'}
        variants={menuVariants}
        className='fixed left-0 top-0 w-full min-h-screen bg-[#0b0906] z-40 md:hidden'
      >
        <p className='font-mono text-xs text-stone-600 mt-24 mb-10 text-center'>
          <span className='text-amber-500'>guilherme@cadima</span>:~$ menu
        </p>
        <ul className='font-mono font-bold text-2xl space-y-8 text-center text-stone-300'>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={closeNav} smooth offset={50} duration={500}
                className='hover:text-amber-400 transition-colors'>
                <span className='text-amber-600/60'>/</span>{label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Navbar
