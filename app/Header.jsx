'use client'
import Link from "next/link";
import { useState } from "react"
import Image from "next/image";
import { FaGooglePlay } from 'react-icons/fa'
export default function Header() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white backdrop-blur-sm shadow z-10 fixed">
            <div className="flex justify-between px-10 mx-auto py-4 lg:max-w-7xl md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 rounded-lg mt-2">
                        <Link href="/">
                            <Image src={"/logo/logo.svg"} className="max-w-full h-auto rounded-lg" width={150} height={60} />
                        </Link>
                    </div>
                </div>

                <div>

                    <div class="flex items-center justify-between py-3 md:py-5">
                        <Link href="/" class=" inline-flex py-3 px-5 rounded-lg items-center hover:text-green-500 focus:outline-none">
                            <FaGooglePlay className="text-2xl" />
                        </Link>

                    </div>

                </div>
            </div>

        </nav>
    )
}