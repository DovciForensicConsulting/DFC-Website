import { useRef } from "react";
import shouldForwardProp from "@emotion/is-prop-valid";
import { isValidMotionProp, motion, useInView } from "framer-motion";
import { Box, chakra, HStack, Icon, Text } from "@chakra-ui/react";
import { SiPushbullet } from "react-icons/si";

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
            w={['100%', '80%']}
        >
            <Box
                bg="{colors.deep_gray}"
                borderRadius={'15px'}
            >
                <HStack
                    flex={3}
                    justify={'space-between'}
                >
                    <MotionBox
                        w={'50px'}
                        h='50px'
                        bg={'red'}
                    >
                        <Icon
                            h='100%'
                            as={SiPushbullet}
                        />
                    </MotionBox>
                    
                    <Text>
                        {ExperienceData.Years}
                    </Text>
                    <Text>
                        {ExperienceData.Description}
                    </Text>
                </HStack>
            </Box>
            
        </MotionBox>
    )
}

export default ExperienceCard