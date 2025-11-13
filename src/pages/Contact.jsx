import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { ContactData } from '../data/ContactData'
import ContactForm from '../comps/forms/ContactForm';

const Contact = () => {
  return(
    <Box
      minH={'100vh'}
      pt={'20px'}
    >
        <VStack>
          <Heading
            fontWeight={'normal'}
            fontSize={['5xl', '6xl']}
            color={"pub_layout_title_text"}
            textWrap={'wrap'}
            lineHeight={'40px'}
            textAlign={'center'}
            pb={'20px'}
            textShadow="2px 2px 1px rgba(0,0,0,0.5)"
          >
            Contact Us
          </Heading>
          <ContactForm/>
          <Text
            fontFamily={'mono'}
            color={'deep_gray'}
            fontSize={'md'}
          >
            Or
          </Text>
          <VStack
            align={'start'}
            bg={'deep_gray'}
            p={["5px 20px 5px 20px", "5px 30px 5px 30px" ,"5px 50px 5px 50px"]}
            borderRadius={'15px'}

          >
            <Box
              h='25px'
              display={'flex'}
              gap={'20px'}
            >
              <Heading
                fontWeight={'light'}
                color={'soft_wheat'}
              >
                Email:
              </Heading>
              <Link
                href={`mailto:${ContactData.Email}?subject=${encodeURIComponent(ContactData.EmailSubject)}`}
              >
                <Text
                  fontFamily={'mono'}
                  fontSize={['md', 'md', 'lg']}
                  color={'golden_wheat'}
                  _hover={{
                    color:'soft_wheat'
                  }}
                >
                  {ContactData.Email}
                </Text>
              </Link>
              
            </Box>
            
            <Box
              h='25px'
              display={'flex'}
              gap={'20px'}
            >
              <Heading
                fontWeight={'light'}
                color={'soft_wheat'}
              >
                Phone:
              </Heading>
              <Link
                href={`tel:${ContactData.PhoneNumber}`}
              >
                <Text
                  fontFamily={'mono'}
                  fontSize={['md', 'md', 'lg']}
                  color={'golden_wheat'}
                  _hover={{
                    color:'soft_wheat'
                  }}
                >
                  {ContactData.Phone}
                </Text>
              </Link>
              
            </Box>

          </VStack>
        </VStack>
    </Box>
  )
}

export default Contact