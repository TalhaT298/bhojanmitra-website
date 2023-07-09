import React from 'react';

const Banner = () => {
    return (
        <div className='relative isolate'>
            <section className='px-5 pb-10 sm:pb-32 overflow-hidden relative' style={{
                background: 'linear-gradient(70deg, rgba(204, 249, 22, 0.2) 40%, rgba(249, 115, 22, 0.24) 100%)'
            }}>
                <div className='sm:grid-cols-5 relative isolate z-50 gap-8 lg:gap-8 max-w-7xl py-12 sm:pt-24 mx-auto grid'>
                    <div className='sm:col-span-5 font-popins'>
                        <h1 className='text-black-100 text-4xl mt-20 md:mt-40 lg:text-left sm:text-5xl md:text-7xl font-bold md:leading-none'>Bridge the Gap, Nourish with Bhojan Mitra</h1>
                    </div>
                    <div className='sm:col-span-5 md:col-start-3 md:col-span-3 xl:col-span-2 xl:col-start-4 font-popins'>
                        <div>
                            <p className='sm:leading-relaxed mb-10 text-2xl text-black-100'>
                                Connecting donors and the needy, we pave the path to a sustainable future. Let's create a greener planet, one plate at a time.
                            </p>
                        </div>
                        <div>
                            <section className='relative'>
                                <h2 className='mb-3 text-2xl sm:text-2xl font-bold md:leading-tight text-black-100'>
                                    Get notified about updates.
                                </h2>
                                <div>
                                    <form action="" className='flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap'>
                                        <input
                                            className='flex-auto rounded-lg border-0 bg-white px-6 py-4 shadow-sm ring-1 ring-black-100 ring-opacity-10 text-slate-900 text-base focus:ring-2 w-full focus:outline-none focus:ring-black-100
                                            focus:ring-opacity-10 sm:text-xl sm:leading-6'
                                            type="email"
                                            placeholder='Enter Your Email'
                                            name="email" id="email" />
                                        <input
                                            className='rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white bg-orange-200'
                                            type="submit" value="Notify me." />
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <div className='[&>*]:mb-12 [&>*]:-z-10 [&>*]:absolute [&>*]:-left-20 [&>*]:top-0 [&>*]:mx-auto [&>*]:text-white [&>*]:md:h-[100%] mix-blend-plus-lighter [&>*]:lg:opacity-50'>
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_103_17)">
                            <path d="M97.8118 1.84638C98.2359 -0.615472 101.764 -0.615455 102.188 1.8464L106.863 28.9805C107.236 31.1438 110.179 31.5163 111.077 29.5138L122.339 4.39701C123.361 2.11817 126.778 2.99725 126.578 5.48745L124.371 32.9338C124.195 35.1221 126.953 36.2162 128.32 34.5003L145.463 12.9789C147.018 11.0263 150.11 12.7293 149.298 15.0913L140.348 41.1255C139.634 43.2011 142.034 44.9481 143.784 43.6267L165.73 27.053C167.721 25.5493 170.293 27.9691 168.92 30.0546L153.789 53.0407C152.583 54.8733 154.474 57.1634 156.497 56.3195L181.867 45.7349C184.169 44.7746 186.06 47.7592 184.212 49.4371L163.851 67.9308C162.228 69.4053 163.491 72.0946 165.66 71.7812L192.86 67.8507C195.328 67.4941 196.419 70.8561 194.213 72.021L169.901 84.8603C167.963 85.8839 168.519 88.8034 170.697 89.0403L198.019 92.0109C200.498 92.2805 200.719 95.8084 198.294 96.3871L171.559 102.765C169.427 103.274 169.241 106.24 171.292 107.012L197.018 116.697C199.352 117.576 198.691 121.048 196.198 121.005L168.72 120.521C166.529 120.482 165.613 123.309 167.408 124.568L189.922 140.359C191.964 141.792 190.462 144.99 188.058 144.326L161.564 137.011C159.451 136.428 157.862 138.937 159.288 140.604L177.175 161.509C178.798 163.406 176.549 166.129 174.385 164.887L150.539 151.2C148.637 150.109 146.475 152.144 147.443 154.113L159.579 178.818C160.68 181.06 157.826 183.137 156.039 181.396L136.338 162.197C134.768 160.666 132.168 162.098 132.617 164.247L138.24 191.199C138.75 193.645 135.469 194.946 134.171 192.814L119.855 169.309C118.713 167.435 115.84 168.174 115.741 170.367L114.497 197.875C114.385 200.37 110.884 200.813 110.156 198.424L102.124 172.091C101.483 169.992 98.5168 169.992 97.8764 172.091L89.8444 198.424C89.1156 200.813 85.6154 200.37 85.5025 197.875L84.259 170.367C84.1599 168.174 81.2866 167.435 80.1453 169.309L65.8294 192.814C64.5305 194.946 61.2502 193.645 61.7604 191.199L67.3835 164.247C67.8318 162.098 65.2323 160.666 63.6617 162.197L43.9615 181.396C42.1741 183.137 39.3198 181.06 40.421 178.818L52.5574 154.113C53.525 152.144 51.3625 150.109 49.4613 151.2L25.6147 164.887C23.4511 166.129 21.2022 163.406 22.8251 161.509L40.7123 140.604C42.1384 138.937 40.5488 136.428 38.4365 137.011L11.9418 144.326C9.53794 144.99 8.03576 141.792 10.0784 140.359L32.5924 124.568C34.3874 123.309 33.4707 120.482 31.28 120.521L3.80194 121.005C1.30888 121.048 0.647761 117.576 2.98188 116.697L28.708 107.012C30.7591 106.24 30.5728 103.274 28.4413 102.765L1.7065 96.3871C-0.719138 95.8084 -0.497588 92.2805 1.98131 92.0109L29.3032 89.0403C31.4815 88.8034 32.0373 85.8839 30.099 84.8603L5.78724 72.021C3.58145 70.856 4.67171 67.4941 7.13963 67.8507L34.3405 71.7812C36.5091 72.0946 37.7722 69.4053 36.1488 67.9308L15.7877 49.4371C13.9404 47.7592 15.8308 44.7746 18.1327 45.7349L43.5034 56.3195C45.5262 57.1634 47.417 54.8733 46.2107 53.0407L31.0796 30.0546C29.7067 27.9691 32.2786 25.5493 34.2698 27.053L56.2162 43.6267C57.966 44.9481 60.3658 43.2011 59.6523 41.1255L50.7019 15.0913C49.8899 12.7293 52.9816 11.0263 54.537 12.9789L71.6801 34.5003C73.0469 36.2162 75.805 35.122 75.6291 32.9338L73.4219 5.48743C73.2216 2.99724 76.6389 2.11816 77.6607 4.39699L88.9235 29.5138C89.8214 31.5163 92.7645 31.1438 93.1372 28.9805L97.8118 1.84638Z" fill="url(#paint0_linear_103_17)"></path>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_103_17" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0509862" stopColor="rgba(249, 22, 41, 0.2)"></stop>
                                <stop offset="1" stopColor="rgba(204, 249, 22, 0.2)"></stop>
                            </linearGradient>
                            <clipPath id="clip0_103_17">
                                <rect width="200" height="200" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Banner;