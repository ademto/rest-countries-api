import { useContext } from "react";
import { ThemeContext } from "../App";
import { Outlet } from "react-router-dom"
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";


export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <header className="shadow-md dark:bg-dark-elements px-5 xl:px-0">
                <div className="container h-20 mx-auto flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-extrabold dark:text-white">Where in the world?</span>
                    <button onClick={toggleTheme} className="flex items-center gap-2 cursor-pointer dark:text-white">
                        {theme === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}
                        Dark Mode
                    </button>
                </div>
            </header>
        <Outlet />
        </>
    )
}