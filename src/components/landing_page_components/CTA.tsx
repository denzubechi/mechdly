import CTAIMG from '../../assets/img/cta.png';
import CTAIMG2 from '../../assets/img/reminder.png';

const CTA = () => {
  return (
    <div>
      <div className="relative bg-black lg:mt-0">
        {/* Fill effect for the first CTA */}
        <div className="relative bg-black  pb-0 lg:pb-8 lg:mt-0">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 relative">
            <img className="w-full dark:hidden" src={CTAIMG} alt="dashboard image" />
            <img className="w-full hidden dark:block" src={CTAIMG} alt="dashboard image" />
            <div className="mt-4 md:mt-0 relative">
              <h2 className="mb-4 tracking-tight leading-none text-3xl lg:text-4xl text-white">
                Let your customers know what time is available in a day!
              </h2>
              <div className="flex">
                <div className="ml-auto">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-full font-bold bg-primary-700 hover:bg-[#F68537] focus:ring-4 bg-[#F68537]">
                    Get started now
                  </a>
                </div>
              </div>
            </div>
            {/* Fill effect on the left end of the first image */}
            <div className="absolute left-[-10rem] top-1/2 transform -translate-y-1/2 bg-[#FFD282] rounded-full filter blur-[150px] h-[12rem] w-[20rem] hidden lg:block"></div>
          </div>
        </div>

        {/* Fill effect for the second CTA */}
        <div className="relative bg-black pb-0 lg:pb-6 lg:mt-0">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 relative">
            <div className="mt-4 md:mt-0 order-2 md:order-1">
              <h2 className="mb-4 tracking-tight leading-none text-3xl lg:text-4xl text-white">
                Send reminders, SMS, and invoices to customers.
              </h2>
              <div className="flex my-0 sm:my-4">
                <div className="">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-full font-bold bg-primary-700 hover:bg-[#F68537] focus:ring-4 bg-[#F68537]">
                    Setup now
                  </a>
                </div>
              </div>
            </div>
            <img className="w-full dark:hidden order-1 md:order-2" src={CTAIMG2} alt="dashboard image" />
            <img className="w-full hidden dark:block order-1 md:order-2" src={CTAIMG2} alt="dashboard image" />
            {/* Fill effect on the right end of the second image */}
            <div className="absolute right-[-10rem] top-1/2 transform -translate-y-1/2 bg-[#FFD282] rounded-full filter blur-[150px] h-[12rem] w-[20rem] hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
