import { Container, VStack, Heading, SimpleGrid, Box, Image, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const tshirts = [
    { id: 1, name: "Cosmic Voyage", price: "$29.99", imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBhcnQlMjB0c2hpcnR8ZW58MHx8fHwxNzE1NDEzNDAzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Abstract Art", price: "$34.99", imageUrl: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHRzaGlydHxlbnwwfHx8fDE3MTU0MTM0MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Nature Lover", price: "$27.99", imageUrl: "https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBhcnQlMjB0c2hpcnR8ZW58MHx8fHwxNzE1NDEzNDA1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Urban Jungle", price: "$32.99", imageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFydCUyMHRzaGlydHxlbnwwfHx8fDE3MTU0MTM0MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Cool Art T-Shirts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {tshirts.map((tshirt) => (
            <Box key={tshirt.id} p={5} shadow="md" borderWidth="1px">
              <Image src={tshirt.imageUrl} alt={tshirt.name} borderRadius="md" />
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {tshirt.name}
              </Text>
              <Text mt={2}>{tshirt.price}</Text>
              <Button rightIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={3}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
