import Image from "next/image";
import logo from "@/public/photos/logo-img.png";
import Link from "next/link";
import NavButton from "./navbutton";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between bg-white border-b-2 border-black-1 fixed w-full px-4 lg:px-40 py-4">
      <Link href='/'>
        <article className="flex items-center">
          <Image src={logo} className="h-[2.5rem] w-[2.5rem]" alt="from blush by Elsma Ramirez" />

          <div className="ml-2">
            <p className="text-[1rem] leading-none font-semibold ">Mai</p>
            <p className="text-[.8rem] leading-none">Brunch</p>
          </div>
        </article>
      </Link>

      <div className="flex items-center">
        <Link href='#menu' className='mr-8'>
          <p className='font-bold uppercase text-[0.8rem]'>Menu</p>
        </Link>
        <NavButton name='Reserve a table' color='green' sectionLink="#reserve" />
      </div>

    </nav>
  )
}

export default TopNav