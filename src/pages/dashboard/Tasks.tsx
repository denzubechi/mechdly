import { Box,Text } from '@chakra-ui/react'
import PageHeader from '../../components/app_components/PageHeader'
import MyCalendar from '../../components/app_components/Calender'
const Tasks = () => {
  return (
    <Box bg={'black'} my={10}>
         <PageHeader/>
        <Box py={4}>
          <MyCalendar/>
        </Box>
    </Box>
  )
}

export default Tasks