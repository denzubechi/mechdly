import React, { ReactElement } from 'react';
import { Flex, Heading,Box, Text, FlexProps } from '@chakra-ui/react';

interface NavHoverBoxProps extends FlexProps {
    title: string;
    icon: ReactElement;
    description: string;
}

const NavHoverBox: React.FC<NavHoverBoxProps> = ({ title, icon, description, ...rest }) => {
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #F68537"
            />
            <Flex
                h={200}
                w="100%"
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor="#F68537"
                borderRadius="10px"
                color="#fff"
                textAlign="center"
                {...rest}
            >
                <Box fontSize="3xl" mb={4}>
                    {icon}
                </Box>
                <Heading size="md" fontWeight="normal">{title}</Heading>
                <Text>{description}</Text>
            </Flex>
        </>
    );
}

export default NavHoverBox;
