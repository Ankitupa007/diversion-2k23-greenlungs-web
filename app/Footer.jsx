'use client'
import Link from "next/link"
import Image from "next/image"
export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer className="text-gray-600 body-font absolute w-full z-20 mb-0">
            <div className="flex flex-col justify-center px-3 py-16 mx-auto lg:max-w-7xl">
                <div className="flex title-font font-medium items-center md:justify-center text-gray-900">
                    <Link href="/">
                        <Image src={"/logo/logo.svg"} width={150} height={60} />
                    </Link>

                </div>
                <div className="flex title-font font-medium items-center md:justify-center text-gray-900 mt-10">
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©{date} All Rights Reserved |
                        <Link href="" className="text-green-600 ml-1" rel="noopener noreferrer" target="_blank">greenlungs.co</Link>
                    </p>
                </div>

            </div>
        </footer>
    )
}
