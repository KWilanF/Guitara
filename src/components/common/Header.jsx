import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-green-800 text-white shadow-md">
            
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 md:px-16 py-4">
                
                {/* LOGO */}
                <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                    Guitara
                </h1>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex gap-6 text-base font-medium">
                    <NavLink to="/" className="hover:text-[#FDFBD4]">Home</NavLink>
                    <NavLink to="/songs" className="hover:text-[#FDFBD4]">Songs</NavLink>
                    <NavLink to="/chords" className="hover:text-[#FDFBD4]">Chords</NavLink>
                </nav>

                {/* SIGN IN (desktop) */}
                <div className="hidden md:block">
                    <button className="bg-[#FDFBD4] text-green-800 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
                        Sign In
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/songs" onClick={() => setOpen(false)}>Songs</NavLink>
                    <NavLink to="/chords" onClick={() => setOpen(false)}>Chords</NavLink>

                    <button className="bg-[#FDFBD4] text-green-800 px-4 py-2 rounded-lg font-semibold mt-2">
                        Sign In
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;