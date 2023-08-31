import Image from "next/image";
import { pictures } from "@/assets/pictures";
import Link from "next/link";
import { slugify } from "@/helpers/slugify";
import { chunk } from "lodash";
// import { useEffect } from "react";

export default function Home() {
  // const [columns, setColumns] = useState(3);
  const columns = Math.ceil(pictures.length / 3);
  const pictureChunks = chunk(pictures, columns);

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
                width="200"
                height="100"
                alt="sdfsdf"
              />
            </Link>
          ))}
        </div>
      ))}
    </main>
  );
}
