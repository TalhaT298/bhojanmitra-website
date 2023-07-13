import React from 'react';
import logo from '../../../../public/assets/images/fmibx93p785ldw063amhkzmfyti2 (1).png';

const Banner = () => {
  return (
    <div className="relative isolate">
      <section
        className="px-5 pb-10 sm:pb-32 overflow-hidden relative"
        style={{
          background:
            'linear-gradient(70deg, rgba(204, 249, 22, 0.2) 40%, rgba(249, 115, 22, 0.24) 100%)',
        }}
      >
        <div className="sm:grid-cols-5 relative isolate z-50 gap-8 lg:gap-8 max-w-7xl py-12 sm:pt-24 mx-auto grid">
          <div className="sm:col-span-5 font-popins">
            <h1 className="text-black-100 text-4xl mt-20 md:mt-40 lg:text-left sm:text-5xl md:text-7xl font-bold md:leading-none">
              Bridge the Gap, Nourish with Bhojan Mitra
            </h1>
          </div>
          <div className="sm:col-span-5 md:col-start-3 md:col-span-3 xl:col-span-2 xl:col-start-4 font-popins">
            <div>
              <p className="sm:leading-relaxed mb-10 text-2xl text-black-100">
                Connecting donors and the needy, we pave the path to a
                sustainable future. Let's create a greener planet, one plate at
                a time.
              </p>
            </div>
            <div>
              <section className="relative">
                <div className="flex-col">
                  <h2 className="mb-3 text-2xl sm:text-2xl font-bold md:leading-tight text-black-100 text-center">
                    Download Bhojan Mitra!
                  </h2>
                  <div className="flex-col items-center justify-center mx-auto gap-2 mb-5">
                    <div className="mb-2 flex items-center justify-center mx-auto w-fit relative">
                      <img
                        className="h-10 sm:h-12 mx-auto object-contain"
                        src={logo}
                        alt="navbar-logo"
                      />
                      <p className="font-bold text-2xl text-center sm:text-3xl text-black-100">
                        Bhojan Mitra
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        className="rounded-lg py-4 whitespace-nowrap text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition 
                      w-[75%] bg-orange-200 mb-5"
                        href="/path/to/your/app.apk"
                      >
                        <a
                          href="/path/to/your/app.apk"
                          download
                          className="flex items-center justify-center"
                        >
                          Download Now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="[&>*]:mb-12 [&>*]:-z-10 [&>*]:absolute [&>*]:-left-20 [&>*]:top-0 [&>*]:mx-auto [&>*]:text-white [&>*]:md:h-[100%] mix-blend-plus-lighter [&>*]:lg:opacity-50">
          <svg
            className=""
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1124_1285)">
              <mask
                id="mask0_1124_1285"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="200"
                height="200"
              >
                <path d="M200 0H0V200H200V0Z" fill="white"></path>
              </mask>
              <g mask="url(#mask0_1124_1285)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"
                  fill="url(#paint0_linear_1124_1285)"
                ></path>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1124_1285"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgba(204, 249, 22, 0.2)"></stop>
                <stop offset="1" stopColor="rgba(249, 22, 41, 0.2)"></stop>
              </linearGradient>
              <clipPath id="clip0_1124_1285">
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
