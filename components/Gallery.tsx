"use client";

import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/helpers/slugify";
import Masonry from "react-masonry-css";

type ImageDimensions = {
  width?: number;
  height?: number;
};

type Picture = {
  id: string;
  title: string;
  dimensions: ImageDimensions;
};

export function Gallery({ pictures }: { pictures: Picture[] }) {
  const imgWidth = 320;
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    385: 1,
  };

  return (
    <main className="px-4">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {pictures.map((pic) => (
          <Link
            href={`/picture/${slugify(pic.title)}`}
            key={pic.id}
            className="block mb-4"
          >
            <Image
              src={`/pictures/${pic.id}.jpg`}
              width={imgWidth}
              height={Math.round(
                (imgWidth / pic.dimensions.width!) * pic.dimensions.height!
              )}
              alt={pic.title}
              loading="lazy"
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, 33vw"
              quality={85}
              className="w-full"
            />
          </Link>
        ))}
      </Masonry>
    </main>
  );
}
