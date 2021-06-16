import { NextPage } from "next";
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PaginationProvider from "../providers/PaginationProvider";
import QueryProvider from "../providers/QueryProvider";

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
        <QueryProvider>
          <Component {...pageProps} />
        </QueryProvider>
      </PaginationProvider>
    </ChakraProvider>
  );
}

export default App;
