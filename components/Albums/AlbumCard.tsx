"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";

export default function AlbumCard({
  title,
  userId,
  id,
}: {
  title: string;
  userId: number;
  id: number;
}) {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
   setIsClient(true);
 }, []);

 if(!isClient) return null;

  return (
    <div className="h-[40rem] flex items-center justify-center ">
      <Link href={`/albums/${id}`}>
        <PinContainer
          title={`/sociale.albums.${id}`}
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Sociale Album
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{title}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500" />
          </div>
        </PinContainer>
      </Link>
    </div>
  );
}
