import sizeOf from "image-size";
import { pictures } from "@/assets/pictures";
import { Gallery } from "@/components/Gallery";

async function getImageDimensions() {
  return pictures.map((pic) => ({
    ...pic,
    dimensions: sizeOf(`public/pictures/${pic?.id}.jpg`),
  }));
}

export default async function HomePage() {
  const picsWithDimensions = await getImageDimensions();

  return <Gallery pictures={picsWithDimensions} />;
}
