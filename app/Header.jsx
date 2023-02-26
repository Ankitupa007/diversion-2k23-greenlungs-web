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
                    <div className="flex items-center justify-between py-3 md:py-5 rounded-lg">
                        <Link href="/">
                            <Image src={"/logo/logo.svg"} className="max-w-full h-auto rounded-lg" width={150} height={60} />
                        </Link>
                    </div>
                </div>

                <div>

                    <div class="flex items-center justify-between py-3 md:py-5">
                        <Link href="/" class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <FaGooglePlay />
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="title-font font-medium">Google Play</span>
                            </span>
                        </Link>

                    </div>

                </div>
            </div>

        </nav>
    )
}