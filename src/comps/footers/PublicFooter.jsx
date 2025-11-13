// src/components/Footer.jsx
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Separator, // ← Correct import (was Divider)
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiShield,
  FiAward,
  FiFileText,
} from "react-icons/fi";
import { ROOT, SERVICES, CONTACT } from "../../lib/Routes";
import { ContactData } from "../../data/ContactData";
import { IoDocumentText } from "react-icons/io5";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      
      bg="navbar_bg"
      color="navbar_navlink"
      py={{ base: 12, md: 16 }}
      fontSize="sm"
      borderTop="1px solid"
      borderColor="navbar_navlink_active"
      display={['none', 'none', 'unset']}
    >
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 8, md: 10 }}
          alignItems="start"
        >
          {/* 1. Company Info */}
          <VStack align="start" spacing={4}>
            <Heading
              fontSize="lg"
              fontWeight="normal"
              color="navbar_navlink_active"
              letterSpacing="tight"
            >
              Dovci Forensic Consulting
            </Heading>
            <Text maxW="sm" lineHeight="tall" fontFamily={'mono'}>
              Independent forensic science firm specializing in firearms
              examination, 3D crime scene reconstruction, and courtroom
              visualization.
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" color="navbar_navlink_active" fontFamily={'mono'}>
              Quick Links
            </Text>
            <Link as={RouterLink} to={ROOT} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_active" }}>
              Home
            </Link>
            <Link as={RouterLink} to={SERVICES} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_active" }}>
              Services
            </Link>
            <Link as={RouterLink} to={CONTACT} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_active" }}>
              Contact
            </Link>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" color="navbar_navlink_active">
              Contact Us
            </Text>
            <HStack>
              <Icon as={FiMail} color="navbar_navlink" />
              <Link href={`mailto:${ContactData.Email}`} color="navbar_navlink" aria-label={`Email: ${ContactData.Email}`}>
                {ContactData.Email}
              </Link>
            </HStack>
            <HStack>
              <Icon as={FiPhone} color="navbar_navlink" />
              <Link href={`tel:${ContactData.Phone}`} color="navbar_navlink" aria-label={`Phone: ${ContactData.Phone}`}>
                {ContactData.Phone}
              </Link>
            </HStack>
          </VStack>

          {/* 4. Credentials */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" color="navbar_navlink_active">
              Credentials
            </Text>
            <HStack>
              <Icon as={FiAward} color="navbar_navlink" />
              <Text>25+ Years Forensic Lab Experience</Text>
            </HStack>
            <HStack>
              <Icon as={FiFileText} color="navbar_navlink" />
              <Text>Court-Qualified Expert Witness</Text>
            </HStack>
            <HStack>
              <Icon as={IoDocumentText} color="navbar_navlink" />
              <Text>Curriculum Vitae Available Upon Request</Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Horizontal Separator */}
        <Separator my={1} borderColor="navbar_navlink_active" />

        {/* Bottom Bar */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={4}
          fontSize="xs"
          color="navbar_navlink"
        >
          <Text>
            © {currentYear} Dovci Forensic Consulting. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}