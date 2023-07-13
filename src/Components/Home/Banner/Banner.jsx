import React from 'react';
import logo from '../../../../public/assets/images/fmibx93p785ldw063amhkzmfyti2 (1).png';
import apkFile from '../../../../src/assets/BhojanMitra.apk'

const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = apkFile;
    link.download = 'app.apk';
    link.click();
  };
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
                <div>
                  <h2 className="mb-3 text-2xl sm:text-2xl font-bold md:leading-tight text-black-100 text-center">
                    Download Bhojan Mitra!
                  </h2>
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <div className="mb-2 w-fit relative">
                      <img
                        className="h-10 sm:h-12 mx-auto object-contain"
                        src={logo}
                        alt="navbar-logo"
                      />
                    </div>
                    <p className="font-bold text-2xl sm:text-3xl text-black-100">
                      Bhojan Mitra
                    </p>
                  </div>

                  <button
                    className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition 
                    w-full max-w-md bg-orange-200 mb-5"
                  >
                    <a href='https://doc-08-ag-docs.googleusercontent.com/docs/securesc/hm99h9bo5q9a0rensg6obb6d0j7a130b/ta2gmegp4381v1hs01qc211lfi1tcdod/1689233250000/16055646127569266571/01196853328180328537/1PGD5dF3_PSsQ1IA_VEFsGKlS6whGtn8i?e=download&ax=AGtFMPXbKRfIBNC8FQhdUbGrOSzgf-CnjAups_rMJSanLswO8L5uK4jhXXcQ37FNJ6n5JAT6nvIJLBy25nem8WJCLXhK6Po5gsk4sq4immQYSBbZlznRhR1sKnPbxLN-66vtvnxe9bZ86iPlN41TKUGPMhcarIm9Z8CJfJCUrzDOygl3Li8l9y0LQyBNm7jzuYYNPaANGz-29Yrxc-FMytpo5N7iEJ2PaxPawNGkzQFn_jKwU6_571obKto9PU6rzHS6we42rYmEtsxCp2XvIvbQhHs4hGpJCiSDoPeEMC03If13RZ7-k5AhOd2N4xQLBuGCPlabW3hRHDBihSijkkejYQlNGzAdGDqZcSlgOmRqKx1ajk-aqvU9fyCys08WgIW2F99PKWJ0rOXBwsQjiSUdt30U1wDnMeE2W_j5f-H8gzWHquMVCv9wQt3alWCN8aar8YSbET4wOmeoRsBrEIQnozsbqmha1uF3efgotrFAHgnzsreYpQa_xlrPZrRJ0mP6WUwb8gkwjxN-0_1-z8HVPjAb8lZmEkC0aE7AB6ZkHDk9I4fFVEfiDFgxAaY4ARDQ1_Z_FxEi6H99xNs1NVyjhsZDGr1mIGISrsOto1l_IqBqx-SAgr4asFJtbvMNzXqwa4qLa-UTS_uQGJjTCIprj8tnHfgueXsG62vLXHWxBdf31sKNlJKcNBnhs2Q_AQCxCH29dM2bl8nQJJCPxb2xNm5cpYE7cp6TkBVy9BB3hTWyz10BvzXFkVSEJCKgMqExm6vmQNjXr6nz2Kjk9Z6lP_xDrUJJDlhMJLr9zqVMqkz_RWEi6mrVG86mxcY-L-Etcj3SN2zOSbaRceQviHpnL3HA_rJCIb1UHhHyS6f88tQs9dPVIM9EmNV6Z0yQrTyJxA9h1EmjEOaR2I-E5A5qHJbUXkcm4CkyMYPGwc2Pukvf6sczouw1QYI6CKRbBeNEbJp2hw&uuid=38dbbd4c-59f1-46d9-9487-29cd18285396&authuser=0&nonce=2515urbc7fj6u&user=01196853328180328537&hash=itj0i5hi4jqdu9lrsujk98913nonrg59' download>
                      Download Now.
                    </a>
                  </button>
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
