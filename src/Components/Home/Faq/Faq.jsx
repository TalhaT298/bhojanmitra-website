import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className='pb-8 px-5 py-20 sm:py-32'>
                <div className='grid lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto font-popins'>
                    <div>
                        <h2 className='text-3xl sticky top-6 sm:text-5xl md:leading-tight sm:mb-4 font-bold text-black-100'>Frequently Asked Questions</h2>
                    </div>
                    <div className='lg:col-span-2 flex flex-col gap-8 mx-auto font-popins'>
                        <div className='bg-slate-50 rounded-xl p-6 sm:p-10 text-left'>
                            <h3 className="text-2xl text-black-100 sm:text-3xl sm:mb-2 font-semibold">
                                How does Bhojan Mitra work?
                            </h3>
                            <p className='text-black-100 sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl'>
                                Bhojan Mitra connects food donors with individuals or organizations in need. Donors can easily upload information about excess food, and beneficiaries can request pickups.
                            </p>
                        </div>
                        <div className='bg-slate-50 rounded-xl p-6 sm:p-10 text-left'>
                            <h3 className="text-2xl text-black-100 sm:text-3xl sm:mb-2 font-semibold">
                                Can I donate cooked food?
                            </h3>
                            <p className='text-black-100 sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl'>
                                Yes, Bhojan Mitra accepts donations of cooked food as long as it is still safe and edible.
                            </p>
                        </div>
                        <div className='bg-slate-50 rounded-xl p-6 sm:p-10 text-left'>
                            <h3 className="text-2xl text-black-100 sm:text-3xl sm:mb-2 font-semibold">
                                Is Bhojan Mitra available worldwide?
                            </h3>
                            <p className='text-black-100 sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl'>
                                Currently, Bhojan Mitra is available in select cities. However, we are continuously expanding to serve more locations.
                            </p>
                        </div>
                        <div className='bg-slate-50 rounded-xl p-6 sm:p-10 text-left'>
                            <h3 className="text-2xl text-black-100 sm:text-3xl sm:mb-2 font-semibold">
                                How can I get involved?
                            </h3>
                            <p className='text-black-100 sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl'>
                                You can get involved by signing up as a donor or a beneficiary on the Bhojan Mitra app. You can also support us by spreading the word and promoting the cause of reducing food waste.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Faq;