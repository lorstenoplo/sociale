import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostCard({
  title,
  body,
  userId,
}: {
  title: string;
  body: string;
  userId: number;
}) {
  return (
    <div className="w-80 mx-auto relative">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={`https://xsgames.co/randomusers/assets/avatars/female/${userId}.jpg`}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={`https://picsum.photos/320/${200 + 10 * userId}`}
              alt="thumbnail"
              width={320}
              height={200 + 10 * userId}
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">{title}</h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">{body}</h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative z-10 px-6 py-2 bg-red-400 text-white font-bold rounded-xl block text-xs">
                  Comments
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="25"
      width="25"
      alt="thumbnail"
      className="rounded-full border-4 border-white"
    />
    <p>{title}</p>
  </div>
);
