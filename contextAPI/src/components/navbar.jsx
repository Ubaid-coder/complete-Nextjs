'use client'
import {  useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

function navbar() {
    const {isDark, toggleTheme} = useTheme();
    console.log(toggleTheme)
    return (
        <header className='flex bg-slate-400 p-5 justify-center'>
            <nav>
                <ul className='flex gap-5 items-center text-xl'>
                    <li className="cursor-pointer"><Link href={'/'}>HOME</Link></li>
                    <li className="cursor-pointer"><Link href={'/about'}>ABOUT</Link></li>
                    <li className="cursor-pointer"><Link href={'/services'}>Services</Link></li>
                
                    <li onClick={() => toggleTheme(!isDark)} className="cursor-pointer">
                        {isDark ?<MdOutlineLightMode  size={50}/> :<CiDark size={50}/>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default navbar