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


const routes = {
  Home: "/",
  History: "/history",
};

const Links: (keyof typeof routes)[] = ["Home", "History"];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href,children }) => (
  <Link
    px={4}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={href}
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
          GithubSearchEngine
        </Text>

        <HStack
          gap={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link} href={routes[link]}>{link}</NavLink>
          ))}
        </HStack>

        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
          variant="ghost"
        >
          {open ? (
            <Text fontSize="2xl" fontWeight="bold">
              &#10006;
            </Text>
          ) : (
            <Image src={Burgermenu} alt="Menu Icon" boxSize="24px" />
          )}
        </IconButton>
      </Flex>

      {open && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={4}>
            {Links.map((link) => (
              <NavLink key={link} href={link.toLowerCase()}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
