/* --------------------------------------------------------------
   ServicesPreviewModule – carousel (1 on mobile, 3 on md+)
   -------------------------------------------------------------- */
import {
  Box,
  chakra,
  Heading,
  HStack,
  Image,
  VStack,
  useBreakpointValue,
  Skeleton,
} from '@chakra-ui/react';
import shouldForwardProp from '@emotion/is-prop-valid';
import {
  motion,
  AnimatePresence,
  isValidMotionProp,
} from 'framer-motion';
import { useGesture } from '@use-gesture/react';
import { useEffect, useRef, useState } from 'react';
import { ServicesData } from '../../data/ServicesData';
import CTAButton from '../buttons/CTAButton';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

/* --------------------------------------------------------------
   SINGLE CARD – animates on enter / exit + scroll-in-view
   -------------------------------------------------------------- */
const ServiceCard = ({ title, imageSrc, isActive, direction }) => {
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

  const [imageLoading, setImageLoading] = useState(true);
  const [headingLoading, setHeadingLoading] = useState(true);
  return (
    <MotionBox
        custom={direction}
        variants={variants}
        initial="enter"
        animate={isActive ? 'center' : 'enter'}
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
        w="full"
        cursor="pointer"
        style={{
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))',
        }}
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        bg="golden_wheat"
    >
        <Skeleton
            loading={imageLoading}
        >
            <Image
                borderRadius={'15px'}
                src={imageSrc}
                alt={title}
                objectFit="cover"
                w="full"
                h={{ base: '140px', md: '180px' }}
                p={'10px'}
                onLoad={() => setImageLoading(false)}
            />
        </Skeleton>
      
      <Box p={3} bg="golden_wheat">        
        <Heading
            color={'soft_wheat'}
            fontWeight={'normal'}
            textAlign={'center'}
            fontSize={'3xl'}
            style={{
                filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))',
            }}
            onLoad={() => setHeadingLoading(false)}
        >
            {title}
        </Heading>        
      </Box>
    </MotionBox>
  );
};

/* --------------------------------------------------------------
   CAROUSEL – 1 card on mobile, 3 on md+  (timer resets on swipe/dot)
   -------------------------------------------------------------- */
const ServicesCarousel = () => {
  /* ---------- responsive count ---------- */
  const cardsPerPage = useBreakpointValue({ base: 1, md: 3 }) ?? 1;

  /* ---------- carousel state ---------- */
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(ServicesData.Services.length / cardsPerPage);

  /* ---------- auto-rotate with reset ---------- */
  const intervalRef = useRef(null);

  const startTimer = () => {
    // clear any running timer
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentPage((p) => (p + 1) % totalPages);
    }, 4000);
  };

  // start once on mount
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [totalPages]);

  /* ---------- swipe gestures (reset timer) ---------- */
  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx] }) => {
        const THRESHOLD = 50;
        if (Math.abs(mx) < THRESHOLD) return;

        if (mx > 0) {
          // swipe right → previous page
          setDirection(-1);
          setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
        } else {
          // swipe left → next page
          setDirection(1);
          setCurrentPage((p) => (p + 1) % totalPages);
        }

        // RESET TIMER AFTER SWIPE
        startTimer();
      },
    },
    { drag: { filterTaps: true, axis: 'x', threshold: 10 } }
  );

  /* ---------- visible cards for the current page ---------- */
  const start = currentPage * cardsPerPage;
  const visible = ServicesData.Services.slice(start, start + cardsPerPage);

  return (
    <VStack spacing={6} w="full" maxW='1250px' mb={'-15px'}>
    {/* ---- swipe container with padding INSIDE ---- */}
        <MotionBox
            position="relative"
            overflow="hidden"
            w="full"
            minH={{ base: '260px', md: '340px' }}
            pl={['20px', '50px']}
            pr={['20px', '50px']}
            {...bind()}
            cursor="grab"
            _active={{ cursor: 'grabbing' }}
            touchAction="none"   // ← THIS IS THE MISSING LINE
            >
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <HStack
                    key={currentPage}
                    spacing={5}
                    w="full"
                    justify={cardsPerPage === 1 ? 'center' : 'flex-start'}
                    align="stretch"
                >
                {visible.map((svc, i) => (
                    <Box
                      key={svc.Title + i}
                      flex={`0 0 ${100 / cardsPerPage}%`}
                      maxW={`${100 / cardsPerPage}%`}
                    >
                    <ServiceCard
                        title={svc.Title}
                        imageSrc={svc.ImageSrc}
                        isActive={true}
                        direction={direction}
                    />
                    </Box>
                ))}
                </HStack>
            </AnimatePresence>
            </MotionBox>

      {/* ---- dots (one per page) – reset timer on click ---- */}
      <HStack justify="center" gap={2} mt={['-50px', '-90px']} mb={'10px'}>
        {Array.from({ length: totalPages }, (_, idx) => (
          <Box
            key={idx}
            w={2}
            h={2}
            borderRadius="full"
            bg={idx === currentPage ? 'golden_wheat' : 'gray.400'}
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => {
              setDirection(idx > currentPage ? 1 : -1);
              setCurrentPage(idx);
              // RESET TIMER AFTER DOT CLICK
              startTimer();
            }}
          />
        ))}
      </HStack>

      <CTAButton
        Title={"View Services"}
        toLink={"/services"}
      />
    </VStack>
  );
};

/* --------------------------------------------------------------
   MAIN MODULE
   -------------------------------------------------------------- */
const ServicesPreviewModule = () => {
  return (
    <MotionBox
        initial={{
            skewY: -2
        }}
        bg={'deep_gray'}
        mt={['-10px', '-50px']}
    >
        
        <MotionBox
            initial={{ opacity: 0, skewY: 2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            pt={['0px', '50px']}
        >
            <VStack spacing={8} align="center" py={10}>
                <Heading
                    fontWeight="normal"
                    fontSize={['5xl', '6xl']}
                    color="soft_wheat"
                    textAlign="center"
                    mb={['5px', '15px']}
                    textShadow="2px 2px 1px rgba(0,0,0,0.5)"
                >
                {ServicesData.Title}
                </Heading>

                <ServicesCarousel />
            </VStack>
        </MotionBox>
        <Box
            w='100%'
            h='5px'
            bg={'deep_gray'}
            style={{
                filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 1.0))'
            }}
        >

        </Box>
    </MotionBox>
    
  );
};

export default ServicesPreviewModule;