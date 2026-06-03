import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center p-6 md:p-16 text-sm md:text-base mt-8 border-t border-gray-800'>
        <div className='space-y-3'>
            <h3 className='text-xl text-gray-200 font-semibold'>G. Cadima</h3>
            <p className='text-gray-500 text-sm max-w-[220px]'>Desenvolvedor de Software & Engenheiro de Dados</p>
            <div className='flex flex-row gap-5 text-gray-400 text-3xl'>
                <a href="https://github.com/cadimaze" target="_blank" rel="noopener noreferrer" className='hover:text-white transition-colors duration-200'>
                    <FaGithubSquare />
                </a>
                <a href="https://www.instagram.com/cadimaz/" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors duration-200'>
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/guilherme-cadima-b140871b5/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors duration-200'>
                    <FaLinkedin />
                </a>
            </div>
        </div>
        <p className='text-gray-500 text-xs md:text-sm'>© 2026 G. Cadima</p>
    </div>
  )
}

export default Footer
