import { pictures } from "@/assets/pictures";
import { slugify } from "@/helpers/slugify";
import Image from "next/image";
import sizeOf from "image-size";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return pictures.map((pic) => ({
    slug: slugify(pic.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = pictures.find((pic) => slugify(pic.title) === params.slug);
  if (!meta) return {};

  const title = `${meta.title} - Chris Clover Fine Art`;
  const description = `${meta.title} - ${meta.description} by Chris Clover`;
  const imageUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://chrisclover.com"
  }/pictures/${meta.id}.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
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
          // quality={80}
          // sizes="(max-width: 768px) 100vw, 1000px"
          // className="max-h-[calc(100vh-200px)] w-auto"
          // priority
        />
      </Link>
      <h1 className="text-xl my-8 mb-4">{meta.title}</h1>
      <h4 className="mb-4 text-slate-500">
        {meta.description} - {meta.available ? "Available" : "Not available"}
      </h4>
    </div>
  );
}
