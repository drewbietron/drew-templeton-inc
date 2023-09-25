import Image, { ImageProps } from "next/image";
import styles from "./photo-gallery.module.scss";

interface Props {
  images: ImageProps[];
}

const PhotoGallery = ({ images }: Props) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index: number) => (
        <div key={index} className={styles["gallery__item"]}>
          <Image
            layout="responsive"
            width={1200}
            height={1200}
            objectFit="contain"
            {...image}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
