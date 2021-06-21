import { Flex, Text } from "@chakra-ui/layout";
import { Spacer, Image, Avatar } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex px={4} align="center" bgColor="white">
      <Image src="/logo.svg" h={6} ml={6}></Image>
      <Spacer />
      <Flex direction={["column", "column", "row"]}>
        <Text fontWeight={"bold"} textAlign="left" mr={2}>
          Juan Barros
        </Text>

        <Text>Test Front End</Text>
      </Flex>

      <Avatar
        name="Juan Barros"
        borderRadius={4}
        m={4}
        h={8}
        w={8}
        src="https://avatars.githubusercontent.com/u/11728655?v=4"
      />
    </Flex>
  );
}
