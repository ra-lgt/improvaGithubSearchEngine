import React from "react";
import Burgermenu from "../../assets/burger-menu.svg";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";

const Links: string[] = ["Home", "About", "Services", "Pricing", "Contact"];

interface NavLinkProps {
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children }) => (
  <Link
    px={4}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href="#"
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Text fontSize="xl" fontWeight="bold">
          ChakraNav
        </Text>

        {/* Desktop Nav Links */}
        <HStack gap={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Mobile Hamburger Icon */}
        <IconButton
  size="md"
  aria-label="Open Menu"
  display={{ md: "none" }}
  onClick={open ? onClose : onOpen}
  variant="ghost"
>
  {open ? (
    <Text fontSize="2xl" fontWeight="bold">&#10006;</Text>
  ) : (
    <Image src={Burgermenu} alt="Menu Icon" boxSize="24px" />
  )}
</IconButton>

      </Flex>

      {/* Mobile Nav Links */}
      {open && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
