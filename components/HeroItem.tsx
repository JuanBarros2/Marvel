import { Flex, Image, Text } from "@chakra-ui/react";
import { Hero } from "model";
import { useRouter } from "next/router";
import React from "react";

import useBreaking, { useUtilsBreakpoint } from "../hooks/useBreakpoint";

const MAX_INFO_LIST = 3;

export default function HeroItem({
  hero: {
    thumbnail: { path, extension },
    events,
    series,
    name,
    id,
  },
}: {
  hero: Hero;
}) {
  const { isBigScreen } = useUtilsBreakpoint();
  const router = useRouter();
  const InfoList = ({ items }) => (
    <Flex direction="column" w="full">
      {items
        .filter((_: any, i: number) => i + 1 <= MAX_INFO_LIST)
        .map((item: { name: string }, i: React.Key) => (
          <Text key={i} fontSize="14px">
            {item.name}
          </Text>
        ))}
    </Flex>
  );

  const redirectDetails = () => {
    router.push(`/hero/${id}`);
  };

  return (
    <Flex
      w="full"
      justify="space-between"
      padding={5}
      bgColor="white"
      borderRadius={4}
      my={1}
      boxShadow={"0 0 5px #00000033"}
      onClick={() => redirectDetails()}
      sx={{
        cursor: "pointer",
      }}
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
      {isBigScreen && (
        <>
          <InfoList items={series.items} />
          <InfoList items={events.items} />
        </>
      )}
    </Flex>
  );
}
