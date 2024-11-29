import React from 'react'
import Navbar from '../components/Navbar'
import IssueForm from '../components/IssueForm'
import home from '../assets/home.svg'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='flex items-center justify-center max-w-3xl mx-6 md:mx-auto md:gap-8 lg:gap-20'>
                <IssueForm />
                <img src={home} alt="form" className='w-80 hidden md:block' />
            </section>
        </>
    )
}

export default Home
