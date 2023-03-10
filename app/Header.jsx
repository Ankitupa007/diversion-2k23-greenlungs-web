'use client'
import Link from "next/link";
import Image from "next/image";
import { FaGooglePlay } from 'react-icons/fa'
export default function Header() {
    return (
        <nav className="w-full">
            <div className="flex justify-center px-10 mx-auto py-4 lg:max-w-7xl md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 rounded-lg mt-2">
                        <Link href="">
                            <Image src={"/logo/logo.svg"} className="max-w-full h-auto rounded-lg" width={150} height={60} />
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}