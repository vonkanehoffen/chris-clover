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
  const scaledDimensions = {
    width: 1000,
    height: Math.round((1000 / dimensions.width!) * dimensions.height!),
  };

  // TODO: Limit height. This messes with Next's image optimization though:
  // style={{ maxHeight: "calc(100vh - 200px)", width: "auto" }}

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Image
          src={`/pictures/${meta.id}.jpg`}
          width={scaledDimensions.width}
          height={scaledDimensions.height}
          alt={meta.title}
          quality={80}
          sizes="(max-width: 768px) 100vw, 1000px"
          className="max-h-[calc(100vh-200px)] w-auto"
          priority
        />
      </Link>
      <h1 className="text-xl my-8 mb-4">{meta.title}</h1>
      <h4 className="mb-4 text-slate-500">{meta.description}</h4>
    </div>
  );
}
