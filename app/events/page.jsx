import Link from "next/link";
import Image from "next/image";
import { NEXT_URL } from "file location"
import { BsFillPinMapFill } from "react-icons/bs";
import { CgOrganisation } from 'react-icons/cg'
import { BsCalendarDay } from 'react-icons/bs'
import { MdOutlineDescription } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdPeople } from 'react-icons/md'
import { TbTrees } from 'react-icons/tb'
import { FiPhoneCall } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'

async function EventDetail() {
    // const { eventID } = searchParams
    const URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3005'
    let events = await fetch(`${URL}/api/database`, {
        "cache": "no-store"
    })
    const data = await events.json()
    // const data = data.find(id => id.$id === eventID)
    // console.log(data)
    console.log(data)

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="rounded-lg h-auto overflow-hidden flex justify-center">
                    <div className="object-cover object-center ">
                        <Image alt="content" src="https://dummyimage.com/600x400" width={600} height={400} loading="lazy" />
                    </div>
                </div>
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-wrap w-full mb-20 mt-10 flex-col items-center text-center">

                        <h2 class="text-xs text-green-500 tracking-widest font-bold title-font mb-1">{data.status}</h2>
                        <h1 className="sm:text-6xl text-3xl font-medium title-font mb-2 text-gray-900">{data.name}</h1>
                        <div>

                        </div>
                    </div>


                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="lg:w-1/3 md:w-1/3 p-4 w-1/2 ">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 text-6xl">
                                <BsFillPinMapFill />
                            </div>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Location</h3> */}
                                <h2 class="text-gray-900 title-font text-lg font-medium">Location</h2>
                                <p class="mt-1"><Link target="_blank" href={`https://maps.google.com/?q=${data.lat},${data.log}`} className="text-green-500">See on map</Link></p>
                            </div >
                        </div >
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-1/2 ">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                <CgOrganisation />
                            </div>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                                <h2 class="text-gray-900 title-font text-lg font-medium">Organization</h2>
                                <p class="mt-1">{data.organizer.organization}</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-1/2">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                <BsCalendarDay />
                            </div>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                                <h2 class="text-gray-900 title-font text-lg font-medium">Event Date</h2>
                                <p class="mt-1">{data.start_date} - {data.end_date}</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-1/2">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                <AiOutlineClockCircle />
                            </div>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Time</h2>
                                <p class="mt-1">{data.time}</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-1/2">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                <MdPeople />
                            </div>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p class="mt-1">{data.volunteers_count} people are planting trees</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-1/2">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                <TbTrees />
                            </div>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p class="mt-1">{data.tree_planted} trees planted till now</p>
                            </div>
                        </div>
                    </div >
                    <div className="flex flex-wrap w-full mb-20 mt-20 flex-col items-center text-center">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                            <MdOutlineDescription />
                        </div>
                        <h2 class="text-gray-500 text-2xl title-font py-5">Event description</h2>
                        <p className="lg:w-full w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet fuga consectetur. Veritatis harum debitis, nam, id sunt eos eius, possimus impedit tempore consectetur corrupti ut quibusdam deserunt voluptatem asperiores.</p>
                    </div>

                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                                <div class="sm:w-1/2 mb-10 px-4 w-full">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl">
                                        <FiPhoneCall />
                                    </div>
                                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Call Organizer</h2>
                                    <p class="leading-relaxed text-base">{data.organizer.contact}</p>
                                    <div className="py-5">
                                        <Link href={`tel:${data.organizer.contact}`} class="text-green-500">Call</Link>
                                    </div>

                                </div>
                                <div class="sm:w-1/2 mb-10 px-4 w-full">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4 text-6xl    ">
                                        <MdAlternateEmail />
                                    </div>
                                    <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Email Organizer</h2>
                                    <p class="leading-relaxed text-base">{data.organizer.email}</p>
                                    <div className="py-5">
                                        <Link href={`mailto:${data.organizer.email}`} class="text-green-500">Email</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </section >
    )
}
export default EventDetail


