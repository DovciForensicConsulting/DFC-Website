import { Box, Button, Input, InputGroup, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactForm = () => {
  return (
    <Box
        w='80%'
        bg={'deep_gray'}
        borderRadius={'15px'}
    >
        <VStack>
            <form>
                <InputGroup>
                    
                    <Input>
                    </Input>
                </InputGroup>
                
            </form>
            <Button>
                Submit
            </Button>
        </VStack>
    </Box>
  )
}

export default ContactForm