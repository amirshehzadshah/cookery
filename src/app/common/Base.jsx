import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Base({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className='flex justify-center items-center fixed top-0 z-10 w-full'>
                <Header />
            </header>
            <main className='flex flex-col justify-center items-center flex-1'>
                {children}
            </main>
            <footer className='flex justify-center items-center fixed bottom-0 z-10 w-full'>
                <Footer />
            </footer>
        </div>
    )
}

export default Base