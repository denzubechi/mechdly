import React, { ReactElement } from 'react';
import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton,
    Box,
    FlexProps,
    MenuList
} from '@chakra-ui/react';
import NavHoverBox from './NavHoverBox';

interface NavItemProps extends FlexProps {
    icon: ReactElement;
    title: string;
    description?: string;
    active?: boolean;
    navSize: 'small' | 'large';
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, description, active, navSize, onClick, ...rest }) => {
    return (
        <Flex
            mt={10}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
            {...rest}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active ? "#321A09" : undefined}
                    p={3}
                    borderRight={active ? "5px solid #F68537" : ''}
                    borderLeftRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#321A09" }}
                    w={navSize === "large" ? "100%" : undefined}
                    onClick={onClick}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Box fontSize="sm" color={active ? "#82AAAD" : "gray.500"}>
                                {icon}
                            </Box>
                            <Text ml={5} color={'white'} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                {/* <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={100}
                    ml={5}
                >
                    <NavHoverBox title={title} icon={icon} description={description || ''} />
                </MenuList> */}
            </Menu>
        </Flex>
    )
}

export default NavItem;
