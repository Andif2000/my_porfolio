import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIdn < FaLinkedin size={30} /></>
            ),
            href: 'https://www.linkedin.com/in/andi-zulfahmi-547a67257/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub < FaGithub size={30} /></>
            ),
            href: 'https://github.com/Andif2000',
            style: ''

        },
        {
            id: 3,
            child: (
                <>Email < HiOutlineMail size={30} /></>
            ),
            href: 'mailto:andifahmi26@gmail.com',
            style: ''
        },
        {
            id: 4,
            child: (
                <>Resume < BsFillPersonLinesFill size={30} /></>
            ),
            href: '../assets/document/Andi Zulfahmi, S.Kom-resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        // eslint-disable-next-line
                        className={'flex justify-between items-center w-40 px-4 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style}>
                        <a href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLink