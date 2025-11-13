import { chakra, Text } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import shouldForwardProp from '@emotion/is-prop-valid';


const MotionNavLink = chakra(motion(NavLink), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

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
    2: {
      bg: 'deep_gray',
      bg_hover: 'soft_wheat',
      text_color: 'soft_wheat',
      text_hoverColor: 'deep_gray',
      borderColor: 'deep_gray',
      border_hoverColor: 'deep_gray',
      enable_border: false,
    },
  };

  const style = variants[Variant] || variants[0]; // fallback to 0

  return (
    <MotionNavLink
      to={toLink}
      minH="40px"
      bg={style.bg}
      color={style.text_color}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="5px 50px"
      borderRadius="15px"
      border={style.enable_border ? '2px solid' : '0px'}
      borderColor={style.border_hoverColor}
      cursor="pointer"
      zIndex={10}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      _hover={{
        bg: style.bg_hover,
        color: style.text_hoverColor,
        border: '2px solid',
        borderColor: style.border_hoverColor,
        textDecoration: 'none',
      }}
    >
      <Text fontFamily="body">{Title}</Text>
    </MotionNavLink>
  );
};

export default CTAButton

