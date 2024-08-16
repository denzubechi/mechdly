import React, { Suspense, PropsWithChildren } from "react";
import { Box, Spinner, Flex } from "@chakra-ui/react";
import Sidebar, { SidebarProvider, useSidebar } from "../components/app_components/Sidebar";

interface IProps {
    title?: string;
}

const DashboardContent: React.FC<PropsWithChildren<IProps>> = ({
    children,
    title
}) => {
    const { navSize } = useSidebar();
    
    const ml = navSize === "small" ? "75px" : "250px";

    return (
        <Box
            flex="1"
            p={4}
            bg="black"
            color="white"
            ml={ml} // Adjust margin based on the sidebar size
            transition="margin-left 0.3s" // Smooth transition
        >
            <Suspense
                fallback={
                    <Box
                        alignItems="center"
                        height="100vh"
                        justifyContent="center"
                        display="flex"
                        bg="black"
                    >
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="#F68537"
                            size="xl"
                        />
                    </Box>
                }
            >
                {children}
            </Suspense>
        </Box>
    );
};

const DashboardLayout: React.FC<PropsWithChildren<IProps>> = ({ children, title }) => {
    return (
        <SidebarProvider>
            <Flex h="100vh" bg="black">
                <Sidebar />
                <DashboardContent title={title}>
                    {children}
                </DashboardContent>
            </Flex>
        </SidebarProvider>
    );
};

export default DashboardLayout;
