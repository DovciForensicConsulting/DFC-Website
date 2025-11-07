import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  Skeleton
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ServicesData } from '../data/ServicesData'
import { SiPushbullet } from 'react-icons/si'
import CTAButton from '../comps/buttons/CTAButton'

const LazyImage = ({ src, alt, imageHeight = '200px', imageWidth = '200px', borderRadius = '15px' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Box
      position="relative"
      h={imageHeight}
      w={imageWidth}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      {/* Show skeleton until image loads or fails */}
      <Skeleton
        position="absolute"
        inset={0}
        isLoaded={imageLoaded || imageError}
        borderRadius={borderRadius}
        fadeDuration={0.4}
      />

      {/* Image with error handling */}
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        objectFit="cover"
        h="100%"
        w="100%"
        borderRadius={borderRadius}
        opacity={imageLoaded && !imageError ? 1 : 0}
        transition="opacity 0.3s ease"
        onLoad={() => {
          console.log('Image loaded:', src); // Debug
          setImageLoaded(true);
        }}
        onError={(e) => {
          console.error('Image failed to load:', src);
          setImageError(true);
        }}
        // Ensure image is in DOM even if hidden
        position="absolute"
        inset={0}
      />
    </Box>
  );
};

type LazyHeadingProps = React.ComponentProps<typeof Heading> & {
  isLoaded?: boolean;
  children: React.ReactNode;
};

const LazyHeading = ({
  children,
  isLoaded = true,
  ...headingProps
}: LazyHeadingProps) => {
  // When already loaded just render the heading – no skeleton at all
  if (isLoaded) {
    return (
      <Heading
        {...headingProps}
        mx="auto"
        maxW="100%"
        wordBreak="break-word"
      >
        {children}
      </Heading>
    );
  }

  // Skeleton only when NOT loaded
  return (
    <Skeleton
      borderRadius="md"
      width="100%"
      height="3rem"               // <-- give it a height!
      fadeDuration={0.4}
    >
      <Heading
        {...headingProps}
        opacity={0}               // keep the real heading hidden while skeleton shows
        mx="auto"
        maxW="100%"
        wordBreak="break-word"
      >
        {children}
      </Heading>
    </Skeleton>
  );
};

type LazyTextProps = TextProps & {
  isLoaded?: boolean;   // false → show skeleton
  children: React.ReactNode;
};

/**
 * Renders a Chakra <Text> with a skeleton placeholder.
 * The skeleton height is automatically sized to the hidden text,
 * so you never have to guess "3rem" or "1.5rem".
 */
const LazyText = ({
  children,
  isLoaded = true,
  ...textProps
}: LazyTextProps) => {
  // When already loaded → just render the text (no extra wrapper)
  if (isLoaded) {
    return (
      <Text {...textProps} wordBreak="break-word">
        {children}
      </Text>
    );
  }

  // Skeleton + hidden real text (so skeleton measures the correct height)
  return (
    <Skeleton
      borderRadius="md"
      width="100%"
      fadeDuration={0.4}
      // height is derived from the hidden child → no hard-coded value
    >
      <Text
        {...textProps}
        visibility="hidden"   // keeps layout, but invisible
        wordBreak="break-word"
      >
        {children}
      </Text>
    </Skeleton>
  );
};

const Services = () => {
  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      pl={'50px'}
      pr={'50px'}
      pt='50px'
      pb={'50px'}
    >
      <VStack>
        <Heading
          fontWeight={'normal'}
          fontSize={['5xl', '6xl']}
          color={"pub_layout_title_text"}
          textWrap={'wrap'}
          lineHeight={'40px'}
          textAlign={'center'}
          textShadow={"2px 2px 2px rgba(0, 0, 0, 0.5)"}
        >
          {ServicesData.Title}
        </Heading>
        <Text
          color={'pub_layout_body_text'}
          fontFamily={'body'}
          fontSize={'med'}
          ml={['50px', '100px']}
          mr={['50px', '100px']}
          maxW={'1000px'}
          textAlign={'center'}
        >
          {ServicesData.Text}
        </Text>
      </VStack>

      <Box
        w='80%'
        h='10px'
        bg={'navbar_bg'}
        mt={'50px'}
        mb={'50px'}
      />

      <VStack
        gap={50}
      >
        {ServicesData.Services.map((servData, servIdx) => {
          return(
            <VStack
              gap={25}
            >
              <LazyHeading
                isLoaded={true}
                fontWeight="normal"
                fontSize={['5xl', '6xl']}
                color="pub_layout_title_text"
                lineHeight="40px"
                textAlign="center"
                textShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
                // Add max width to prevent overflow on small screens
                maxW={['100%', '800px']}
                mx="auto"
              >
                {servData.Title}
              </LazyHeading>
              
              <SimpleGrid
                columns={[1, 1, 2]}
                gap={[25]}
                pl={'50px'}
                pr={'50px'}
              >
                <GridItem
                  display={'flex'}
                  alignContent={'center'}
                  justifyContent={'center'}
                >
                  <LazyImage
                    imageHeight={'200px'}
                    imageWidth={'200px'}
                    borderRadius={'15px'}
                    src={servData.slides[0].slide}
                    alt={servData.Title}
                  />
                </GridItem>
                
                <VStack
                  alignContent={'space-around'}
                >
                  {servData.Categories.map((catData, catIdx) => {
                    return(
                      <HStack
                        w='300px'
                      >
                          <Icon
                            as={SiPushbullet}
                          />
                          <LazyText
                            color={'pub_layout_body_text'}
                            fontFamily={'body'}
                            fontSize={'med'}
                            maxW={'1000px'}
                            textAlign={'left'}
                            textWrap={['wrap', 'nowrap']}
                          >
                            {catData.Title}
                          </LazyText> 
                      </HStack>                      
                    )
                  })}
                </VStack>
              </SimpleGrid>
              <Box
                h='30px'
              >
                  <CTAButton
                    Title={"Contact Us"}
                    toLink={"/contact"}
                  />
              </Box>
              <Box
                w='100%'
                h='10px'
                bg={'navbar_bg'}
                mt={'25px'}
              />
            </VStack>
          )
        })}
        
      </VStack>
    </Box>
  )
}

export default Services