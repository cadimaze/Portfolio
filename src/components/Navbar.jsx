import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => setNav(!nav)
    const closeNav = () => setNav(false)

    const menuVariants = {
        open: {
            x: 0,
            transition: { stiffness: 20, damping: 15 }
        },
        closed: {
            x: '-100%',
            transition: { stiffness: 20, damping: 15 }
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
            <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 items-center px-8 h-20'>

                <Link
                    to="hero"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='text-xl font-bold cursor-pointer z-10 select-none'
                >
                    G. Cadima
                </Link>

                <ul className='hidden md:flex gap-10 text-base z-10 cursor-pointer font-medium'>
                    <li className='hover:text-purple-400 transition-colors duration-200'>
                        <Link to="skills" smooth={true} offset={50} duration={500}>Habilidades</Link>
                    </li>
                    <li className='hover:text-purple-400 transition-colors duration-200'>
                        <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfólio</Link>
                    </li>
                    <li className='hover:text-purple-400 transition-colors duration-200'>
                        <Link to="experience" smooth={true} offset={50} duration={500}>Experiência</Link>
                    </li>
                    <li className='hover:text-purple-400 transition-colors duration-200'>
                        <Link to="contact" smooth={true} offset={50} duration={500}>Sobre Mim</Link>
                    </li>
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200 cursor-pointer'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 md:hidden'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center text-gray-200'>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>Habilidades</Link></li>
                    <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfólio</Link></li>
                    <li><Link to="experience" onClick={closeNav} smooth={true} offset={50} duration={500}>Experiência</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Sobre Mim</Link></li>
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar
