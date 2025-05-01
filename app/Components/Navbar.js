"use client";
import React, { Profiler } from "react";
import { Home, PersonStanding, PersonStandingIcon, Search, User } from 'lucide-react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    
    const isHomePage = router.pathname === "/Home";

    if (status === "loading") {
        return null; // Optional: Show a loading state until session is ready.
    }

    return (
        session ? (
            <div className="fixed bottom-0 w-full bg-slate-900 text-white border-t border-slate-700 px-4 py-2 flex justify-around items-center z-50">
                <button
                    className={`cursor-pointer flex flex-col items-center text-sm hover:text-pink-400 transition ${isHomePage ? "text-pink-400" : ""}`}
                    onClick={() => router.push('/Home')}
                >
                    <Home size={20} />
                    Home
                </button>
                <button
                    className="cursor-pointer flex flex-col items-center text-sm hover:text-pink-400 transition"
                    onClick={() => router.push('/About')} 
                >
                <PersonStandingIcon size={20} />
                    About
                </button>
                <button
                    className="cursor-pointer flex flex-col items-center text-sm hover:text-pink-400 transition"
                    onClick={() => router.push('/Profile')}
                >
                    <User size={20} />
                    Profile
                </button>
            </div>
        ) : null
    );
};

export default Navbar;
