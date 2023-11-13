import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSideBar, Navbar, SmallSideBar } from '../components'
import { createContext, useContext, useState } from 'react'

const DashboardContext = createContext()

const DashboardLayout = () => {
    //temp
    const user = { name: 'fbc' }

    const [showSideBar, setShowSideBar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    const toggleDarkTheme = () => {
        console.log('toggleDarkTheme');
    }

    const logoutUser = async () => {
        console.log('logoutUser');
    }

    return (
        <DashboardContext.Provider value={{ user, showSideBar, isDarkTheme, toggleSideBar, toggleDarkTheme, logoutUser }}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSideBar />
                    <BigSideBar />
                    <div>
                        <Navbar />
                        <div className='dashboard-page'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout