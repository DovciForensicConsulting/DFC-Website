import { AspectRatio, Box, chakra, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react';
import { isValidMotionProp, motion, useInView } from 'framer-motion';
import shouldForwardProp from '@emotion/is-prop-valid';
import React, { useRef, useState } from 'react';
import CTAButton from '../buttons/CTAButton';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionHeading = chakra(motion.header, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionText = chakra(motion.text, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ServiceCard = ({ ServiceData }) => {
    const [imageLoading, setImageLoading] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-150px" });
  return (
    <MotionBox
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        initial={{opacity: 0}}
        variants={{
            visible: {
                opacity: 1,
                transition: {duration: 0.5, ease: 'easeInOut'}
            }
        }}
        w="100%"
        bg="deep_gray"
        overflow="hidden"
        borderRadius="15px"
        p={2} // optional padding around card
    >
        <VStack
            gap={2}
            align="center"
        >
            <Skeleton
                loading={imageLoading}
                w="100%"
                h="100%"
            >
                {/* Image Container – Centered */}
                <MotionBox
                    h="300px"
                    w="100%"
                    mx="auto" // ← Horizontally center this box
                    borderRadius="10px 10px 5px 5px"
                    overflow="hidden"
                    position="relative"
                    initial={{opacity: 0, scale: 0}}
                    variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {delay: 0.05, duration: 0.5, ease: 'easeInOut'}
                        }
                    }}
                >                
                    <AspectRatio
                        ratio={1}
                        w="100%"
                        h="100%"
                    >
                        <Image
                            src={ServiceData.ImageSrc}
                            alt={ServiceData.Title}
                            objectFit="scale-down"
                            onLoad={() => setImageLoading(false)}
                            onError={() => setImageLoading(false)} // prevent stuck loading
                            // These ensure true centering inside AspectRatio
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                        />
                    </AspectRatio>
                    
                </MotionBox>
            </Skeleton>
            {/* Description */}
            <Box
                bg={'soft_wheat'}
                borderRadius={'5px 5px 10px 10px'}
                p={'10px 10px 25px 10px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {/* Title */}
                <MotionHeading
                    fontFamily={'heading'}
                    initial={{opacity: 0}}
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {delay: 0.25, duration: 0.5, ease: 'easeInOut'}
                        }
                    }}
                    fontSize={['4xl', '5xl']}
                    color="deep_gray"
                    fontWeight="normal"
                    lineHeight="35px"
                    px={{ base: '20px', md: '50px' }}
                    textAlign="center"
                    pt="15px"
                >
                    {ServiceData.Title}
                </MotionHeading>
                <MotionBox
                    w='80%'
                    h='5px'
                    bg={'golden_wheat'}
                    borderRadius={'5px'}
                    initial={{scaleX: 0}}
                    mt={'5px'}
                    mb={'10px'}
                    variants={{
                        visible: {
                            scaleX: 1,
                            transition: {delay: 0.5, duration: 0.5, ease: 'easeInOut'}
                        }
                    }}
                />
                <MotionText
                    textAlign="center"
                    color="deep_gray"
                    fontFamily={'body'}
                    fontSize={'small'}
                    initial={{opacity: 0}}
                    lineHeight={'15px'}
                    pl={'15px'}
                    pr='15px'
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {delay: 0.35, duration: 0.5, ease: 'easeInOut'}
                        }
                    }}
                >
                    {ServiceData.Description}
                </MotionText>
            </Box>
            <CTAButton
                Title={"Contact Us"}
                toLink={'/contact'}
                Variant={0}
            />
        </VStack>
        
    </MotionBox>
  );
};

export default ServiceCard;