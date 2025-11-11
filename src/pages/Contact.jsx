import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { ContactData } from '../data/ContactData'
import DFCLogo from '../comps/custom_icons/DFCLogo';
import ContactForm from '../comps/forms/ContactForm';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return(
    <a href={`mailto:${email}${params}`}>
      {children}
    </a>
  )
};

const Callto = ({phone, children}) => {
  return(
    <a href={`tel:${phone}`}>
      {children}
    </a>
  )
};

const Contacts = () => {
  return (
    <VStack
      pt='50px'
      minH={'100vh'}
    >
      <VStack>
        <Heading
            fontWeight={'normal'}
            fontSize={['5xl', '6xl']}
            color={"pub_layout_title_text"}
            textWrap={'wrap'}
            lineHeight={'40px'}
            textAlign={'center'}
        >
          {ContactData.Title}
        </Heading>
        <Box
          w={'80%'}
          h='10px'
          bg={'navbar_bg'}
          mt={'50px'}
          mb={'50px'}
        />
        <Box
            w={['300px', '400px', '500px']}
            alignContent={'center'}
        >
            <DFCLogo
                logoWith={'100%'}
                LogoColor_2={"#252523"}
                LogoColor_1={"#DFD8C8"}
                DropShadow={"2px 2px 2px rgba(0.0, 0.0, 0.0, 0.5)"}
            />
        </Box>
        <Box
          w='80%'
          h='10px'
          bg={'navbar_bg'}
          mt={'50px'}
          mb={'50px'}
        />
      </VStack>
        
        
        <Box>
          <VStack
            justify={'center'}
          >
            <HStack
              wrap={'nowrap'}
              w='300px'
              justify={'space-between'}
              textAlign={'center'}
            >
              <Text
                color={'pub_layout_body_text'}
                fontFamily={'body'}
                fontSize={'med'}
                maxW={'1000px'}
                textAlign={'center'}
              >
                Phone Number:
              </Text>
              <Callto
                phone={ContactData.Phone}
              >
                <Box
                  bg={'navbar_bg'}
                  pl={'20px'}
                  pr={'20px'}
                  borderRadius={'15px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  color={'{colors.soft_wheat}'}
                  cursor={'pointer'}
                  mb={'10px'}
                  _hover={{
                    "color": "{colors.golden_wheat}"
                  }}
                >
                  <Text
                    fontFamily={'mono'}
                    fontSize={'med'}
                    maxW={'1000px'}
                    textAlign={'center'}
                  >
                    {ContactData.Phone}
                  </Text>  
                </Box>
                
              </Callto>
              
            </HStack>
            
            
            <HStack
              wrap={'nowrap'}
              w='350px'
              justify={'space-between'}
              textAlign={'center'}
            >
              <Text
                color={'pub_layout_body_text'}
                fontFamily={'body'}
                fontSize={'med'}
                maxW={'1000px'}
                textAlign={'center'}
              >
                Email:
              </Text>
              <Mailto
                email={ContactData.Email}
                subject={ContactData.EmailSubject}
                body={ContactData.EmailBody}
              >
                <Box
                  bg={'navbar_bg'}
                  pl={'20px'}
                  pr={'20px'}
                  borderRadius={'15px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  color={'{colors.soft_wheat}'}
                  cursor={'pointer'}
                  _hover={{
                    "color": "{colors.golden_wheat}"
                  }}
                >
                  <Text
                    fontFamily={'mono'}
                    fontSize={'med'}
                    maxW={'1000px'}
                    textAlign={'center'}
                  >
                    {ContactData.Email}
                  </Text>
                </Box>    
            </Mailto>            
            </HStack>
            
          </VStack>
        </Box>
        
    </VStack>
  )
}


const Contact = () => {
  return(
    <Box
      minH={'100vh'}
      mt='75px'
    >
        <VStack>
          <Heading
            fontWeight={'normal'}
            fontSize={['5xl', '6xl']}
            color={"pub_layout_title_text"}
            textWrap={'wrap'}
            lineHeight={'40px'}
            textAlign={'center'}
          >
            Contact Us
          </Heading>
          <ContactForm/>
        </VStack>
    </Box>
  )
}

export default Contact