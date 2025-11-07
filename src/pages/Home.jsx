import { AspectRatio, Box, Heading, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import HeroBanner from "../comps/banners/HeroBanner";
import { Experience, OurDifference, WhatWeDo, WhyChooseUs } from '../data/HomeData';
import CTAButton from '../comps/buttons/CTAButton';
import { FiAward, FiFileText, FiShield } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { SiPushbullet } from 'react-icons/si';

const Home = () => {
  return (
    <Box
        minH={'100vh'}
    >
            <HeroBanner
                height={['250px' ,'350px', '500px']}
            />
            <Box
                w='100%'
                h={'10px'}
                bg={'navbar_bg'}
                mb={'50px'}
            />
            <VStack
                gap={5}
                pb={'50px'}
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
                    {WhyChooseUs.Title}
                </Heading>

                <VStack
                    align="start"
                    spacing={3}
                    color={'pub_layout_body_text'}
                    fontFamily={'body'}
                    fontSize={'med'}
                >
                    <HStack>
                        <Icon as={FiAward} size={'lg'} />
                        <Text>25+ Years Forensic Lab Experience</Text>
                    </HStack>
                        <HStack>
                            <Icon as={FiFileText} size={'lg'} />
                            <Text>Court-Qualified Expert Witness</Text>
                        </HStack>
                        <HStack>
                            <Icon as={FiShield} size={'lg'} />
                            <Text>Peer-Reviewed Publications</Text>
                    </HStack>
                </VStack>

                <Text
                    color={'pub_layout_body_text'}
                    fontFamily={'body'}
                    fontSize={'med'}
                    ml={['50px', '100px']}
                    mr={['50px', '100px']}
                    maxW={'1000px'}
                    textAlign={'center'}
                >
                    {WhyChooseUs.Text}
                </Text>
                
                <Box
                    h='25px'
                >
                    <CTAButton
                        Title={WhyChooseUs.CTA_Title}
                        toLink={WhyChooseUs.CTA_Link}
                    />
                </Box>
                <Box
                    w='80%'
                    h='10px'
                    bg={'navbar_bg'}
                    mt='50px'
                    mb={'50px'}
                />
                <VStack
                    gap={5}
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
                        {OurDifference.Title}
                    </Heading>
                    <HStack
                        wrap={'wrap'}
                        justify={'center'}
                        gap={[25, 25, 30, 50]}
                        pl={'50px'}
                        pr={'50px'}
                    >
                        {OurDifference.Media.map((cardData, cardIdx) => {
                            return(
                                <Box
                                    id={cardIdx}
                                    bg={'card1_bg'}
                                    w={'300px'}
                                    h='300px'
                                    borderRadius={'15px 15px'}
                                >
                                    <VStack
                                        justify={'space-between'}
                                        h='100%'
                                        pb='10px'
                                    >
                                        <Heading
                                            textAlign={'center'}
                                            color={'card1_title'}
                                            fontWeight={'normal'}
                                            pt={'10px'}
                                            pl={'20px'}
                                            pr={'20px'}
                                        >
                                            {cardData.Caption}
                                        </Heading>
                                        <Box
                                            bg={'white'}
                                            w='80%'
                                            h='200px'
                                            overflow={'hidden'}
                                            objectFit={'contain'}
                                        >
                                            <AspectRatio
                                                ratio={1}
                                                maxW="100%"
                                                maxH="100%"
                                                mx={'auto'}
                                            >
                                                <Image
                                                    src={cardData.ThumbnailSource}
                                                    objectFit="contain"
                                                />
                                            </AspectRatio>
                                        </Box>
                                        <Box
                                            h='30px'
                                        >
                                            <CTAButton
                                                Title={cardData.CTATitle}
                                                toLink={cardData.CTALink}
                                            />
                                        </Box>
                                        
                                    </VStack>
                                    
                                </Box>
                            )
                        })}  
                    </HStack>
                    
                </VStack> 
                <Box
                    w='80%'
                    h='10px'
                    bg={'navbar_bg'}
                    mt={'50px'}
                    mb={'50px'}
                /> 
                <VStack
                    w='80%'
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
                        {Experience.Title}
                    </Heading>
                    {Experience.Experiences.map((experienceData, experienceIdx) => {
                        return(
                            <Box
                                id={experienceIdx}
                                w={['400px', '500px']}
                                pl={'50px'}
                                pr={'50px'}
                            >
                                <HStack
                                    justify={'left'}
                                    align={'center'}
                                >
                                    <Icon
                                        as={SiPushbullet}
                                    />
                                    <Text
                                        fontFamily={'body'}
                                    >
                                        {experienceData.yearsExp} Years {experienceData.expTitle}
                                    </Text>
                                </HStack>
                            </Box>
                        )
                    })}
                </VStack>                   
                     
                <Box
                    w='80%'
                    h='10px'
                    bg={'navbar_bg'}
                    mt={'50px'}
                    mb={'50px'}
                /> 
                <VStack
                    gap={5}
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
                        {WhatWeDo.Title}
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
                        {WhatWeDo.Text}
                    </Text>
                </VStack>
                <HStack
                    wrap={'wrap'}
                    justify={'space-evenly'}
                    gap={5}
                    maxW={'1000px'}
                >
                    {WhatWeDo.List.map((serviceTitle, serviceIdx) => {
                        return(
                            <Box
                                id={serviceIdx}
                                bg={'{colors.soft_wheat}'}
                                borderRadius={'15px 15px'}
                                style={{
                                    "filter": "drop-shadow(2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5))"
                                }}
                            >
                                <HStack
                                    pl={'20px'}
                                    pr={'20px'}
                                    pt={'10px'}
                                    pb={'10px'}
                                    color={'{color.deep_gray}'}
                                    fontFamily={'body'}
                                    fontSize={'med'}
                                    textAlign={'center'}
                                >
                                    <Icon
                                        as={FaCheck}
                                        fill={'{colors.golden_wheat}'}
                                    />
                                    <Text>
                                        {serviceTitle}
                                    </Text>
                                </HStack>
                            </Box>
                        )
                    })}
                </HStack>
                <HStack
                    mt={'50px'}
                    gap={50}
                    w={'500px'}
                    justify={'center'}
                >
                    <Box
                        h='30px'
                        w='150px'
                    >
                        <CTAButton
                            Title={WhatWeDo.CTA1_Title}
                            toLink={WhatWeDo.CTA1_Link}
                        />
                    </Box>
                    <Box
                        h='30px'
                    >
                        <CTAButton
                            Title={WhatWeDo.CTA2_Title}
                            toLink={WhatWeDo.CTA2_Link}
                        />
                    </Box>
                </HStack>
            </VStack>
        
        
        
    </Box>
   
  );
};

export default Home;

//import {
//  Box,
//  Container,
//  VStack,
//  Heading,
//  Text,
//  Button,
//  SimpleGrid,
//  Image,
//  Link,
//  Grid,
//  GridItem,
//  HStack,
//  Icon,
//} from "@chakra-ui/react";
//import { Link as RouterLink } from "react-router-dom";
//
//
//import { SERVICES, CONTACT } from "../lib/Routes";
//import HeroBanner from "../comps/banners/HeroBanner";
//import { WhatWeDo, WhyChooseUs } from "../data/HomeData";
//import { FiExternalLink } from "react-icons/fi";

//export default function Home() {
//  return (
//    <>
//      {/* HERO BANNER */}
//      <HeroBanner/>
//
//      {/* WHY CHOOSE US */}
//      <Box py={{ base: 16, md: 24 }} bg="gray.50">
//        <Container maxW="container.xl">
//          <VStack spacing={12}>
//            <VStack spacing={4} textAlign="center" maxW="3xl" mx="auto">
//              <Text
//                fontSize="sm"
//                fontWeight="bold"
//                color="primary"
//                textTransform="uppercase"
//                letterSpacing="wider"
//              >
//                Why Partner With Us
//              </Text>
//              <Heading as="h2" size="2xl" color="gray.900">
//                Science. Rigor. Results.
//              </Heading>
//              <Text color="gray.700" fontSize="lg">
//                {WhyChooseUs.Text}
//              </Text>
//            </VStack>
//
//            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
//              {WhyChooseUs.Media.map((item, i) => (
//                <Link
//                  key={i}
//                  href={item.Link}
//                  isExternal={item.Link.startsWith("http")}
//                  _hover={{ textDecoration: "none" }}
//                >
//                  <Box
//                    bg="white"
//                    rounded="lg"
//                    overflow="hidden"
//                    boxShadow="lg"
//                    transition="all 0.3s"
//                    _hover={{
//                      boxShadow: "xl",
//                      transform: "translateY(-6px)",
//                    }}
//                  >
//                    <Image
//                      src={item.ThumbnailSource}
//                      alt={item.Caption}
//                      objectFit="cover"
//                      h="200px"
//                      w="full"
//                    />
//                    <Box p={5}>
//                      <HStack justify="space-between" align="center">
//                        <Text fontWeight="semibold" color="gray.900">
//                          {item.Caption}
//                        </Text>
//                        {item.Link.startsWith("http") && (
//                          <Icon as={FiExternalLink} color="primary" />
//                        )}
//                      </HStack>
//                    </Box>
//                  </Box>
//                </Link>
//              ))}
//            </SimpleGrid>
//          </VStack>
//        </Container>
//      </Box>
//
//      {/* WHAT WE DO */}
//      <Box py={{ base: 16, md: 24 }} bg="white">
//        <Container maxW="container.xl">
//          <VStack spacing={12}>
//            <VStack spacing={4} textAlign="center" maxW="3xl" mx="auto">
//              <Text
//                fontSize="sm"
//                fontWeight="bold"
//                color="primary"
//                textTransform="uppercase"
//                letterSpacing="wider"
//              >
//                Our Capabilities
//              </Text>
//              <Heading as="h2" size="2xl" color="gray.900">
//                What We Do
//              </Heading>
//              <Text color="gray.700" fontSize="lg">
//                {WhatWeDo.Text}
//              </Text>
//            </VStack>
//
//            <Grid
//              templateColumns={{
//                base: "repeat(2, 1fr)",
//                md: "repeat(3, 1fr)",
//                lg: "repeat(4, 1fr)",
//              }}
//              gap={4}
//              w="full"
//            >
//              {WhatWeDo.List.map((service, i) => (
//                <GridItem
//                  key={i}
//                  bg="gray.50"
//                  p={4}
//                  rounded="md"
//                  border="1px solid"
//                  borderColor="gray.200"
//                  textAlign="center"
//                  fontWeight="medium"
//                  color="gray.800"
//                  fontSize="sm"
//                  cursor={'auto'}
//                  _hover={{
//                    bg: "primary",
//                    color: "gray.800",
//                    borderColor: "primary",
//                  }}
//                  transition="all 0.2s"
//                >
//                  {service}
//                </GridItem>
//              ))}
//            </Grid>
//          </VStack>
//        </Container>
//      </Box>
//
//      {/* FINAL CTA */}
//      <Box bg="primary" color="white" py={16}>
//        <Container maxW="container.xl" textAlign="center">
//          <VStack spacing={6}>
//            <Heading as="h2" size="xl" textShadow="0 2px 4px rgba(0,0,0,0.3)">
//              Ready to Secure the Truth?
//            </Heading>
//            <Text fontSize="lg" maxW="2xl" mx="auto" opacity={0.95}>
//              Contact us today for a confidential consultation. Your case
//              deserves precision.
//            </Text>
//            <Button
//              as={RouterLink}
//              to={CONTACT}
//              size="lg"
//              bg="secondary"
//              color="white"
//              fontWeight="bold"
//              px={10}
//              _hover={{ bg: "secondary/90" }}
//            >
//              Get Started
//            </Button>
//          </VStack>
//        </Container>
//      </Box>
//    </>
//  );
//}