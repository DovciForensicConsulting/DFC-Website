import { chakra, Spinner, Text } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';
import shouldForwardProp from '@emotion/is-prop-valid';

const MotionButton = chakra(motion.button, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const SubmitButton = ({onClick, isLoading=false, isDisabled=false}) => {
  return (
    <MotionButton
        w='90%'
        disabled={isDisabled}
        _disabled={{
          opacity: 0.6,
          filter: "grayscale(60%)",
          boxShadow: "none",
          transform: "none",
        }}
        cursor={'pointer'}
        initial={{scale: 1}}
        bg={'golden_wheat'}
        p={'5px 75px 5px 75px'}
        borderRadius={'15px'}
        _hover={{
            scale: 1.1,
            bg:'soft_wheat',
            color: 'deep_gray',
            borderColor:'golden_wheat'
        }}
        display={'flex'}
        onClick={onClick}
        type='submit'
        alignItems={'center'}
        justifyContent={'center'}
        border={'2px solid'}
        borderColor={'soft_wheat'}
    >
      {isLoading ? 
        <Spinner
          color={'deep_gray'}
        />
        :
        <Text
          fontFamily={'mono'}
          fontWeight={'bolder'}
          color={'deep_gray'}
        >
            Submit
        </Text>
      }
    </MotionButton>
  )
}

export default SubmitButton