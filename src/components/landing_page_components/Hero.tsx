import React from 'react';
import HeroImg from '../../assets/img/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid w-full px-4 lg:px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto lg:pl-4 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 tracking-tight leading-none text-5xl md:text-5xl xl:text-6xl text-white">
            Schedule,<br />
            Make Payments, & <br />
            Send invoice to <br />
            your customers.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl text-gray-100">
            Efficiently and professionally run your business and with your clients eliminating the complaints of your customers so you can go back to work.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-full font-bold bg-primary-700 hover:bg-[#F68537] focus:ring-4 bg-[#F68537]">
            Get started now
          </a>
        </div>
        <div className="relative hidden lg:flex lg:col-span-5 items-end">
          <img src={HeroImg} alt="mockup" className="w-full h-auto" />
          <span className="blur-header"></span>
        </div>
      </div>
    
    </section>
  );
}

export default Hero;
