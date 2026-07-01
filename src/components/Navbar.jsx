import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    const closeNav = () => setNav(false)

    const menuVariants = {
        open:   { x: 0,      transition: { stiffness: 20, damping: 15 } },
        closed: { x: '-100%', transition: { stiffness: 20, damping: 15 } }
    }

    const navLinks = [
        { label: 'Habilidades',    to: 'skills' },
        { label: 'Certificações',  to: 'certifications' },
        { label: 'Portfólio',      to: 'portfolio' },
        { label: 'Experiência',    to: 'experience' },
        { label: 'Sobre Mim',     to: 'contact' },
    ]

    return (
        <div className='fixed top-0 left-0 w-full z-50 border-b border-white/[0.06] bg-[#060d1a]/80 backdrop-blur-md'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center px-8 h-16'>

                <Link to="hero" smooth offset={50} duration={500}
                    className='cursor-pointer select-none flex items-center gap-1'>
                    <span className='font-mono text-cyan-400 font-semibold text-base tracking-wider'>G.</span>
                    <span className='font-semibold text-slate-200 text-base tracking-wide'>Cadima</span>
                </Link>

                <ul className='hidden md:flex gap-10 text-sm font-medium text-slate-400 cursor-pointer'>
                    {navLinks.map(({ label, to }) => (
                        <li key={to} className='hover:text-cyan-400 transition-colors duration-200'>
                            <Link to={to} smooth offset={50} duration={500}>{label}</Link>
                        </li>
                    ))}
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-slate-400 cursor-pointer'>
                    {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
                </div>
            </div>

            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen bg-[#060d1a] z-40 md:hidden'
            >
                <ul className='font-semibold text-3xl space-y-10 mt-28 text-center text-slate-300'>
                    {navLinks.map(({ label, to }) => (
                        <li key={to}>
                            <Link to={to} onClick={closeNav} smooth offset={50} duration={500}
                                className='hover:text-cyan-400 transition-colors'>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar
