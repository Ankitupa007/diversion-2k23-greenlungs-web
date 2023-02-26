import Image from "next/image";
import Link from "next/link";
function Landing() {
    return (
        <div>
            <section>
                <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-32">
                    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                        <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                            <div>
                                <div class="relative w-full max-w-lg">
                                    <div class="absolute top-0 rounded-full  -left-4 w-72 h-72 mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>

                                    <div class="absolute rounded-full  -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                    <div class="relative">
                                        <div className="object-cover object-center mx-auto rounded-lg ">
                                            <Image alt="hero" src="/images/hero.svg" width={400} height={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                            <span class="mb-8 text-xs font-bold tracking-widest text-green-400 uppercase"> </span>
                            <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Join and organize plantation events in your city</h1>
                            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">Uplift your volunteering towards environment and plants</p>
                            <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                                <div class="mt-3 rounded-lg sm:mt-0">
                                    <Link href="https://drive.google.com/file/d/1Nzlt4ss4cmq-7jcxx5tJDaSQgzVUS8S6/view?usp=sharing" target="_blank" className="text-green-500">
                                        Donwload App
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Landing;