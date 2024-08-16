import Logo from '../../assets/img/Mechdly logo 3.png';
import { Divider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
const Footer = () => {

  const footerNavs = [
    {
        label: "Company",
        items: [
            {
                href: 'javascript:void()',
                name: 'About us'
            },
            {
                href: 'javascript:void()',
                name: 'Partners & Affiliates'
            },
         
           
        ],
    },
    {
        label: "Products",
        items: [
            {
                href: 'javascript:void()',
                name: 'How it works'
            },
            {
                href: 'javascript:void()',
                name: 'Features'
            },
            {
                href: 'javascript:void()',
                name: 'Pricing'
            },
           
        ],
    },
    {
        label: "Support",
        items: [
            {
                href: 'javascript:void()',
                name: 'Contact us'
            },
            {
                href: 'javascript:void()',
                name: 'FAQs'
            },
            {
                href: 'javascript:void()',
                name: 'Privacy'
            },
            {
                href: 'javascript:void()',
                name: 'Terms'
            },
        ]
    }
]
  return (
    <div>
       <footer className="bg-[#030100] pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex">
                    <div className="flex-1 max-w-lg">
                    <a href="javascript:void(0)">
                        <img
                            src={Logo}
                            width={120}
                            height={50}
                            alt="Mechly UI logo"
                        />
                    </a>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                            <div className="relative text-xl lg:text-2xl text-white">
                                
                                Ready for your setup?
                            </div>
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-full font-bold bg-primary-700 hover:bg-[#F68537] focus:ring-4 bg-[#F68537]">
                              Get started
                            </a>
                        </form>
                    </div>
                </div>
                <Box className='py-4'>
                   <Divider color={'#FFD282'}/>
                </Box>
                <div className="gap-6 justify-between md:flex">
                 <div className="flex-1">
                  <div className="max-w-xs">
                      <p className="leading-relaxed mt-2 text-xl lg:text-4xl font-semibold text-white">
                      Subscribe to
                      our newsletter!
                      </p>
                  </div>
                  <form 
                      onSubmit={(e) => e.preventDefault()}
                      className='mt-6'
                  >
                    
                      <div className="max-w-sm flex  items-center border border-[#F69E61] rounded-full p-0">
                          <input 
                              type="email"
                              placeholder="Email address"
                              className="w-full p-2.5 pl-6 bg-transparent text-white outline-none"
                          />
                          <button
                              className="p-2.5 rounded-full text-black font-semibold whitespace-nowrap bg-[#F68537] outline-none shadow-md focus:shadow-none sm:px-5"
                          >
                              Sign up
                          </button>
                      </div>
                  </form>
              </div>
             <div className="flex flex-col-reverse md:flex-row md:justify-end">
          <div className="flex-1 md:flex md:justify-end space-y-6 md:space-x-12 md:space-y-0">
            {
                footerNavs.map((item, idx) => (
                  <div className="flex-1" key={idx}>
                    <h4 className="text-white text-xl font-medium">
                      {item.label}
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {
                        item.items.map((el, idx) => (
                          <li key={idx}>
                            <a 
                              href={el.href}
                              className="hover:underline text-gray-300 hover:text-[#F68537]"
                            >
                              {el.name}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
          </div>
          <div className="mt-8 py-6  items-center justify-between sm:flex">
          <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                      <li className="  flex items-center justify-center">
                          <a href="javascript:void()">
                              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 1.00005C22.0424 1.67552 20.9821 2.19216 19.86 2.53005C19.2577 1.83756 18.4573 1.34674 17.567 1.12397C16.6767 0.901206 15.7395 0.957242 14.8821 1.2845C14.0247 1.61176 13.2884 2.19445 12.773 2.95376C12.2575 3.71308 11.9877 4.61238 12 5.53005V6.53005C10.2426 6.57561 8.50127 6.18586 6.93101 5.39549C5.36074 4.60513 4.01032 3.43868 3 2.00005C3 2.00005 -1 11 8 15C5.94053 16.398 3.48716 17.099 1 17C10 22 21 17 21 5.50005C20.9991 5.2215 20.9723 4.94364 20.92 4.67005C21.9406 3.66354 22.6608 2.39276 23 1.00005V1.00005Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          </a>
                      </li>

                      <li className="  flex items-center justify-center">
                          <a href="javascript:void()">
                          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          </a>
                      </li>

                      <li className=" flex items-center justify-center">
                          <a href="javascript:void()">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4078 15.906C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1903 8.22773 13.4229 8.09406 12.5923C7.9604 11.7616 8.09206 10.91 8.47032 10.1584C8.84858 9.40691 9.45418 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          </a>
                      </li>

                      <li className="  flex items-center justify-center">
                          <a href="javascript:void()">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9H2V21H6V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          </a>
                      </li>
                  </ul>
              </div>
              <div className="mt-4 sm:mt-0 text-white">
                  &copy; 2024. FixBot Technologies Limited. All Rights Reserved.
              </div>
              
          </div>
                </div>
                
                </footer>
    </div>
  )
}

export default Footer


