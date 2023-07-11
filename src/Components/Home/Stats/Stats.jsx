import React, { useEffect, useRef } from 'react';

const Stats = () => {
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            handleIntersection(entries)
        }, {
            root: null, // Use the viewport as the root element
            threshold: 1, // Trigger when 50% of the component is visible
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const speed = 5;
                const counterNum = document.querySelectorAll('.number')
                counterNum?.forEach((element) => {
                    const updateNumber = () => {
                        const targetNumber = parseInt(element.dataset.number);
                        const initialNumber = parseInt(element.innerText);
                        const incrementNumber = Math.trunc(targetNumber / speed);
                        if (initialNumber < targetNumber) {
                            element.innerText = `${initialNumber + incrementNumber}+`;
                            setTimeout(updateNumber, 1000);
                        }
                    };
                    updateNumber();
                });
            }
        });
    };

    // useEffect(() => {

    // const counterNum = document.querySelectorAll('.number')
    // // console.log(counterNum)
    // const speed = 5;
    // counterNum.forEach((element) => {
    //     const updateNumber = () => {
    //         const targetNumber = parseInt(element.dataset.number)
    //         // console.log(targetNumber)
    //         const initialNumber = parseInt(element.innerText);
    //         const incrementNumber = Math.trunc(targetNumber / speed)
    //         // console.log(incrementNumber)
    //         if (initialNumber < targetNumber) {
    //             element.innerText = `${initialNumber + incrementNumber}+`;
    //             setTimeout(updateNumber, 1000)
    //         }
    //     }
    //     updateNumber()
    // })
    // }, [])

    return (
        <div ref={statsRef}>
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