import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Navindicate from './helpers/Navindicate'
function MainLayout() {
    return (
        <div>
            <Navigation />
            <Navindicate />
            <div className='min-h-screen'>
                <Outlet />
            </div>

            <Footer />


        </div>
    )
}

export default MainLayout