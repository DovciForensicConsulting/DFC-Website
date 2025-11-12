import {
  Box,
  Field,
  FieldLabel,
  FieldErrorText,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
  InputGroup,
} from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SubmitButton from '../buttons/SubmitButton';
import DFCLogo from '../custom_icons/DFCLogo';
import CTAButton from '../buttons/CTAButton';


const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  // ---- form refs (so emailjs can read the values) ----
  const formRef = useRef(null);

  // ---- live values (for validation) ----
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ---- validation state ----
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const MAX_CHARACTERS = 1024;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // ---- validation helpers -------------------------------------------------
  const validateName = (v) => (v.trim().length >= 2 ? '' : 'Name must be at least 2 characters');
  const validatePhone = (v) => {
    const clean = v.replace(/\D/g, '');
    return clean.length === 10 ? '' : 'Enter a valid 10-digit phone number';
  };
  const validateEmail = (v) =>
    /^\S+@\S+\.\S+$/.test(v) ? '' : 'Enter a valid email address';
  const validateMessage = (v) => (v.trim().length >= 10 ? '' : 'Message must be at least 10 characters');

  // ---- run validation whenever a field changes ----------------------------
  useEffect(() => {
    const newErrors = {};

    if (touched.name) newErrors.name = validateName(name);
    if (touched.phone) newErrors.phone = validatePhone(phone);
    if (touched.email) newErrors.email = validateEmail(email);
    if (touched.message) newErrors.message = validateMessage(message);

    setErrors(newErrors);
  }, [name, phone, email, message, touched]);

  // ---- is form completely valid? -----------------------------------------
  const isFormValid = !errors.name && !errors.phone && !errors.email && !errors.message &&
    touched.name && touched.phone && touched.email && touched.message;

  // ---- submit handler ----------------------------------------------------
    const sendEmail = (e) => {
        e.preventDefault();

        // mark everything as touched so errors appear if any
        setTouched({ name: true, phone: true, email: true, message: true });

        if (!isFormValid) return; // stop if validation fails

        setIsSubmitting(true);

        emailjs
            .sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            { publicKey: PUBLIC_KEY }
            )
            .then(
            () => {
                console.log('SUCCESS!');
                setSendSuccess(true);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
            )
            .finally(() => setIsSubmitting(false));
    };
  // ------------------------------------------------------------------------
  if (sendSuccess) {
    return (
      <Box
        h="500px"
        w="500px"
        bg="deep_gray"
        borderRadius="15px"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        pt="25px"
        position="relative"
      >
        <Heading
          position="absolute"
          top={35}
          color="soft_wheat"
          fontWeight="normal"
          fontSize="5xl"
        >
          Successfully Sent!
        </Heading>

        <Box
          pl="50px"
          pr="50px"
          w="100%"
          h="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text textAlign="center" fontFamily="body" color="golden_wheat">
            Thank you for your interest in Dovci Forensic Consulting.
          </Text>

          <Box w="70%" h="100px">
            <DFCLogo
              logoWith="100%"
              LogoColor_1="#A39274"
              LogoColor_2="#DFD8C8"
              DropShadow="2px 2px 2px rgba(0,0,0,0.5)"
            />
          </Box>

          <Box display="flex" flexDir="column" alignItems="center" w="100%" h="100px">
            <Text textAlign="center" fontFamily="mono" color="soft_wheat" pb="5px">
              Check out our services while you await our response.
            </Text>
            <CTAButton Title="View Services" toLink="/services" />
          </Box>
        </Box>
      </Box>
    );
  }

  // ------------------------------------------------------------------------
  return (
    <Box w="90%" bg="deep_gray" borderRadius="15px" maxW="500px">
      <VStack pt="25px" pb="15px">
        <form ref={formRef} onSubmit={sendEmail} style={{ width: '90%', display:'flex', flexDirection:'column', alignItems:'center'}}>
          {/* ---------- NAME ---------- */}
          <Field.Root invalid={!!errors.name && touched.name} required>
            <FieldLabel color="golden_wheat" fontFamily="mono" fontWeight="bold">
              Name
            </FieldLabel>
            <Input
              name="user_name"               // <-- important for emailjs
              borderRadius="15px"
              bg="soft_wheat"
              focusRingColor="golden_wheat"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            />
            <FieldErrorText>{errors.name}</FieldErrorText>
          </Field.Root>

          {/* ---------- PHONE ---------- */}
          <Field.Root invalid={!!errors.phone && touched.phone}>
            <FieldLabel color="golden_wheat" fontFamily="mono" fontWeight="bold">
              Phone Number
            </FieldLabel>
            <Input
              name="user_phone"
              type="tel"
              borderRadius="15px"
              bg="soft_wheat"
              focusRingColor="golden_wheat"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            />
            <FieldErrorText>{errors.phone}</FieldErrorText>
          </Field.Root>

          {/* ---------- EMAIL ---------- */}
          <Field.Root invalid={!!errors.email && touched.email} required>
            <FieldLabel color="golden_wheat" fontFamily="mono" fontWeight="bold">
              Email
            </FieldLabel>
            <Input
              name="user_email"
              type="email"
              borderRadius="15px"
              bg="soft_wheat"
              focusRingColor="golden_wheat"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            />
            <FieldErrorText>{errors.email}</FieldErrorText>
          </Field.Root>

          {/* ---------- MESSAGE ---------- */}
          <Field.Root invalid={!!errors.message && touched.message} required>
            <FieldLabel color="golden_wheat" fontFamily="mono" fontWeight="bold">
              Message
            </FieldLabel>
            
            <InputGroup
                endElement={
                    <Text
                        w={'80px'}
                        textAlign={'end'}
                        position={'absolute'}
                        bottom={0}
                        right={25}
                        fontFamily={'mono'}
                        fontSize={'xs'}
                        color={'deep_gray'}
                    >
                        {message.length} / {MAX_CHARACTERS}
                    </Text>
                }
            >
                <Textarea
                    name="message"
                    borderRadius="15px 15px 0px 15px"
                    bg="soft_wheat"
                    focusRingColor="golden_wheat"
                    minH="200px"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    maxLength={MAX_CHARACTERS}
                />
            </InputGroup>
            
            <FieldErrorText>{errors.message}</FieldErrorText>
          </Field.Root>

          {/* hidden submit for emailjs (optional) */}
          <input type="submit" hidden />
          <Box
            h='15px'
          />
          <SubmitButton isLoading={isSubmitting} isDisabled={!isFormValid} />
        </form>

        
      </VStack>
    </Box>
  );
};

export default ContactForm;