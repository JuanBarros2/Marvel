import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { usePage } from "../providers/PaginationProvider";

export default function Pagination() {
  usePage();
  const buttons = Array.from(Array(5).keys()).map((num) => (
    <Button key={num} bgColor="#167ABC">
      {num + 1}
    </Button>
  ));
  return <Center h="100px">{buttons}</Center>;
}
