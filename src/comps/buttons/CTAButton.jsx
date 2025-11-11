import { Box, chakra, Link, Text } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import shouldForwardProp from '@emotion/is-prop-valid';

{/*const CTAButton = (props) => {
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
}*/}

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const CTAButton = ({ Title, toLink, Variant = 0 }) => {
  // Define styles based on Variant
  const variants = {
    0: {
      bg: 'soft_wheat',
      bg_hover: 'golden_wheat',
      text_color: 'deep_gray',
      text_hoverColor: 'deep_gray',
      borderColor: 'deep_gray',
      border_hoverColor: 'deep_gray',
      enable_border: false,
    },
    1: {
      bg: 'deep_gray',
      bg_hover: 'golden_wheat',
      text_color: 'soft_wheat',
      text_hoverColor: 'deep_gray',
      borderColor: 'deep_gray',
      border_hoverColor: 'deep_gray',
      enable_border: false,
    },
  };

  const style = variants[Variant] || variants[0]; // fallback to 0

  return (
    <Link as={NavLink} to={toLink} _hover={{ textDecoration: 'none' }}>
      <MotionBox
        minH={'40px'}
        bg={style.bg}
        color={style.text_color}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="5px 50px"
        borderRadius="15px"
        border= {style.enable_border ? '2px solid' : '0px'} 
        borderColor= {style.border_hoverColor}
        cursor="pointer"
        zIndex={10}
        initial={{ scale: 1 }}
        _hover={{
          scale: 1.1,
          bg: style.bg_hover,
          color: style.text_hoverColor,
          border: '2px solid',
          borderColor: style.border_hoverColor,
          
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Text fontFamily="body">{Title}</Text>
      </MotionBox>
    </Link>
  );
};

export default CTAButton

