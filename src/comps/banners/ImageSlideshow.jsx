'use client';

import {
  AspectRatio,
  chakra,
  Image,
  Box,
  Flex,
  Icon,
} from '@chakra-ui/react';
import {
  isValidMotionProp,
  motion,
  AnimatePresence,
} from 'framer-motion';
import shouldForwardProp from '@emotion/is-prop-valid';
import React, { useState, useEffect, useRef } from 'react';
import {
  BiArrowToLeft,
  BiArrowToRight,
  BiExitFullscreen,
  BiFullscreen,
} from 'react-icons/bi';
import { useGesture } from '@use-gesture/react';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

/* --------------------------------------------------------------
   SINGLE SLIDE
   -------------------------------------------------------------- */
const ImageSlide = ({
  imgSrc,
  isActive,
  direction,
  isFullscreen,
}) => {
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <MotionBox
      custom={direction}
      variants={variants}
      initial="enter"
      animate={isActive ? 'center' : 'exit'}
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents={isActive ? 'auto' : 'none'}
      zIndex={isActive ? 1 : 0}
    >
      {/* Full-image in fullscreen, keep 16:9 ratio otherwise */}
      {isFullscreen ? (
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="black"
        >
          <Image
            src={imgSrc}
            alt="fullscreen slide"
            maxW="100%"
            maxH="100%"
            objectFit='scale-down'
          />
        </Box>
      ) : (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imgSrc}
            alt="slideshow"
            objectFit="cover"
            borderRadius="md"
            width="100%"
            height="100%"
          />
        </AspectRatio>
      )}
    </MotionBox>
  );
};

/* --------------------------------------------------------------
   MAIN SLIDESHOW + FULLSCREEN
   -------------------------------------------------------------- */


const ImageSlideshow = ({
  images,
  autoPlay = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  /* ---------- Fullscreen API ---------- */
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Failed to enter fullscreen:', err);
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Sync state with native fullscreen changes (Esc key, etc.)
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  /* ---------- Auto-play (PAUSE in fullscreen) ---------- */
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!autoPlay || images.length <= 1 || isFullscreen) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((i) => (i + 1) % images.length);
    }, interval);
  };

  // Re-start timer when:
  // - autoPlay / interval / images change
  // - fullscreen toggles (pause/resume)
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, autoPlay, interval, images.length, isFullscreen]);

  /* ---------- Navigation ---------- */
  const goTo = (idx) => {
    const dir = idx > currentIndex ? 1 : idx < currentIndex ? -1 : 0;
    setDirection(dir);
    setCurrentIndex(idx);
    startTimer(); // reset on manual nav
  };
  const goPrev = () => goTo((currentIndex - 1 + images.length) % images.length);
  const goNext = () => goTo((currentIndex + 1) % images.length);

  /* ---------- Swipe ---------- */
  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx] }) => {
        const THRESHOLD = 50;
        if (Math.abs(mx) < THRESHOLD) return;
        if (mx > 0) {
          setDirection(-1);
          goPrev();
        } else {
          setDirection(1);
          goNext();
        }
      },
    },
    { drag: { filterTaps: true, axis: 'x', threshold: 10 } }
  );

  if (!images || images.length === 0) {
    return <Box>No images provided</Box>;
  }

  return (
    <Box
      ref={containerRef}
      position="relative"
      w="100%"
      maxW={isFullscreen ? 'none' : '1000px'}
      mx="auto"
      h={isFullscreen ? '100vh' : 'auto'}
      bg={isFullscreen ? 'black' : 'transparent'}
      transition="all 0.3s ease"
    >
      {/* Swipe Container */}
      <MotionBox
        position="relative"
        overflow="hidden"
        borderRadius={isFullscreen ? '0' : 'md'}
        _active={{ cursor: 'grabbing' }}
        touchAction="none"
        {...bind()}
        h="100%"
      >
        {/* Fullscreen uses flex centering, normal uses AspectRatio */}
        {isFullscreen ? (
          <Box position="relative" w="100%" h="100%">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <ImageSlide
                key={currentIndex}
                imgSrc={images[currentIndex]}
                isActive
                direction={direction}
                isFullscreen
              />
            </AnimatePresence>
          </Box>
        ) : (
          <AspectRatio ratio={16 / 9} h="100%">
            <Box position="relative" w="100%" h="100%">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <ImageSlide
                  key={currentIndex}
                  imgSrc={images[currentIndex]}
                  isActive
                  direction={direction}
                  isFullscreen={false}
                />
              </AnimatePresence>
            </Box>
          </AspectRatio>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <MotionBox
              as="button"
              aria-label="Previous"
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-55%)"
              zIndex={2}
              onClick={goPrev}
              bg="whiteAlpha.700"
              _hover={{ bg: 'white', scale: 1.1 }}
              borderRadius="full"
              p={2}
              whileTap={{ scale: 0.9 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor={'pointer'}
            >
              <Icon as={BiArrowToLeft} boxSize={4} color="gray.800" />
            </MotionBox>

            <MotionBox
              as="button"
              aria-label="Next"
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-45%)"
              zIndex={2}
              onClick={goNext}
              bg="whiteAlpha.700"
              _hover={{ bg: 'white', scale: 1.1 }}
              borderRadius="full"
              p={2}
              whileTap={{ scale: 0.9 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor={'pointer'}
            >
              <Icon as={BiArrowToRight} boxSize={4} color="gray.800" />
            </MotionBox>
          </>
        )}

        {/* Fullscreen Button */}
        <MotionBox
            as="button"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            position="absolute"
            bottom={2}
            right={2}
            zIndex={3}
            onClick={toggleFullscreen}
            bg="whiteAlpha.700"
            _hover={{ bg: 'white', scale: 1.1 }}
            borderRadius="full"
            p={2}
            whileTap={{ scale: 0.9 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor={'pointer'}
        >
          <Icon
            as={isFullscreen ? BiExitFullscreen : BiFullscreen}
            boxSize={4}
            color="gray.800"
          />
        </MotionBox>
      </MotionBox>

      {/* Dots – hidden in fullscreen */}
      {images.length > 1 && !isFullscreen && (
        <Flex justify="center" mt={4} gap={2} pos={'absolute'} bottom={'10px'} left={0} right={0} zIndex={10}>
          {images.map((_, idx) => (
            <Box
              key={idx}
              as="button"
              w="10px"
              h="10px"
              borderRadius="full"
              bg={idx === currentIndex ? 'golden_wheat' : 'gray.300'}
              transition="all 0.3s"
              _hover={{ bg: 'soft_wheat' }}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              cursor={'pointer'}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default ImageSlideshow;