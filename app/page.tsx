import Image from "next/image";
import { pictures } from "@/assets/pictures";
import Link from "next/link";
import { slugify } from "@/helpers/slugify";
import { chunk } from "lodash";
import sizeOf from "image-size";

export default function Home() {
  const columns = Math.ceil(pictures.length / 3);
  const imgWidth = 320;
  const picsWithDimensions = pictures.map((pic) => ({
    ...pic,
    dimensions: sizeOf(`public/pictures/${pic?.id}.jpg`),
  }));

  const pictureChunks = chunk(picsWithDimensions, columns);

  return (
    <main className="flex flex-row justify-center">
      {pictureChunks.map((chunk, index) => (
        <div key={index} className="mx-1 md:mx-2">
          {chunk.map((pic) => (
            <Link
              href={`/picture/${slugify(pic.title)}`}
              key={pic.id}
              className="block mb-2 md:mb-4"
            >
              <Image
                src={`/pictures/${pic.id}.jpg`}
                width={imgWidth}
                height={Math.round(
                  (imgWidth / pic.dimensions.width!) * pic.dimensions.height!
                )}
                alt={pic.title}
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 320px"
                quality={85}
                className="w-full"
              />
            </Link>
          ))}
        </div>
      ))}
    </main>
  );
}
