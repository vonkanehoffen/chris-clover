import { pictures } from "@/assets/pictures";
import { slugify } from "@/helpers/slugify";
import Image from "next/image";
import sizeOf from "image-size";
import Link from "next/link";

export async function generateStaticParams() {
  return pictures.map((pic) => ({
    slug: slugify(pic.title),
  }));
}

export default function Picture({ params }: { params: { slug: string } }) {
  const meta = pictures.find((pic) => slugify(pic.title) === params.slug);

  if (!meta) return <div>Not found</div>;
  const dimensions = sizeOf(`public/pictures/${meta?.id}.jpg`);

  // todo: limit to 100vh
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Image
          src={`/pictures/${meta.id}.jpg`}
          width={dimensions.width}
          height={dimensions.height}
          alt={meta.title}
        />
      </Link>
      <h1 className="text-xl my-8 mb-4">{meta.title}</h1>
      <h4 className="mb-4 text-slate-500">{meta.description}</h4>
    </div>
  );
}
