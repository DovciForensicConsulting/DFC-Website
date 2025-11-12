import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroBanner from "../comps/banners/HeroBanner";
import { WhyChooseUs } from '../data/HomeData';
import CTAButton from '../comps/buttons/CTAButton';
import CallResponseCard from '../comps/cards/CallResponseCard';
import WhatWeDoCard from '../comps/cards/WhatWeDoCard';
import ExperienceModule from '../comps/cards/ExperienceModule';
import ServicesPreviewModule from '../comps/cards/ServicesPreviewModule';

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
                bg={'golden_wheat'}
                mb={'50px'}
                position={'absolute'}
                zIndex={5}
            />
            <ServicesPreviewModule/>
            <VStack
                mt='30px'
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

            <SimpleGrid columns={1} gap={6} alignContent="center" justifyItems={'center'} minH={'500px'}>
                    {WhyChooseUs.Reasons.map((reasonData, reasonIdx) => (
                        <CallResponseCard
                            key={reasonIdx}
                            Title={reasonData.Title}
                            BodyText={reasonData.Text}
                            isHoriz={false}
                            ViewDelay={100}
                        />
                    
                    ))}
                </SimpleGrid>

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
                    mb={'15px'}
                >
                    <CTAButton
                        Title={WhyChooseUs.CTA_Title}
                        toLink={WhyChooseUs.CTA_Link}
                        Variant={2}
                    />
                </Box>
                <WhatWeDoCard
                
                />
                <ExperienceModule/>
                 
                
            </VStack>
        
        
        
    </Box>
   
  );
};

export default Home;
