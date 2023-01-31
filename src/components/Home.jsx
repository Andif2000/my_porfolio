import React from 'react'
import Fahmi from '../assets/Images/Fahmi.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
            <div
                className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm  a Front End Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cum quod numquam quas. Nam distinctio nisi praesentium aliquid molestiae officia vitae adipisci natus qui doloribus? Rerum non pariatur praesentium numquam.</p>

                    <div>
                        <button>
                            porfolio
                            <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                    </div>

                </div>
                <div>
                    <img src={Fahmi} alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home