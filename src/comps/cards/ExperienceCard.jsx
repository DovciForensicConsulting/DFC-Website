import { useRef } from "react";
import shouldForwardProp from "@emotion/is-prop-valid";
import { isValidMotionProp, motion, useInView } from "framer-motion";
import { Box, chakra, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { SiPushbullet } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionHeading = chakra(motion.h2, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});



const ExperienceCard = ({ExperienceData, ViewMargin}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: ViewMargin })
    return (
        <MotionBox
            ref={ref}
            w={['40%', '80%']}
        >
            <Box
                bg="{colors.deep_gray}"
                borderRadius={'15px'}
            >
                <HStack
                    justify={'left'}
                    w='100%'
                    pb={'5px'}
                    pr='5px'
                    display={'flex'}
                    alignItems={'center'}
                >
                    <MotionBox
                        w={'50px'}
                        display={'flex'}
                        h='50px'
                    >
                        <Icon
                            fill={"{colors.golden_wheat}"}
                            h='100%'
                            as={FaCheckCircle}
                            ml={'15px'}
                        />
                    </MotionBox>
                    
                    <Heading
                        color={'{colors.soft_wheat}'}
                        textAlign={'left'}
                        pr={'20px'}
                        fontSize={'2xl'}
                    >
                        {ExperienceData.Years}
                    </Heading>
                    <Box
                        w='900px'
                        display={'flex'}
                    >
                        <Text
                            textAlign={'left'}
                            fontFamily={'mono'}
                            fontSize={'sm'}
                            color={"{colors.soft_wheat}"}
                            lineHeight={'20px'}
                        >
                            {ExperienceData.Description}
                        </Text>
                    </Box>
                    
                </HStack>
            </Box>
            
        </MotionBox>
    )
}

export default ExperienceCard