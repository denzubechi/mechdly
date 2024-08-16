import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { InputGroup,Input,InputLeftElement } from '@chakra-ui/react';
interface PageHeaderProps {

  tutorialLink?: string;
  cta?: ReactNode;
}

function PageHeader({ tutorialLink,cta }: PageHeaderProps) {
  return (
    <HStack justify={'space-between'} flexWrap={'wrap'}>
      <Box>
        <Text
          as={'h1'}
          casing={'capitalize'}
          fontSize={{ base: 'lg', md: '2xl' }}
          color={'gray.700'}
          fontWeight={'medium'}
        >
          {''}
        </Text>
      </Box>
      {cta?cta :<Box
      display={'flex'}
      gap={2}
      >
         <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.92106 17.6656C14.0983 17.6656 17.4847 14.2793 17.4847 10.102C17.4847 5.92469 14.0983 2.53833 9.92106 2.53833C5.74378 2.53833 2.35742 5.92469 2.35742 10.102C2.35742 14.2793 5.74378 17.6656 9.92106 17.6656Z" stroke="white" stroke-width="1.30283" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.2808 18.4617L16.6885 16.8694" stroke="white" stroke-width="1.30283" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </InputLeftElement>
            <Input  placeholder='Search' />
        </InputGroup>

        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2063 3.86182C9.69664 3.86182 6.84441 6.71405 6.84441 10.2237V13.288C6.84441 13.9348 6.56873 14.9209 6.24003 15.4722L5.02067 17.4974C4.26785 18.7486 4.78741 20.1376 6.16581 20.6041C10.7357 22.131 15.6662 22.131 20.2361 20.6041C21.5191 20.18 22.0811 18.6638 21.3813 17.4974L20.1619 15.4722C19.8438 14.9209 19.5681 13.9348 19.5681 13.288V10.2237C19.5681 6.72465 16.7053 3.86182 13.2063 3.86182Z" stroke="white" stroke-width="1.59047" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M15.1678 4.16912C14.8391 4.07369 14.4998 3.99947 14.1499 3.95706C13.132 3.82982 12.1565 3.90404 11.2446 4.16912C11.5521 3.38449 12.3155 2.83313 13.2062 2.83313C14.0969 2.83313 14.8603 3.38449 15.1678 4.16912Z" stroke="white" stroke-width="1.59047" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.3871 20.9858C16.3871 22.7354 14.9557 24.1668 13.2062 24.1668C12.3367 24.1668 11.5309 23.8063 10.9583 23.2337C10.3858 22.6611 10.0253 21.8553 10.0253 20.9858" stroke="white" stroke-width="1.59047" stroke-miterlimit="10"/>
        </svg>

        


        </Box>}
    </HStack>
  );
}

export default PageHeader;
