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
    <section className="bg-[#030100] py-8">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <Heading size="lg" mb={6} color="white">
          SERVICES WE OFFER
        </Heading>
        <div
          className={`grid gap-8 ${
            services.length === 5 ? "lg:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {services.map((service, index) => (
            <Box
              key={service.title}
              p={6}
              bg="#2c2c2e"
              border="1px"
              borderColor="#FFD282"
              borderRadius="3xl"
              shadow="md"
              textAlign="left"
              position="relative"
              className={services.length === 5 && index >= 3 ? " lg:mx-auto" : ""}
            >
              <Image
                src={service.image}
                alt={`${service.title} image`}
                mx="auto"
                boxSize="50px"
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
