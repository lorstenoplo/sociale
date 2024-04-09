import AlbumHero from "@/components/Albums/AblumHero";
import AlbumCard from "@/components/Albums/AlbumCard";
import Navbar from "@/components/Navbar";
import { Box, Grid } from "@chakra-ui/react";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export default function Albums({
  albums,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="relative">
      <Navbar />
      <AlbumHero />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        gap={6}
      >
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            title={album.title}
            userId={album.userId}
          />
        ))}
      </Grid>
    </div>
  );
}

type Album = {
  id: number;
  userId: number;
  title: string;
};

export const getStaticProps = (async () => {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums: Album[] = await res.json();
  // Pass data to the page via props
  return { props: { albums } };
}) satisfies GetStaticProps<{ albums: Album[] }>;
