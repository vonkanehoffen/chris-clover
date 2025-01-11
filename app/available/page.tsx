import sizeOf from "image-size";
import { pictures } from "@/assets/pictures";
import { Gallery } from "@/components/Gallery";

async function getImageDimensions() {
  const availablePictures = pictures.filter((pic) => pic.available === true);
  return availablePictures.map((pic) => ({
    ...pic,
    dimensions: sizeOf(`public/pictures/${pic?.id}.jpg`),
  }));
}

export default async function AvailablePage() {
  const picsWithDimensions = await getImageDimensions();

  return (
    <div>
      <h2 className="text-2xl text-center mb-8">Available Works</h2>
      <Gallery pictures={picsWithDimensions} />
    </div>
  );
}
