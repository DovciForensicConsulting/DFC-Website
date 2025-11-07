// src/components/Footer.jsx
import React from "react";
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
  FiMapPin,
  FiShield,
  FiAward,
  FiFileText,
} from "react-icons/fi";
import { ROOT, SERVICES, CONTACT } from "../../lib/Routes";
import { ContactData } from "../../data/ContactData";



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

            <HStack spacing={3} color="navbar_navlink">
              <Icon as={FiShield} />
              <Text fontFamily={'mono'} fontWeight="medium">ISO 17025 Accredited Methods</Text>
            </HStack>
          </VStack>

          {/* 2. Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" color="navbar_navlink_active" fontFamily={'mono'}>
              Quick Links
            </Text>
            <Link as={RouterLink} to={ROOT} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_acticve" }}>
              Home
            </Link>
            <Link as={RouterLink} to={SERVICES} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_acticve" }}>
              Services
            </Link>
            <Link as={RouterLink} to={CONTACT} fontFamily={'mono'} color={'navbar_navlink'} _hover={{ color: "navbar_navlink_acticve" }}>
              Contact
            </Link>
          </VStack>

          {/* 3. Contact Info */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" color="navbar_navlink_active">
              Contact Us
            </Text>
            <HStack>
              <Icon as={FiMail} color="navbar_navlink" />
              <Link href={`mailto:${ContactData.Email}`} color="navbar_navlink">
                {ContactData.Email}
              </Link>
            </HStack>
            <HStack>
              <Icon as={FiPhone} color="navbar_navlink" />
              <Link href={`tel:${ContactData.Phone}`} color="navbar_navlink">
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
              <Icon as={FiShield} color="navbar_navlink" />
              <Text>Peer-Reviewed Publications</Text>
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