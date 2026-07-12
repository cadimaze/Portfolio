import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useLang } from '../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLang()

  return (
    <footer className='border-t border-stone-800 mt-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-10'>
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='font-mono text-sm'>
            <span className='text-amber-500'>guilherme@cadima</span>
            <span className='text-stone-600'>:</span>
            <span className='text-stone-400'>~$</span>
            <span className='text-amber-400 cursor-blink ml-1'>▮</span>
          </div>
          <p className='text-stone-600 text-xs font-mono'>{'//'} {t.footer.role}</p>
          <div className='flex gap-4 text-stone-600 text-xl'>
            <a href="https://github.com/cadimaze" target="_blank" rel="noopener noreferrer"
              className='hover:text-amber-400 transition-colors duration-200'><FaGithubSquare /></a>
            <a href="https://www.instagram.com/cadimaz/" target="_blank" rel="noopener noreferrer"
              className='hover:text-amber-400 transition-colors duration-200'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/guilherme-cadima-b140871b5/" target="_blank" rel="noopener noreferrer"
              className='hover:text-amber-400 transition-colors duration-200'><FaLinkedin /></a>
          </div>
        </div>
        <p className='text-stone-700 text-xs font-mono'>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
