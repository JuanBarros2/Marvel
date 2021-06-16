import { Flex, Image, Text } from "@chakra-ui/react";
import { Hero } from "model";
import React from "react";

export default function HeroItem({
  hero: {
    thumbnail: { path, extension },
    events,
    series,
    name,
  },
}: {
  hero: Hero;
}) {
  const InfoList = ({ items }) => (
    <Flex direction="column" w="full">
      {items.map((item, i) => (
        <Text key={i} fontSize="14px">
          {item.name}
        </Text>
      ))}
    </Flex>
  );

  return (
    <Flex
      w="full"
      justify="space-between"
      padding={5}
      bgColor="white"
      borderRadius={4}
      my={1}
      boxShadow={"0 0 5px #00000033"}
    >
      <Flex w="full">
        <Image
          w={12}
          h={12}
          src={`${path}.${extension}`}
          borderRadius={4}
          mr={6}
        />
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      <InfoList items={series.items} />
      <InfoList items={events.items} />
    </Flex>
  );
}
