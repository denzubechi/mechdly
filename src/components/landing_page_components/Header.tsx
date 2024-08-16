import { useEffect, useState } from 'react';
import Logo from '../../assets/img/Mechdly logo 3.png';
import Hero from './Hero';

export default () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img
                    src={Logo}
                    width={120}
                    height={50}
                    alt="Float UI logo"
                />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-500 hover:text-gray-800 z-50 relative"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className='relative overflow-hidden'>
            {/* Background overlay */}
            <div className='absolute inset-0 bg-black'></div>
            
            {/* Main content */}
            <div className='relative z-10'>
                <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                        <Brand />
                    </div>
                    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-black shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent z-50" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    {/* Add navigation items here */}
                                </ul>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                    <div className="flex gap-2">
                                        <a href="#" className="inline-flex items-center justify-center px-8 py-2.5 text-base font-medium text-center text-white rounded-full font-bold border border-[#F68537] hover:bg-[#F68537] focus:ring-4 bg-[#321A09]">
                                            Log in
                                        </a>
                                        <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-black rounded-full font-bold bg-primary-700 hover:bg-[#F68537] focus:ring-4 bg-[#F68537]">
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                
                <section>
                    <div className="max-w-screen-xl mx-auto overflow-hidden md:flex">
                        <Hero />
                    </div>
                </section>
            </div>

            {/* Fill effect at the extreme right end */}
            <div className="absolute right-[-100px] top-[30px] h-80  lg:h-96 lg:w-46 bg-[#F68537] rounded-full blur-[100px] z-0"></div>
        </div>
    );
};
