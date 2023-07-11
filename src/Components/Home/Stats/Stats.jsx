import React, { useEffect } from 'react';

const Stats = () => {

    useEffect(() => {
        const counterNum = document.querySelectorAll('.number')
        // console.log(counterNum)
        const speed = 5;
        counterNum.forEach((element) => {
            const updateNumber = () => {
                const targetNumber = parseInt(element.dataset.number)
                // console.log(targetNumber)
                const initialNumber = parseInt(element.innerText);
                const incrementNumber = Math.trunc(targetNumber / speed)
                // console.log(incrementNumber)
                if (initialNumber < targetNumber) {
                    element.innerText = `${initialNumber + incrementNumber}+`;
                    setTimeout(updateNumber, 1000)
                }
            }
            updateNumber()
        })
    }, [])

    return (
        <div>
            <section className="px-5 py-10">
                <div>
                    <h1 className="text-black-100 text-4xl sm:text-5xl md:text-7xl font-bold md:leading-none text-center mb-5">
                        Application Status!
                    </h1>
                </div>
                <div className='p-10' style={{
                    background: "linear-gradient(70deg, rgba(204, 249, 22, 0.3) 40%, rgba(249, 115, 22, 0.24) 100%)",
                }}>
                    <div className='flex items-center justify-center flex-col sm:flex-row xl:justify-between gap-5 flex-wrap font-popins w-full max-w-7xl mx-auto'>
                        <div className='flex items-center justify-center flex-col'>
                            <h3 data-number='25' className='font-bold text-black-100 text-5xl number'>
                                0+
                            </h3>
                            <p className='font-bold text-black-100 lg:text-5xl md:text-4xl'>
                                Food Donors
                            </p>
                        </div>
                        <div className='flex items-center justify-center flex-col order-3'>
                            <h3 data-number='10' className='font-bold text-black-100 text-5xl number'>
                                0+
                            </h3>
                            <p className='font-bold text-black-100 lg:text-5xl md:text-4xl'>
                                Food Needy
                            </p>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <h3 data-number='20' className='font-bold text-black-100 text-5xl number'>
                                0+
                            </h3>
                            <p className='font-bold text-black-100 lg:text-5xl md:text-4xl'>
                                No. Of Volunteers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;