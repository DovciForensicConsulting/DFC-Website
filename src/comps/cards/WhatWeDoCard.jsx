import { AspectRatio, Box, Button, chakra, Heading, HStack, Icon, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import shouldForwardProp from "@emotion/is-prop-valid";
import { isValidMotionProp, motion, useInView } from "framer-motion";
import { DoForYou } from "../../data/HomeData";
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

const WeDoCard = ({weDoData, ViewMargin}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: ViewMargin })
    return(
        <MotionBox
            ref={ref}
            animate={isInView ? 'visible' : 'hidden'}
            w={['100%', '300px']}
            bg={'{colors.soft_wheat}'}
            borderRadius={'15px'}
            initial={{opacity:0}}
            overflow={'hidden'}
            position={'relative'}
            
            variants={{
                visible: {
                    opacity: 1,
                    transition: {duration: 0.5, ease: "easeInOut"}
                }
            }}
        >
            <HStack
                alignContent={'center'}
                justifyContent={'center'}
                pb={'5px'}
            >
                <Box
                    h='25px'
                    w='25px'
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Icon
                        h='100%'
                        w='100%'
                        as={weDoData.Icon}
                    />
                </Box>
                
                <MotionHeading
                    fontSize={'2xl'}
                    fontFamily={'heading'}
                    color={"{colors.deep_gray}"}
                    fontWeight={'normal'}
                    lineHeight={['15px', '50px']}
                    pl={['0px', '50px']}
                    pr={['0px', '50px']}
                    pt={['15px', '0px']}
                    pb={['5px', '0px']}
                    textAlign={'center'}
                    initial={{scale: 0}}
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            scale: 1,
                            transition: {duration: 0.25, ease: "easeInOut"}
                        }
                    }}
                >
                    {weDoData.Title}
                </MotionHeading>
            </HStack>
            <Box
                bg={'{colors.golden_wheat}'}
                borderBottomRadius={'10px'}
                h='130px'
                ml={'5px'}
                mr={'5px'}
                mb={'5px'}
                display={'flex'}
                //alignItems={'center'}
            >
                <MotionText
                    textAlign={'center'}
                    pl={'5px'}
                    pr={'5px'}
                    pt={'5px'}
                    lineHeight={'15px'}
                    fontFamily={'mono'}
                    fontWeight={'medium'}
                    fontSize={'sm'}
                    initial={{opacity: 0}}
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {delay: 0.25, duration: 0.25, ease: "easeInOut"}
                        }
                    }}
                >
                    {weDoData.Text}
                </MotionText>
            </Box>
            
        </MotionBox>
    )
}

const WhatWeDoCard = (props) => {
  return (
    <MotionBox
        w='100%'
        pt={'50px'}
        pb={'50px'}
        bg={'{colors.deep_gray}'}
        initial={{skewY: 3}}
        alignContent={'center'}
        style={{
            "filter": 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 1))'
        }}
    >
        <MotionBox
            w='100%'
            initial={{skewY: -3}}
            display={'flex'}
            justifyContent={'center'}
        >
            
            <VStack
                gap={5}
            >
                <Heading
                    fontSize={['5xl', '6xl']}
                    color={"{colors.soft_wheat}"}
                    fontWeight={'normal'}
                    lineHeight={'50px'}
                    pl={'50px'}
                    pr={'50px'}
                    textAlign={'center'}
                >
                    {DoForYou.Title}
                </Heading>
                <Text
                    color={'{colors.golden_wheat}'}
                    fontFamily={'body'}
                    fontSize={'med'}
                    lineHeight={'20px'}
                    fontWeight={'medium'}
                    ml={['50px', '100px']}
                    mr={['50px', '100px']}
                    maxW={'1000px'}
                    textAlign={'center'}
                >
                    {DoForYou.Text}
                </Text>
                <SimpleGrid
                    columns={[2, 3]}
                    gap={[5]}
                    pr={'15px'}
                    pl={'15px'}
                >
                    {DoForYou.WeDos.map((weDoData, weDoIdx) => {
                        return(
                            <WeDoCard
                                weDoData={weDoData}
                                ViewMargin={'-150px'}
                            />
                        )
                    })}
                </SimpleGrid>
                <Button>
                    View Services
                </Button>
            </VStack>
        </MotionBox>
            
            

        

    </MotionBox>
  )
}

export default WhatWeDoCard