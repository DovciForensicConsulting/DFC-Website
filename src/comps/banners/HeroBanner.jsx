import { AspectRatio, Box, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { VideoHeroBanner } from '../../data/HomeData';
import { NavLink } from 'react-router-dom';
import CTAButton from '../buttons/CTAButton';
import DFCLogo from '../custom_icons/DFCLogo';

const HeroBanner = (props) => {
  const { height } = props;
  return (
    <Box
      h={height}
      flexWrap={'wrap'}
      overflow={'hidden'}
      position={'relative'}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        filter="blur(8px) sepia(0.45) brightness(0.9) contrast(1.1)" // Adjust blur strength
        transform="scale(1.05)" // Prevents blur edge artifacts
        overflow="hidden"
      >
        <AspectRatio ratio={16 / 9} w="100%" h="100%">
          <video
            src={VideoHeroBanner.VideoSrc}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AspectRatio>
      </Box>
      

      <Box
        position={'absolute'}
        top={0}
        right={0}
        bottom={0}
        left={0}
        zIndex={1}
      >
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={2}
          textAlign="center"
          color="white"
          spacing={4}
          maxW="800px"
        >
          <Box
              h={['150px', '200px', '300px']}
              w={['300px', '400px', '600px']}
              alignContent={'center'}
          >
              <DFCLogo
                  logoWith={'100%'}
                  LogoColor_1={"#A39274"}
                  LogoColor_2={"#DFD8C8"}
                  DropShadow={"3px 3px 2px rgba(0.0, 0.0, 0.0, 1.0)"}
              />
          </Box>
          {/*<Heading
              color={'hero_title'}
              fontSize={['5xl','7xl', '7xl', '8xl', '9xl']}
              flexWrap={['wrap', 'wrap', 'nowrap']}
              lineHeight={['50px', '70px', '90px', '110px']}
              fontWeight={'normal'}
              textShadow={"3px 3px 5px rgba(0, 0, 0, 0.75)"}
          >
            {VideoHeroBanner.Title}
          </Heading>
          <Text
            color={'hero_title'}
            fontSize={['xl', '3xl' ,'4xl']}
            flexWrap={['wrap', 'wrap', 'nowrap']}
            fontFamily={'mono'}
            fontWeight={'medium'}
            textShadow={"3px 3px 5px rgba(0, 0, 0, 0.75)"}
          >
            {VideoHeroBanner.Body}
          </Text>*/}
          <Link
            as={NavLink}
            to={VideoHeroBanner.CTA_Button_Link}
          >
            <Box
              h='30px'
            >
              <CTAButton
                Title={VideoHeroBanner.CTA_Button_Title}
              />
            </Box>
          </Link>
        </VStack>
        
      </Box>
    </Box>
  )
}

export default HeroBanner