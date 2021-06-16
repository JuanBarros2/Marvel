import { NextPage } from "next";
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PaginationProvider from "../providers/PaginationProvider";

function App({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <PaginationProvider>
        <Component {...pageProps} />
      </PaginationProvider>
    </ChakraProvider>
  );
}

export default App;
