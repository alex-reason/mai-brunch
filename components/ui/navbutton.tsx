import Link from 'next/link'
import React from 'react'

interface NavButtonProps {
    sectionLink: string,
    name: string,
    color: string,
};

const NavButton = ({ sectionLink, name, color }: NavButtonProps) => {
    const buttonStyle = color ==='green' ? 'bg-primary text-white-1' : 'bg-white-1 text-black-1 border-[1px] border-black-2'
    return (
        <Link href={sectionLink} className={`px-[1rem] py-[.8rem] rounded-md shadow-sm hover:-translate-y-[.1rem] ${buttonStyle}`}>
           <p className='font-bold uppercase text-[0.8rem]'>{name}</p> 
        </Link>
    )
}

export default NavButton