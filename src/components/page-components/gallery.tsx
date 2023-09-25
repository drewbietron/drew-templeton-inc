import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Image, { ImageProps } from "next/image";

import { isMobile } from "../../lib/media-query";
import styles from "./gallery.module.scss";

const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;
const ESCAPE_KEY = 27;

export interface GalleryPageComponentProps {
  images: ImageProps[];
}

type GalleryDirection = "next" | "previous";

const Gallery = ({ images }: GalleryPageComponentProps) => {
  const [activePhoto, setActivePhoto] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.keyCode === ESCAPE_KEY) {
        setActivePhoto(-1);
      }

      if (event.keyCode === LEFT_ARROW_KEY) {
        setActivePhoto((prevActivePhoto) => goToIndex("previous"));
      }
      if (event.keyCode === RIGHT_ARROW_KEY) {
        setActivePhoto((prevActivePhoto) => goToIndex("next"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const hasActivePhoto = activePhoto >= 0;

  const goToIndex = (direction: GalleryDirection) => {
    if (direction === "previous") {
      return activePhoto === 0 ? images.length - 1 : activePhoto - 1;
    } else if (direction === "next") {
      return activePhoto === images.length - 1 ? 0 : activePhoto + 1;
    } else {
      return activePhoto;
    }
  };

  const renderGallery = images.map((image, index: number) => (
    <figure
      className={classNames(styles["gallery__item"], {
        [styles["gallery__item--vertical"]]: true,
        // edge.node.childImageSharp.fluid.aspectRatio < 1,
      })}
      key={index}
      onClick={() => setActivePhoto(index)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={1200}
        layout="responsive"
      />
    </figure>
  ));

  const renderCloseButton = (
    <span
      className={styles["gallery__active__close"]}
      onClick={() => setActivePhoto(-1)}
    >
      Close
    </span>
  );

  const renderArrow = (direction: GalleryDirection) => (
    <span
      className={classNames(styles["gallery__arrow"], {
        [styles["gallery__arrow--left"]]: direction === "previous",
        [styles["gallery__arrow--right"]]: direction === "next",
      })}
      onClick={() => setActivePhoto((prevActivePhoto) => goToIndex(direction))}
    >
      {direction === "previous" ? "Back" : "Next"}
    </span>
  );

  const onImageClick = (direction?: GalleryDirection) => {
    if (direction === "next") {
      goToIndex("next");
    } else if (direction === "previous") {
      goToIndex("previous");
    }
  };

  const renderPhoto = (direction?: GalleryDirection) => {
    const sharedInactiveImageStyles = {
      opacity: "0.85",
      height: "auto",
      maxHeight: "100vh",
      position: "absolute",
      top: "50vh",
      left: "50vw",
      width: "auto",
      maxWidth: "80vh",
      objectFit: "cover",
    };
    const activeImageStyle = {
      height: "auto",
      maxHeight: "100vh",
      position: "absolute",
      top: "50vh",
      left: "50vw",
      width: "auto",
      maxWidth: "95vw",
      transform: "translate(-50%, -50%)",
      animation: "fadeIn 0.5s",
      objectFit: "cover",
    };

    const activeImageStyleLeft = {
      ...sharedInactiveImageStyles,
      transform: "translate(-160vh, -50%) ",
    };

    const activeImageStyleRight = {
      ...sharedInactiveImageStyles,
      transform: "translate(80vh, -50%)",
    };

    function imageStyle(): any {
      if (direction === "previous") {
        return activeImageStyleLeft;
      } else if (direction === "next") {
        return activeImageStyleRight;
      } else {
        return activeImageStyle;
      }
    }

    return (
      <div
        className={classNames("gallery__active__photo__container")}
        onClick={() => onImageClick(direction)}
      >
        <Image
          src={images[activePhoto].src}
          alt={images[activePhoto].alt}
          style={imageStyle()}
          width={1200}
          height={1200}
          layout="responsive"
        />
      </div>
    );
  };

  const renderActivePhoto = () => {
    if (!hasActivePhoto || isMobile()) return null;

    return (
      <section className={styles["gallery__active"]}>
        {renderCloseButton}
        {renderArrow("previous")}
        {renderPhoto()}
        {renderArrow("next")}
      </section>
    );
  };

  return (
    <section className={styles["gallery"]}>
      {renderActivePhoto()}
      <div className={styles["gallery__container"]}>{renderGallery}</div>
    </section>
  );
};

export default Gallery;
