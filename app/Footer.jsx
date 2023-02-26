'use client'
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share'
export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer class="text-gray-600 body-font mb-0 z-20">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-center text-gray-900">
                    <Link href="/">
                        <Image src={"/logo/logo.svg"} width={150} height={60} />
                    </Link>

                </div>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {date} All rights reserved —
                    <a href="https://greenlungs.co" class="text-green-600 ml-1" rel="noopener noreferrer" target="_blank">greenlungs</a>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <FacebookShareButton
                        url={'https://www.greenlungs.co'}
                        quote={'I joined an event on greenlungs'}
                        hashtag="#muo" className="text-gray-500"
                    >
                        <FaFacebookF />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={'https://www.greenlungs.co'}
                        quote={'I joined an event on greenlungs'}
                        hashtag="#muo" className="text-gray-500 ml-3"
                    >
                        <FaTwitter />
                    </TwitterShareButton>
                    <LinkedinShareButton
                        url={'https://www.greenlungs.co'}
                        quote={'I joined an event on greenlungs'}
                        hashtag="#muo" className="text-gray-500 ml-3"
                    >
                        <FaLinkedinIn />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                        url={'https://www.greenlungs.co'}
                        quote={'I joined an event on greenlungs'}
                        hashtag="#muo" className="text-gray-500 ml-3"
                    >
                        <FaWhatsapp />
                    </WhatsappShareButton>
                </span>
            </div>
        </footer>
    )
}
