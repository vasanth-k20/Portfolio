import React from 'react'

export const Home = () => {
    return (
        <div class="flex flex-col justify-center items-center min-h-screen px-6 text-center">
            <div class="flex justify-center mb-10">
                <img src="/IMG_0447.jpg" alt="Vasanth" class="h-[20em] w-[20em] rounded-full object-cover" />
            </div>

            <h6 class="font-medium text-gray-600 text-4xl md:text-6xl uppercase mb-6">
                Vasanth
            </h6>

            <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-tight mb-6">
                Junior FullStack Developer
            </h1>

            <p class="font-normal text-gray-600 text-md md:text-xl max-w-3xl mb-12">
                I have a passion for software. I enjoy creating tools that make life easier for people.
            </p>

            <div class="mt-4">
                <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer"
                    class="px-8 py-4 md:px-10 md:py-5 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm md:text-lg 
            rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
                    Get my CV
                </a>
            </div>
        </div>
    )
}