import React, { createContext, useContext, useState, useCallback ,ReactNode} from 'react';
import { Flex, IconButton, Box, Divider, Avatar, Heading, Text } from '@chakra-ui/react';
import { FiHome, FiCalendar, FiUser, FiChevronLeft } from 'react-icons/fi';
import NavItem from './NavItem';
import Logo from '../../assets/img/Mechdly logo 3.png';
import { ReactComponent as ScheduleIcon } from '../../assets/svg/shedule-svg.svg'
import { ReactComponent as InvoiceIcon } from '../../assets/svg/Invoice-svg.svg'
import { ReactComponent as TasksIcon } from '../../assets/svg/Tasks-svg.svg'
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings-svg.svg'
type NavSize = "small" | "large";

interface SidebarContextProps {
    navSize: NavSize;
    toggleNavSize: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
     const [navSize, setNavSize] = useState<NavSize>("large");

    const toggleNavSize = useCallback(() => {
        setNavSize(prevSize => prevSize === "small" ? "large" : "small");
    }, []);

    return (
        <SidebarContext.Provider value={{ navSize, toggleNavSize }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default function Sidebar() {
    const { navSize, toggleNavSize } = useSidebar();

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleNavItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Flex
            pos="fixed"
            left="0"
            top="0"
            h="100vh"
            bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
            borderRight="3px solid #F68537"
            w={navSize === "small" ? "75px" : "250px"}
            flexDir="column"
            justifyContent="space-between"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
                pl="5%"
                py="10%"
            >
                <Flex alignItems="center" w="100%">
                    {navSize === "large" && (
                        <Box mb={4}>
                            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                        </Box>
                    )}
                    <IconButton
                        aria-label="Toggle Navigation Size"
                        icon={<FiChevronLeft />}
                        bg="white"
                        borderRadius="full"
                        size="sm"
                        onClick={toggleNavSize}
                        _hover={{ background: 'white' }}
                        transform={navSize === "small" ? "rotate(180deg)" : "none"}
                        ml={navSize === "small" ? "" : "auto"}
                        mt={navSize === "small" ? "0" : "-8px"}
                        mb={navSize === "small" ? "4" : "0"}
                        position={navSize === "small" ? "absolute" : "static"}
                        top={navSize === "small" ? "20px" : "auto"}
                        right={navSize === "small" ? "-20px" : "auto"}
                    />
                </Flex>
                
                <NavItem
                    navSize={navSize}
                    icon={<ScheduleIcon />}
                    title="Schedule"
                    description=""
                    active={activeIndex === 0}
                    onClick={() => handleNavItemClick(0)}
                />
                    <NavItem
                    navSize={navSize}
                    icon={<TasksIcon />}
                    title="Tasks"
                    description=""
                    active={activeIndex === 1}
                    onClick={() => handleNavItemClick(1)}
                />
                    <NavItem
                    navSize={navSize}
                    icon={<InvoiceIcon />}
                    title="Invoice"
                    description=""
                    active={activeIndex === 2}
                    onClick={() => handleNavItemClick(2)}
                />
                    <NavItem
                    navSize={navSize}
                    icon={<SettingsIcon />}
                    title="Settings"
                    description=""
                    active={activeIndex === 3}
                    onClick={() => handleNavItemClick(3)}
                />
                
            </Flex>

            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
                p="5%"
            >
                {/* <Divider display={navSize === "small" ? "none" : "flex"} />
                 <Flex mt={4} align="center"> 
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex> */}
            </Flex>
        </Flex>
    );
}
