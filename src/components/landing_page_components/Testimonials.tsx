import React from 'react';
import { Heading, Text, Box, Image } from '@chakra-ui/react';
import testimonialImage from '../../assets/img/TESTIMONIAL.png'; // Import the image

const Testimonials = () => {
  const testimonials = [
    { name: 'Emeka and Sons', text: 'A great platform for my business. Was not getting enough time for my customers until I was introduced to mechdly.' },
    { name: 'Sam Automobile', text: 'Everything is organized now, clients are happy and I am happy. Superb platform!' },
    { name: 'Chima’s Fixes', text: 'Happy I took the advice, this is the level of professionalism my clients want to see. Goes hand in hand with my skills. Love it!' },
  ];

  return (
    <div className="relative">
      <section className="bg-[#030100] py-8">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <Heading size="lg" mb={6} color="white">
            What Other Mechanics Say About the Experience
          </Heading>
          <div className="relative">
            {/* Fill effect on the left and right ends */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10">
              <div className="absolute left-[-10rem] top-1/2 transform -translate-y-1/2 bg-[#FFD282] rounded-full filter blur-[120px] h-[20rem] w-[20rem]  sm:block"></div> 
              {/* Hidden on small screens, shown on larger screens */}
              <div className="absolute right-[-0rem] top-1/2 transform -translate-y-1/2 bg-[#FFD282] rounded-full filter blur-[120px] h-[20rem] w-[10rem] hidden lg:block"></div>
              {/* Hidden on medium screens, shown on large screens */}
            </div>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {testimonials.map((testimonial) => (
                <Box 
                  key={testimonial.name} 
                  p={6}  
                  style={{
                    background: "linear-gradient(to bottom right, #545454, #111)",
                    width: "100%", 
                    height: 'auto',
                    maxWidth: "20rem", 
                    transition: "transform 0.3s, box-shadow 0.3s", 
                  }}
                  border="1px" 
                  borderColor="#FFD282" 
                  borderRadius="3xl" 
                  shadow="md" 
                  textAlign="left" 
                  position="relative"
                  mx="auto"
                  className="hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex">
                    <div className="ml-auto">
                      <Image 
                        src={testimonialImage} 
                        alt="testimonial image" 
                        className="inline-flex items-center justify-center" 
                        mb={4} 
                        borderRadius="full" 
                        boxSize="50px" 
                      />
                    </div>
                  </div>
                  <Heading size="md" mb={4} color="white">
                    {testimonial.name}
                  </Heading>
                  <Text color="gray.300" fontSize="sm">
                    {testimonial.text}
                  </Text>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
