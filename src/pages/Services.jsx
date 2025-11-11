import { Box, Heading, VStack } from '@chakra-ui/react'
import { ServicesData } from '../data/ServicesData'
import ServiceCard from '../comps/cards/ServiceCard'

const Services = () => {
  return (
    <Box
      w='100%'
      mt='80px'
      mb='50px'
    >
      <VStack>
        <Heading
            fontWeight="normal"
            fontSize={['5xl', '6xl']}
            color="soft_wheat"
            textAlign="center"
            mb={['5px', '15px']}
            textShadow="2px 2px 1px rgba(0,0,0,0.5)"
        >
          Services
        </Heading>
        <VStack
          w='90%'
          gap={25}
        >
          {ServicesData.Services.map((serviceData, serviceIdx) => {
            return(
              <ServiceCard
                ServiceData={serviceData}
              />
            )
          })}
        </VStack>
      </VStack>
    </Box>
  )
}

export default Services