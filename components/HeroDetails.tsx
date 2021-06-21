import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Hero } from "model";
import React from "react";

export default function HeroDetails({
  hero: {
    name,
    series,
    events,
    thumbnail: { extension, path },
    description,
  },
}: {
  hero: Hero;
}) {
  return (
    <Box bgColor="#E5E5E5 ">
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="10px"
        borderWidth={1}
        borderRadius="md"
        overflow="hidden"
        bgColor="white"
        my={4}
        pb={4}
      >
        <Image src={path + "." + extension} />
        <Flex direction="column" mx={8} my={4} align="center" justify="center">
          <Text as="h2" fontWeight="bold" fontSize="lg">
            {name}
          </Text>
          <Text fontStyle="oblique">{description}</Text>
        </Flex>
        <Box mx={8} my={4}>
          <Text fontWeight="bold">Lista de Séries</Text>
          <List>
            {series.items.map((serie) => (
              <ListItem key={serie.name}>{serie.name}</ListItem>
            ))}
          </List>
        </Box>
        <Box mx={8} my={4} w="auto">
          <Text fontWeight="bold">Lista de Eventos</Text>
          <List>
            {events.items.map((event) => (
              <ListItem key={event.name}>{event.name}</ListItem>
            ))}
          </List>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
