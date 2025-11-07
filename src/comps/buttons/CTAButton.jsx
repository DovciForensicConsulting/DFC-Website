import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CTAButton = (props) => {
    const { Title, toLink } = props;
    return (
        <Link
            as={NavLink}
            to={toLink}
        >
            <Box
                bg={'cta_button_color'}
                pl={'20px'}
                pr={'20px'}
                pb={'3px'}
                borderRadius={'5px 5px'}
                color={'cta_button_title'}
                fontSize={'lg'}
                _hover={{
                    "color": 'cta_button_color_active',
                    "fontSize": 'xl'
                }}
            >
                <Text
                    textAlign={'center'}
                    fontFamily={'mono'}
                >
                    {Title}
                </Text>
            </Box>
        </Link>
    )
}

export default CTAButton