import React from 'react'
import igClone from '../assets/Images/portfolio/Instagram.png'
import DocConsul from '../assets/Images/portfolio/KonsulDokter.png'
import musicClone from '../assets/Images/portfolio/Music.png'
import getAPI1 from '../assets/Images/portfolio/Quotes.png'
import getAPI2 from '../assets/Images/portfolio/Sale.png'
import getAPI3 from '../assets/Images/portfolio/UserProfile.png'

const Portfolio = () => {
    const portofolios = [
        {
            id: 1,
            src: igClone,
            code: 'https://github.com/Andif2000/Instagram',
            demo: ''
        },
        {
            id: 2,
            src: DocConsul,
            code: 'https://github.com/Andif2000/Kedokteran',
            demo: ''
        },
        {
            id: 3,
            src: musicClone,
            code: 'https://github.com/Andif2000/Music_Player',
            demo: ''
        },
        {
            id: 4,
            src: getAPI1,
            code: 'https://github.com/Andif2000/Fetching_API_With_Axios',
            demo: ''
        },
        {
            id: 5,
            src: getAPI2,
            code: 'https://github.com/Andif2000/Fetching_API_With_Axios2',
            demo: ''
        },
        {
            id: 6,
            src: getAPI3,
            code: 'https://github.com/Andif2000/Fetching_API_With_Axios3',
            demo: ''
        },
    ]
    return (
        <div
            name="portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check Out Some My Work Right Here </p>
                </div>
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portofolios.map(({ id, src, code, demo }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-md'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={demo} className='text-center w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>Demo</a>
                                    <a href={code} className='text-center w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio