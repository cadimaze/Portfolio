import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='border-t border-white/[0.06] mt-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-10'>
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='flex items-center gap-1'>
            <span className='font-mono text-cyan-400 font-semibold text-sm'>G.</span>
            <span className='font-semibold text-slate-300 text-sm'>Cadima</span>
          </div>
          <p className='text-slate-600 text-xs font-mono'>Desenvolvedor de Software & Engenheiro de Dados</p>
          <div className='flex gap-4 text-slate-600 text-xl'>
            <a href="https://github.com/cadimaze" target="_blank" rel="noopener noreferrer"
              className='hover:text-slate-300 transition-colors duration-200'><FaGithubSquare /></a>
            <a href="https://www.instagram.com/cadimaz/" target="_blank" rel="noopener noreferrer"
              className='hover:text-pink-400 transition-colors duration-200'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/guilherme-cadima-b140871b5/" target="_blank" rel="noopener noreferrer"
              className='hover:text-sky-400 transition-colors duration-200'><FaLinkedin /></a>
          </div>
        </div>
        <p className='text-slate-700 text-xs font-mono'>&copy; 2026 Guilherme Cadima — Feito com React & Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer
