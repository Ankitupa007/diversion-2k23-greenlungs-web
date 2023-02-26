'use client'
import Link from "next/link";
import { useState } from "react"
import Image from "next/image";
import { FaGooglePlay } from 'react-icons/fa'
export default function Header() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white shadow backdrop-blur-sm z-10 fixed">
            <div className="justify-between px-10 mx-auto py-5 lg:max-w-7xl md:items-center md:flex md:px-8">
                {/* Logo */}
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <Image src={"/logo/logo.svg"} className="max-w-full h-auto" width={150} height={60} />
                        </Link>
                        {/* <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div> */}
                    </div>
                </div>
                {/* Nav links */}
                <div>
                    {/* ${navbar ? "block" : "hidden"} */}
                    <div className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 `}>
                        <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <FaGooglePlay />
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                                    <span class="title-font font-medium">Google Play</span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}