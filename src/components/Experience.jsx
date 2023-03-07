import React from 'react'
import Htm from '../assets/Images/experience/html.png'
import Cs from '../assets/Images/experience/css.png'
import Javsc from '../assets/Images/experience/js.png'
import Github from '../assets/Images/experience/github.png'
import ReactN from '../assets/Images/experience/react.png'
import TailWind from '../assets/Images/experience/tailwind.png'

const Experience = () => {
    const techs = [
        {
            id: 1,
            title: 'HTML',
            src: Htm,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            title: 'CSS',
            src: Cs,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            title: 'JavaScipt',
            src: Javsc,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            title: 'React',
            src: ReactN,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            title: 'Tailwind',
            src: TailWind,
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            title: 'GitHub',
            src: Github,
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="experience"
            className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white'>
                <div>
                    <p className='p-2 text-4xl font-bold border-b-4 bg-gray-500 inline'>Experiences</p>
                    <p className='py-6'>These are the technologies I've worked with.</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, title, src, style }) => (
                            <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg '+style}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-2'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience