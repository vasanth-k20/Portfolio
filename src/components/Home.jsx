import React from 'react'

export const Home = () => {
    return (
        <section id="home" class="flex flex-col justify-center items-center min-h-screen px-6 text-center">
            <div class="flex justify-center mt-20 mb-10">
                <img src="/aboutgif.gif" alt="Vasanth" class="h-[20em] w-[20em] rounded-full object-cover border-2" />
            </div>

            <h6 className="font-style italic text-4xl md:text-6xl text-gray-800 tracking-wide mb-6">
                Hi 👋 I'm <span className="not-italic bg-gradient-to-r from-gray-600 to-gray-900 text-transparent bg-clip-text">Vasanth</span>
            </h6>

            <h1 class="font-style italic text-gray-900 text-4xl md:text-7xl leading-tight mb-6">
                Junior FullStack Developer
            </h1>

            <p class="font-style italic text-gray-600 text-md md:text-xl max-w-3xl mb-12">
                I have a passion for software. I enjoy creating tools that make life easier for people.
            </p>

            <div className="mt-4">
                <a
                    href="https://your-resume-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm md:text-lg 
               rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 14.586V4a1 1 0 011-1zM5 20a1 1 0 100-2h14a1 1 0 100 2H5z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Get my CV
                </a>
            </div>

        </section>
    )
}