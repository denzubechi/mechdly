import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';

import './calender.css'; // Import your custom CSS for further customization

// Localizer for the calendar using moment.js
const localizer = momentLocalizer(moment);

// Type definition for the event
interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  status: 'pending' | 'completed';
  allDay?: boolean;
  resource?: any;
}

// Dummy event data
const myEventsList: MyEvent[] = [
  {
    title: 'Meeting with Sam to fix Ford Raptor',
    start: new Date(2024, 9, 10, 9, 0),
    end: new Date(2024, 9, 10, 11, 0),
    status: 'completed',
  },
  {
    title: 'Meeting with Sam to fix Ford Raptor',
    start: new Date(2024, 9, 12, 9, 0),
    end: new Date(2024, 9, 12, 11, 0),
    status: 'pending',
  },
  {
    title: 'Meeting with Sam to fix Ford Raptor',
    start: new Date(2024, 9, 12, 13, 0),
    end: new Date(2024, 9, 12, 14, 0),
    status: 'pending',
  },
  {
    title: 'Meeting with Sam to fix Ford Raptor',
    start: new Date(2024, 9, 16, 9, 0),
    end: new Date(2024, 9, 16, 11, 0),
    status: 'pending',
  },
];

const MyCalendar: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectEvent = (event: MyEvent) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event: MyEvent) => {
    const backgroundColor = event.status === 'completed' ? '#D4EDDA' : '#FFF3CD';
    const borderColor = event.status === 'completed' ? '#28A745' : '#FFC107';
    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'black',
        border: `1px solid ${borderColor}`,
        display: 'block',
        padding: '5px',
      },
    };
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newDate = moment(currentDate).add(direction === 'next' ? 1 : -1, 'week').toDate();
    setCurrentDate(newDate);
  };

  return (
    <Box p={4} >
      {/* Top bar with month/year display and create button */}
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
      <Flex gap={2}>

      <Heading size="md" mx={2}>{moment(currentDate).format('MMMM YYYY')}</Heading>
        
        <Box display={'flex'}>
            
          <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9968 8.39075L4.38763 15.9999L11.9968 23.6091" stroke="white" stroke-width="2.28962" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.6985 16H4.60083" stroke="white" stroke-width="2.28962" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1748 8.39075L25.784 15.9999L18.1748 23.6091" stroke="white" stroke-width="2.28962" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.47327 16.0001H25.5709" stroke="white" stroke-width="2.28962" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Box>


          {/* <IconButton
            icon={<ArrowLeftIcon />}
            aria-label="Previous"
            onClick={() => handleNavigate('prev')}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
       
          <IconButton
            icon={<ArrowRightIcon />}
            aria-label="Next"
            onClick={() => handleNavigate('next')}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          /> */}
        </Flex>
        <Button colorScheme="orange">Create Task</Button>
      </Flex>

      
        <Calendar
          localizer={localizer}
          events={myEventsList}
          style={{ height: 500, color: '' }}
          defaultView={Views.WEEK}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectEvent}
          views={['week']}
          date={currentDate}
          onNavigate={date => setCurrentDate(date)}
        />
     
      {/* Modal for task details */}
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedEvent?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text><strong>Status:</strong> {selectedEvent?.status}</Text>
            <Text><strong>Start Time:</strong> {moment(selectedEvent?.start).format('MMMM Do YYYY, h:mm A')}</Text>
            <Text><strong>End Time:</strong> {moment(selectedEvent?.end).format('MMMM Do YYYY, h:mm A')}</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={closeModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MyCalendar;
