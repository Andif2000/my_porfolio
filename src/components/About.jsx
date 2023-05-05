import React from 'react'

const About = () => {
    return (
        <div
            name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl border-b-4 inline font-bold  border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Andi Zulfahmi, Born in Maradda June 20 2000. Is an Alumni
                    Major Informatics Engineering at Dipa Makassar University
                    in 2022. Successfully Completed Undergraduate Education
                    in 3.7 Years and Received The Cum Laude Predicate With a
                    GPA of 3.70.
                </p>
                <br />
                <p className='text-xl'>
                    I'm a Front End Mobile Developer. For the Past 1 Year,
                    I have been developing applications with financial features
                    from Tokolapak using the Javascript Programming Language
                    with the React Native Framework.
                </p>
            </div>
        </div>
    )
}

export default About