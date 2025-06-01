import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="shadow-md">
            <div className="container h-20 mx-auto flex items-center justify-between">
                <span className="text-2xl font-extrabold">Where in the world?</span>
                <button className="flex items-center gap-2"><IoMoonOutline /> Dark Mode</button>
            </div>
        </header>
    )
}