import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>G. Cadima</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/cadimaze"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/cadimaz/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/guilherme-cadima-b140871b5/"><FaLinkedin /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2024 G. Cadima</p>
        
    </div>
  )
}

export default Footer