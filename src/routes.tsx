import { Suspense, lazy } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const Tasks = lazy(() => import("./pages/dashboard/Tasks"));
const Home = lazy(() => import("./pages/landing_page/Home"));


const AppRoutes = () => {
    const dashboardRoutes = [
      { path: "tasks", 
        element: <Tasks />,
        title: "Tasks",
     },
    ];
    
    return (
        <Suspense
         fallback={
          <Box
            alignItems='center'
            height='100vh'
            justifyContent='center'
            display='flex'
          >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#F68537'
                    size='xl'
                    />
          </Box>
        }
      >

        {/**Landing page routes */}
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>


        <Routes>
            {dashboardRoutes.map((route, index) => (
                  <Route
                  key={index}
                  path={route.path}
                  element={
                      <DashboardLayout title={route.title || route.path}>
                          {route.element}
                      </DashboardLayout>
                  }
                  />
              ))}
          </Routes>

      </Suspense>

    )};

export default AppRoutes