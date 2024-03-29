import React from 'react'
import Fahmi from '../assets/Images/Fahmi.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div
            name='home' 
            className='h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800 '>
            <div
                className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white'>Andi Zulfahmi</h2>
                    <h5 className='text-2xl sm:text-3xl  text-white'>Front End Mobile Developer</h5>
                    <p className='text-gray-500 py-4 max-w-md pr-3'>I Use React Native To Create a Mobile Application Display and Combine it With NativeWind CSS</p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 '>
                                <MdOutlineKeyboardArrowRight 
                                size={25}
                                className='ml-1'/>
                            </span>
                        </Link>
                    </div>

                </div>
                <div>
                    <img src={Fahmi} alt="my profile"
                        className='rounded-2xl mx-auto w-1/2 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home