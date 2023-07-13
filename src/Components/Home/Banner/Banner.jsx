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
                    onClick={handleDownload}
                    className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition 
                    w-full max-w-md bg-orange-200 mb-5"
                  >
                    {/* <a href='https://doc-08-ag-docs.googleusercontent.com/docs/securesc/hm99h9bo5q9a0rensg6obb6d0j7a130b/kse1aq80ou452l4e0ur3si9pt9co7kut/1689238425000/16055646127569266571/01196853328180328537/1PGD5dF3_PSsQ1IA_VEFsGKlS6whGtn8i?e=download&ax=AGtFMPXxGcFIQjjXLNMwmb8bDOvm_UTLppos3dB8ghXPy1gaM2qks2L0u8WppW0xwJ0TJjmSw-nX8c5URQuFps5ickB5cCWaq39_--M74iQGNBiQ13HTqUHa15JioWoUDR79vv99bcSXgsIFblhj3kBIj20w4U-1KIQ9TiSeTbqQYvOxApbkVmifPDUluGA-9twtjc9Hf8z85LIUv6Gdxjg0312MjEo0P6B5rymLE3-mwY0mtKzXGACijVq2pb9xxUjzoTt-lVZdDe9jqm5o-c-s1plO9xfosom49VdneJjYLcFVGpetP5iqvD-WKS_ctCI25qWc9_IgN6vGwxEoDA1d8KWlkmHBZ4tO8j-23tXD5eoL6czLWOaArehXMOSqNf6S7VpxvFUKJdVf1rdjc9Vvyp-IWbdY159QnnDUOf4Bc2o6HEVCuVxOW5jIAXO9AaBq9YiL5ctGg92OP2XY3lnJ2O4B87I4sNpD012NCvEW4aEv40a7hEyEPMxdKHlVlyzLQ0PYAV-4vcE5lm6ZrF3HntwW17lQrAdrez93DRehLLZOnwHUc6Mh9ziwxy8xhl_8jkCNeVsT2UO69D59zHqmEpwRFwRezXvGXydPoyRywDyQH1GRXaOEhviHm6BFJy69C97rRYqYHSY5QWXyczgvYTkKO-Z6cNptID-Gpc8XWmBDCzILcb1sSdkwVYVNKqGo2jz137aRN2L7861BtVkn2eMCwdMm1Aa7uTyp2UtqqBor0TK71YqvtrsVryEKvIzvABbVh4lFGYJLyMIE-TWrs1h4bv3yhm8EpISFhrVbk_bfdB8UN15sDuTfatIwurs7fnhcNj_oUI7MX-zKGFp_H-enhuIKt070JfHUyPwKfApNs-4gfgqBj5vJdeU4L2Wzz42X5zLzfyxQdnWlvp6qJnX64lmBxF4CgvbqxPTBfdaXLUgWoXi0YzwzPwid7Iwx2afnLw&uuid=547fcba5-7891-4c55-95fe-c545e4e7738c&authuser=0&nonce=13q9glllrkoeu&user=01196853328180328537&hash=qo6e60ni7h14v1i6clb19o8t73briul5' download>
                      Download Now.
                    </a> */}
                    Download Now.
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
