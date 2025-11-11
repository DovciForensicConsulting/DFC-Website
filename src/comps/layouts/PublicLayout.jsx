import { Box, Icon, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footers/PublicFooter";
import { PublicNavbar } from "../navbars/PublicNavbar";
import { BiArrowToTop } from "react-icons/bi";
import { isValidMotionProp, motion} from 'framer-motion';
import shouldForwardProp from '@emotion/is-prop-valid';
import ScrollToTop from "../../utils/ScrollToTop";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PublicLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
        minH="100vh"
        minW={'100%'}
        display="flex"
        flexDirection="column"
        overflowX="hidden"
    >
        <PublicNavbar />
        <Box 
            bg={'pub_layout_bg'}
            position={'relative'}
            //top={'50px'}
        >
            <ScrollToTop/>
            <Outlet />
        </Box>
        {/* Scroll to Top Button – Conditionally Rendered */}
        <MotionBox
            w="35px"
            h="35px"
            bg="deep_gray"
            color="golden_wheat"
            cursor="pointer"
            position="fixed"
            zIndex={100}
            bottom={6}
            right={6}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border={'1px solid'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: showScrollTop ? 1 : 0,
              scale: showScrollTop ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            _hover={{
              scale: showScrollTop ? 1.2 : 1,
              bg: "soft_wheat",
              color: "deep_gray",
              border: "2px solid",
              borderColor: "golden_wheat",
            }}
            pointerEvents={showScrollTop ? "auto" : "none"} // disable clicks when hidden
            onClick={() => window.scrollTo(0, 0)}
            style={{
              filter: "drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5))"
            }}
        >
            <Icon as={BiArrowToTop} boxSize={5} />
        </MotionBox>
        <Footer />
    </Box>
  );
};

export default PublicLayout;