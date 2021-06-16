import { Box, CircularProgress, Container } from "@chakra-ui/react";
import md5 from "md5";
import { Hero } from "model";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Header, Pagination, HeroList, QueryInput } from "../components";

export default function Page({ heroes }: { heroes: Hero[] }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Box>
        Carregando...<CircularProgress isIndeterminate></CircularProgress>
      </Box>
    );
  }
  return (
    <Box>
      <Header />
      <Box bgColor="#E5E5E5" overflow="scroll" h="70vh">
        <Container maxW="1140px">
          <QueryInput />
          <HeroList heroes={heroes} />
        </Container>
      </Box>
      <Pagination />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from(Array(10).keys()).map((num) => ({
      params: {
        page: `${num + 1}`,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ heroes: [] }, { page: string }> =
  async ({ params = { page: "1" } }) => {
    const { page } = params;
    const publicKey = process.env.MARVEL_PUBLIC ?? "";
    const privateKey = process.env.MARVEL_PRIVATE ?? "";
    const limit = process.env.MARVEL_LIMIT ?? "10";
    const offset = Number(limit) * (Number(page) - 1);
    console.log(offset, page, limit);
    const timestamp = Number(new Date());
    const hash = md5(timestamp + privateKey + publicKey);
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`
    );
    const {
      data: { results },
    } = await response.json();
    return {
      props: {
        heroes: results,
      },
      revalidate: 60 * 60 * 24,
    };
  };
