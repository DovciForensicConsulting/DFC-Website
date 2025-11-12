import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import DFCLogo from '../comps/custom_icons/DFCLogo'
import CTAButton from '../comps/buttons/CTAButton'

const PageNotFound = () => {
  return (
    <VStack
        minH={'100vh'}
    >
        <Heading
            pt='50px'
            fontWeight={'normal'}
            fontSize={['5xl', '6xl']}
            color={"pub_layout_title_text"}
            textWrap={'wrap'}
            lineHeight={'40px'}
            textAlign={'center'}
            textShadow={"2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5)"}

        >
            404 Error
        </Heading>
        <Text
            color={'pub_layout_body_text'}
            fontFamily={'body'}
            fontSize={'med'}
            maxW={'1000px'}
            textAlign={'center'}
        >
            The page you're looking for doesnt exist.
        </Text>

        <Box
            pt='50px'
            w='500px'
            alignContent={'center'}
            mb={'50px'}
        >
            <DFCLogo
                logoWith={'100%'}
                LogoColor_2={"#252523"}
                LogoColor_1={"#DFD8C8"}
                DropShadow={"2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5)"}
            />
        </Box>
        <CTAButton
            Title={"Go Home"}
            toLink={'/'}
            Variant={2}
        />
    </VStack>
  )
}

export default PageNotFound