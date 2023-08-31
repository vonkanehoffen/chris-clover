import { pictures } from "@/assets/pictures";
import { slugify } from "@/helpers/slugify";

export async function generateStaticParams() {
  return pictures.map((pic) => ({
    slug: slugify(pic.title),
  }));
}

export default function Picture({ params }: { params: { slug: string } }) {
  const meta = pictures.find((pic) => slugify(pic.title) === params.slug);
  return (
    <div>
      <h1>Picture: {params.slug}</h1>
      <pre> {JSON.stringify(meta, null, 2)}</pre>
    </div>
  );
}
