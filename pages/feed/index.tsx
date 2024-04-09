import PostCard from "@/components/Feed/Card";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function Feed({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Navbar />
      <Box display={'flex'} flexWrap={'wrap'} py={8} gridGap={6}>  
      {posts?.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} />
      ))}
      </Box>
    </div>
  );
}

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  // Pass data to the page via props
  return { props: { posts } };
}) satisfies GetServerSideProps<{ posts: Post[] }>;
