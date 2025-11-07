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
} from '@chakra-ui/react'
import React from 'react'
import { ServicesData } from '../data/ServicesData'
import { SiPushbullet } from 'react-icons/si'
import CTAButton from '../comps/buttons/CTAButton'

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
          textShadow={"2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5)"}
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
              <Heading
                fontWeight={'normal'}
                fontSize={['5xl', '6xl']}
                color={"pub_layout_title_text"}
                textWrap={'wrap'}
                lineHeight={'40px'}
                textAlign={'center'}
                textShadow={"2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5)"}
              >
                {servData.Title}
              </Heading>
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
                  <Box
                    h='200px'
                    w='200px'
                    borderRadius={'15px'}
                    overflow={'hidden'}
                  >
                    <AspectRatio
                      ratio={1}
                    >
                      <Image
                        h={'100%'}
                        w={'100%'}
                        src={servData.slides[0].slide}
                      />
                    </AspectRatio>
                  </Box>
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
                          <Text
                            color={'pub_layout_body_text'}
                            fontFamily={'body'}
                            fontSize={'med'}
                            maxW={'1000px'}
                            textAlign={'left'}
                            textWrap={['wrap', 'nowrap']}
                          >
                            {catData.Title}
                          </Text> 
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