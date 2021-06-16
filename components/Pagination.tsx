import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Box, Button, Center, SystemStyleObject } from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import React from "react";
import {
  useDispatchPagination,
  usePage,
} from "../providers/PaginationProvider";

const MAX_BUTTON_NUMBER = 5;

export default function Pagination() {
  const { page, total } = usePage();
  const dispatch = useDispatchPagination();
  const updatePage = (value) => {
    dispatch({ type: "update", payload: value });
  };
  const windowOffset = Math.ceil(page / MAX_BUTTON_NUMBER) - 1;

  const styleButton = (num: number): SystemStyleObject => ({
    bg: page == num ? "#167ABC" : "#F5F5F5 0% 0% no-repeat padding-box;",
    color: page == num ? "white" : "#555555",
    mx: 2,
  });

  const Buttons = Array.from(
    Array(Math.min(MAX_BUTTON_NUMBER, total)).keys()
  ).map((num) => {
    const value = windowOffset * MAX_BUTTON_NUMBER + num + 1;
    return (
      <Button
        key={num}
        sx={styleButton(value)}
        onClick={() => updatePage(value)}
      >
        {value}
      </Button>
    );
  });
  const ActionButton = ({ children, ...props }) => (
    <Button bg="transparent" mx={1} px={"0"} {...props}>
      {children}
    </Button>
  );
  const lastPageWithOffset = (windowOffset + 1) * MAX_BUTTON_NUMBER;
  const firstPageWithOffset = windowOffset * MAX_BUTTON_NUMBER + 1;
  return (
    <Center h="100px">
      {page != firstPageWithOffset && (
        <ActionButton onClick={() => updatePage(firstPageWithOffset)}>
          <ArrowLeftIcon boxSize={2} px={"0"} />
        </ActionButton>
      )}
      {page != 1 && (
        <ActionButton onClick={() => updatePage(page - 1)}>
          <ChevronLeftIcon />
        </ActionButton>
      )}
      {Buttons}

      {page < total && (
        <ActionButton onClick={() => updatePage(page + 1)}>
          <ChevronRightIcon />
        </ActionButton>
      )}
      {page < total && page != Math.min(lastPageWithOffset, total) && (
        <ActionButton
          onClick={() => {
            updatePage(Math.min(lastPageWithOffset, total));
          }}
        >
          <ArrowRightIcon boxSize={2} px={"0"} />
        </ActionButton>
      )}
    </Center>
  );
}
