import { Box, chakra, HStack, Icon, VStack } from "@chakra-ui/react";
import shouldForwardProp from "@emotion/is-prop-valid";
import { isValidMotionProp, motion, useInView } from "framer-motion";
import { GiPistolGun } from "react-icons/gi";

import { useRef } from "react";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionHeading = chakra(motion.h2, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const CallResponseCard = ({
  Title,
  BodyText,
  ViewMargin = "-150px",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <MotionBox
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0}}
      bg="{colors.soft_wheat}"
      borderRadius="15px"
      overflow="hidden"
      w={["80%", "60%"]}
      h="auto"
      style={{
        "filter": 'drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.5))'
      }}
      initial={{opacity: 0}}
      variants={{
        visible:{
            opacity: 1,
            transition: {duration: 0.5, ease: 'easeInOut'}
        }
      }}
    >
        <VStack
            alignItems={['center', 'start']}
            gap={0}
            textAlign={'center'}
        >
            <HStack
                pt={['0px', '10px']}
                pl={['0px', '90px']}
            >
                <MotionHeading
                    
                    initial={{scale: 0}}
                    variants={{
                        visible: {
                            scale: 1,
                            transition: {duration: 0.5, ease: 'easeInOut'}
                        }
                    }}
                    fontSize="5xl"
                    fontFamily="heading"
                    color="{colors.deep_gray}"
                    mb={["-40px", "-40px"]}
                    zIndex={2}
                >
                    {Title}
                </MotionHeading>
            </HStack>
            
          
            <Box
                w='100%'
                h='50px'
                display={'flex'}
                alignItems={'center'}
                mb={'-20px'}
            >
                <Box
                    h='100%'
                    bg={"{colors.soft_wheat}"}
                    zIndex={1}
                >
                    <MotionBox
                        pl={['15px', '50px']}
                        justifyContent={'right'}
                        w='100%'
                        h='100%'
                        initial={{x: -100}}
                        variants={{
                            visible: {
                                x: 0,
                                transition: {duration: 0.25, ease: 'easeInOut'}
                            }
                        }}
                    >
                        <Icon
                            as={GiPistolGun}
                            fill={"{colors.deep_gray}"}
                            h={'100%'}
                            w='100%'
                            mt={['6px', '7px']}
                        />
                    </MotionBox>
                </Box>               
                
                <MotionBox
                    bg={"{colors.golden_wheat}"}
                    w="100%"
                    mr={['15px', '50px']}
                    h="3px"
                    variants={{
                    hidden: { x: -1000 },
                    visible: {
                        x: 0,
                        transition: { duration: 1, ease: "linear" },
                    },
                    }}
                />
            </Box>
          

          <MotionText
            pl={['25px', '50px']}
            pr={['25px', '50px']}
            pb={'25px'}
            initial={{opacity: 0}}
            variants={{
                visible: {
                    opacity: 1,
                    transition:{delay:0.25, duration: 0.25, ease: "easeInOut"}
                }
            }}
            fontSize="sm"
            mt={4}
            color="{colors.deep_gray}"
            fontFamily="body"
          >
            {BodyText}
          </MotionText>
        </VStack>
    </MotionBox>
  );
};

export default CallResponseCard;