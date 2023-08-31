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

  return (
    <div>
      <h1 className="text-xl font-bold">{meta.title}</h1>
      <Link href="/">
        <Image
          src={`/pictures/${meta.id}.jpg`}
          width={dimensions.width}
          height={dimensions.height}
          alt={meta.title}
        />
      </Link>
      <h4>{meta.description}</h4>
    </div>
  );
}
