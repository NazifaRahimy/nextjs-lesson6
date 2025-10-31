"use client"
import Link from "next/link"
import { IoMdArrowBack } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

export default function NavBar (){
    const pathname = usePathname();
    const router = useRouter()
    const navLink =[
        {id: 1, name: "Home", href: "/"},
        {id: 2, name: "Product", href: "/Prodcut"},
        {id: 3, name: "About", href: "/About"},
        {id: 4, name: "Login", href: "/Login"},
    ]
    return (
        <div className="w-[98%] bg-black  py-2 mx-auto rounded-md flex items-center justify-between text-gray-100 px-10  ">
            <div className="flex gap-4">
                 <button onClick={()=> router.back()} className="px-3 "> <IoMdArrowBack size={25} /></button>
                 <button onClick={()=> router.forward()} className="px-3 ">< HiOutlineArrowSmallRight size={25}/></button>
            </div>
            <nav className="w-full flex items-center justify-center gap-12">
               {
                navLink.map((link) =>(
                      <Link className={` ${pathname === link.href ? "text-cyan-400" :"text-gray-50"}`} href={link.href} key={link.id} > {link.name} </Link>
                ))
               }
            </nav>
            <Link href='/Contact' className=" px-4 py-2 flex justify-center hover:bg-cyan-400 duration-200 transition-all gap-3 items-center w-[180px] bg-[#25b8cb] rounded-full text-[#181144]"><span>Talk to Us</span> < HiOutlineArrowSmallRight/></Link>
        </div>
    )
}