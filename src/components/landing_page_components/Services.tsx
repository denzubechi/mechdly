import { Heading, Text, Box, Image } from "@chakra-ui/react";
import schedulingImage from '../../assets/img/schedule.png';
import paymentImage from '../../assets/img/Reminder (1).png';
import invoiceImage from '../../assets/img/Reminder (2).png';
import reminderImage from '../../assets/img/Reminder (3).png';
import smsImage from '../../assets/img/Reminder (4).png';

const Services = () => {
  const services = [
    { title: 'Scheduling', desc: 'Let your clients choose the most efficient time to meet with you and fix their car issues.', image: schedulingImage },
    { title: 'Payment gateway', desc: 'An efficient payment system worthy of your services.', image: paymentImage },
    { title: 'Generalize invoice', desc: 'Get your receipts and invoices for payment proof.', image: invoiceImage },
    { title: 'Send Reminders', desc: 'Let’s remind you and your clients about the upcoming meetings before time.', image: reminderImage },
    { title: 'Send SMS', desc: 'Stay on the loop with all your business activities with our SMS notifications.', image: smsImage },
  ];

  return (
    <section className="bg-[#030100] py-8 relative">
      <div className="max-w-screen-xl px-4 mx-auto text-center relative">
        
        {/* Light fill effect at the center of the page */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-[#4a2f1d] rounded-full filter blur-[100px] h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]"></div>
        </div>

        <span className="blur-header"></span>

        <Heading size="lg" mb={6} color="white">
          SERVICES WE OFFER
        </Heading>

        {/* First Grid with 3 items */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-20">
          {services.slice(0, 3).map((service) => (
            <Box
              key={service.title}
              p={6}
              border="1px"
              borderColor="#FFD282"
              borderRadius="3xl"
              shadow="md"
              textAlign="left"
              style={{
                background: "linear-gradient(to bottom right, #545454, #111)",
                width: "100%",
                maxWidth: "20rem",
                height: 'auto',
              }}
              position="relative"
              mx="auto"
              className="transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={service.image}
                alt={`${service.title} image`}
                mx="auto"
                boxSize="60px"
                mb={4}
              />
              <Heading size="md" mb={4} color="white">
                {service.title}
              </Heading>
              <Text color="gray.300" fontSize="sm">
                {service.desc}
              </Text>
            </Box>
          ))}
        </div>

        {/* Second Grid with 2 items, centered on larger screens */}
        <div className="grid gap-4 mt-8 md:grid-cols-2 lg:w-1/2 lg:mx-auto relative z-20">
          {services.slice(3).map((service) => (
            <Box
              key={service.title}
              p={6}
              border="1px"
              borderColor="#FFD282"
              borderRadius="3xl"
              shadow="md"
              textAlign="left"
              style={{
                background: "linear-gradient(to bottom right, #545454, #111)",
                width: "100%",
                maxWidth: "20rem",
                height: 'auto',
              }}
              position="relative"
              mx="auto"
              className="transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={service.image}
                alt={`${service.title} image`}
                mx="auto"
                boxSize="60px"
                mb={4}
              />
              <Heading size="md" mb={4} color="white">
                {service.title}
              </Heading>
              <Text color="gray.300" fontSize="sm">
                {service.desc}
              </Text>
            </Box>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
