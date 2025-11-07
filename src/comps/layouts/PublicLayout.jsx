import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footers/PublicFooter";
import { PublicNavbar } from "../navbars/PublicNavbar";
import ScrollToTop from "../../utils/ScrollToTop";

const PublicLayout = () => {
  return (
    <Box
        minH="100vh"
        minW={'400px'}
        display="flex"
        flexDirection="column"
    >
        <PublicNavbar />
        <Box 
            bg={'pub_layout_bg'}
            position={'relative'}
            top={'50px'}
        >
            <ScrollToTop/>
            <Outlet />
        </Box>
        <Footer />
    </Box>
  );
};

export default PublicLayout;