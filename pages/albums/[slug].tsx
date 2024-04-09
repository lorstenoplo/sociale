import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

export default function BentoGridDemo({
  photos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return (
      <div>
        <Navbar />
        <BentoGrid className="max-w-4xl mx-auto py-6">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={'Loading...'}
              description={''}
              header={item.header}
              icon={item.icon}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <BentoGrid className="max-w-4xl mx-auto py-6">
        {photos?.map((photo, i) => (
          <BentoGridItem
            key={i}
            title={photo.title}
            description={`Album ID: ${slug}`}
            header={<Image src={photo.url} width={100} height={100} alt="" />}
            icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
            className={i % 6 === 0  ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getServerSideProps: GetServerSideProps<{photos:Photo[]}> = async (context) => {
  const { slug } = context.params!;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${slug}`
  );
  const photos: Photo[] = await res.json();
  return {
    props: {
      photos,
    },
  };
};
