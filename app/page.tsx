import Image from "next/image";
import { pictures } from "@/assets/pictures";
import Link from "next/link";
import { slugify } from "@/helpers/slugify";
import { chunk } from "lodash";
import sizeOf from "image-size";
// import { useEffect } from "react";

export default function Home() {
  // const [columns, setColumns] = useState(3);
  const columns = Math.ceil(pictures.length / 3);
  const imgWidth = 300;
  const picsWithDimensions = pictures.map((pic) => ({
    ...pic,
    dimensions: sizeOf(`public/pictures/${pic?.id}.jpg`),
  }));

  const pictureChunks = chunk(picsWithDimensions, columns);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth < 640) {
  //       setColumns(1);
  //     } else {
  //       setColumns(3);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <main className="flex flex-row justify-center p-24 space-x-2">
      {pictureChunks.map((chunk, index) => (
        <div key={index} className="">
          {chunk.map((pic) => (
            <Link
              href={`/picture/${slugify(pic.title)}`}
              key={pic.id}
              className="block mb-2"
            >
              <Image
                src={`/pictures/${pic.id}.jpg`}
                width={imgWidth}
                height={
                  (imgWidth / pic.dimensions.width!) * pic.dimensions.height!
                }
                alt="sdfsdf"
              />
            </Link>
          ))}
        </div>
      ))}
    </main>
  );
}
