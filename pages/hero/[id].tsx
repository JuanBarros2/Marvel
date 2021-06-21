import { Box, Container, Flex } from "@chakra-ui/react";
import { Hero } from "model";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Header } from "../../components";
import HeroDetails from "../../components/HeroDetails";
import { getMarvelKeyParams } from "../../utils/getMarvelKeyParams";

export default function HeroPage({ hero }: { hero: Hero }) {
  const { isFallback } = useRouter();
  return (
    <Flex h="100vh" direction="column" bgColor="#E5E5E5 ">
      <Header />
      <Container maxW="1140px">
        {!isFallback && <HeroDetails hero={hero} />}
      </Container>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const limit = process.env.MARVEL_LIMIT ?? "10";
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?${getMarvelKeyParams()}&limit=${limit}`
  );
  const {
    data: { results },
  } = await response.json();
  const paths = results.map((item: { id: number }) => ({
    params: { id: `${item.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ hero: Hero }> = async ({
  params,
}) => {
  const { id } = params;
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?${getMarvelKeyParams()}`;
  const response = await fetch(url);
  const {
    data: { results },
  } = await response.json();

  return {
    props: {
      hero: results[0],
    },
  };
};
