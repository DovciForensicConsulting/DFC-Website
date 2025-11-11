import { Box, Button, chakra, HStack, Icon, VStack } from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";
import shouldForwardProp from "@emotion/is-prop-valid";
import { isValidMotionProp, motion, useInView, AnimatePresence } from "framer-motion";
import { useGesture } from '@use-gesture/react';
import { Experience } from '../../data/HomeData';
import { GiPistolGun } from 'react-icons/gi';
import CTAButton from '../buttons/CTAButton';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionHeading = chakra(motion.h2, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

/* --------------------------------------------------------------
   SINGLE SLIDE – animates on *enter* (new slide) and on *scroll*
   -------------------------------------------------------------- */

const ExperienceSlide = ({
  slideData,
  isActive,
  viewMargin = '-100px',
  direction,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: viewMargin });

  const swipeVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <MotionBox
      ref={ref}
      custom={direction}
      variants={swipeVariants}
      initial="enter"
      animate={inView && isActive ? 'center' : 'enter'} // only animate when in view + active
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
      textAlign="center"
      width="100%"
      // REMOVED: position, top, left
    >
      <MotionHeading
        fontSize={['4xl', '5xl']}
        fontWeight="bold"
        fontFamily="heading"
        color="golden_wheat" // Fixed
        initial={{ scale: 0.8 }}
        animate={isActive && inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {slideData?.Years}
      </MotionHeading>

      <MotionText
        fontSize="md"
        fontFamily="body"
        color="deep_gray" // Fixed
        mt={2}
        initial={{ opacity: 0 }}
        animate={isActive && inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {slideData?.Description}
      </MotionText>
    </MotionBox>
  );
};

/* --------------------------------------------------------------
   CAROUSEL – swipe works on mobile + desktop
   -------------------------------------------------------------- */
const ExperienceCarousel = ({ experienceData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  // Function to start/reset the auto-rotate timer
  const startAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((i) => (i + 1) % experienceData.length);
    }, 4000);
  };

  // Initial auto-rotate
  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [experienceData.length]);

  // Swipe gesture – resets timer on drag end
  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx] }) => {
        const THRESHOLD = 50;
        if (Math.abs(mx) < THRESHOLD) return;

        let newDirection = 0;
        let newIndex = currentSlide;

        if (mx > 0) {
          // Swipe right → previous
          newDirection = -1;
          newIndex = (currentSlide - 1 + experienceData.length) % experienceData.length;
        } else {
          // Swipe left → next
          newDirection = 1;
          newIndex = (currentSlide + 1) % experienceData.length;
        }

        setDirection(newDirection);
        setCurrentSlide(newIndex);

        // Reset timer after swipe
        startAutoRotate();
      },
    },
    {
      drag: {
        filterTaps: true,
        axis: 'x',
        threshold: 10,
      },
    }
  );

  // Handle dot click – also resets timer
  const handleDotClick = (idx) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
    startAutoRotate(); // Reset timer
  };

  return (
    <VStack spacing={4} align="center" w="100%" maxW="800px" mx="auto">
      {/* Swipe container */}
      <MotionBox
        minH="175px"
        w="100%"
        position="relative"
        overflow="hidden"
        {...bind()}
        cursor="grab"
        _active={{ cursor: 'grabbing' }}
        userSelect="none"
        touchAction="pan-y"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <ExperienceSlide
            key={currentSlide}
            slideData={experienceData[currentSlide]}
            isActive={true}
            viewMargin="-100px"
            direction={direction}
          />
        </AnimatePresence>
      </MotionBox>

      {/* Dots */}
      <HStack justify="center" spacing={2}>
        {experienceData.map((_, idx) => (
          <Box
            key={idx}
            cursor="pointer"
            onClick={() => handleDotClick(idx)}
            w={2}
            h={2}
            borderRadius="full"
            bg={idx === currentSlide ? 'golden_wheat' : 'gray.400'}
            transition="all 0.3s"
          />
        ))}
      </HStack>
    </VStack>
  );
};

const ExperienceModule = () => {
  return (
    <MotionBox
      initial={[{ skewY: -4 }, { skewY: -2 }]}
      mt={['15px', "50px"]}
      zIndex={0}
      bg="{colors.soft_wheat}"
      pb="50px"
      h={'420px'}
      w="100%"
      pl={['5px' ,'50px']}
      pr={['5px' ,'50px']}
      pt={['30px', '40px', '45px', '30px', '0px']}
      style={{
        transformOrigin: 'top left',
        filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))',
      }}
    >
      <MotionBox
        initial={[{ skewY: 4 }, { skewY: 2 }]}
        w="100%"
        style={{ transformOrigin: 'top left' }}
        textAlign="center"
      >
        <VStack spacing={8} align="center">
          <MotionHeading
            fontFamily="heading"
            fontSize={['5xl', '6xl']}
            color="{colors.deep_gray}"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            lineHeight={'45px'}
          >
            {Experience.Title}
          </MotionHeading>
            
          <ExperienceCarousel experienceData={Experience.Experiences} />
          <Box
            pt='15px'
          >
            <CTAButton
                Title={"Contact Us"}
                toLink={"/contact"}
                Variant={1}
            />
          </Box>
          
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};
export default ExperienceModule