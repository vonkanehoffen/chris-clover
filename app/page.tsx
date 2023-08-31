import Image from "next/image";
import { pictures } from "@/assets/pictures";
import Link from "next/link";
import { slugify } from "@/helpers/slugify";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-row flex-wrap">
        {pictures.map((pic) => (
          <Link href={`/picture/${slugify(pic.title)}`} key={pic.id}>
            <Image
              src={`/pictures/${pic.id}.jpg`}
              width="100"
              height="100"
              alt="sdfsdf"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
