"use client";

import { CCarousel, CCarouselItem } from "@coreui/react";
import styled, { css } from "styled-components";
import Image, { StaticImageData } from "next/image";
import CarouselThumb from "./components/CarouselThumb";
import { useState } from "react";

import fullscreen from "../../assets/fullscreen.svg";
import fullscreenExit from "../../assets/fullscreen_exit.svg";

interface StylesCCarouselProps {
  $borderRadius?: string;
  $imageWidth?: string;
  $imageHeight?: string;
  $fullScreen?: boolean;
}

interface ICarouselProps {
  images: Array<StaticImageData>;
  styles?: {
    borderRadius?: string;
    fullScreen?: boolean;
    imageHeight?: string;
  };
  useThumbs?: boolean;
}

export interface IThumbProps {
  thumb: StaticImageData;
  thumbIndex: number;
}

interface ICarouselContainerProps {
  $fullscreen: boolean;
}

const StyledCCarousel = styled(CCarousel)<StylesCCarouselProps>`
  width: ${({ $fullScreen }) => ($fullScreen ? "100%" : "45rem")};
  position: relative;

  .carousel-inner {
    border-radius: ${({ $borderRadius }) => $borderRadius ?? "1rem"};
  }

  @media (max-width: 767.98px) {
    width: ${({ $fullScreen }) => ($fullScreen ? "100%" : "80vw")};

    .carousel-item {
      height: ${({ $imageHeight }) => $imageHeight ?? "75vh"};
    }
  }

  @media (max-width: 425px) {
    width: ${({ $fullScreen }) => ($fullScreen ? "100%" : "90vw")};
  }

  img {
    width: 100%;
    height: ${({ $imageHeight }) => $imageHeight ?? "60rem"};
    object-fit: cover;

    @media (max-width: 767.98px) {
      width: inherit;
      height: ${({ $imageHeight }) => $imageHeight ?? "75vh"};
    }
  }
`;

const CarouselContainer = styled.div<ICarouselContainerProps>`
  > button {
    width: 3.6rem;
    height: 2.4rem;
    position: absolute;
    top: 2.8rem;
    left: 1.6rem;
    background: ${({ $fullscreen }) =>
        !$fullscreen ? `url(${fullscreen.src})` : `url(${fullscreenExit.src})`}
      center no-repeat;
    background-size: contain;
    z-index: 9;
    transition: none;

    @media (min-width: 767.98px) {
      display: none;
    }
  }

  > div > div img {
    ${({ $fullscreen }) =>
      !$fullscreen &&
      css`
        object-fit: contain;
        height: inherit;
        border-radius: 0;
        transition: all 0.3s;
      `}
  }

  .carousel-item.active,
  .carousel-item-start,
  .carousel-item-end {
    ${({ $fullscreen }) =>
      !$fullscreen &&
      css`
        background-color: #000;
        display: flex;
        align-items: center;
      `}
  }
`;

const Carousel = ({ images, styles, useThumbs }: ICarouselProps) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setfullscreen] = useState(true);

  const chunkArray = () => {
    if (!useThumbs) return;

    const result = [];
    if (Array.isArray(images)) {
      for (let i = 0; i < images.length; i += 4) {
        const chunk =
          Array.isArray(images) &&
          images.slice(i, i + 4).map((image, index) => ({
            index: i / 4,
            thumb: image,
            thumbIndex: i + index,
          }));

        if (chunk) result.push(chunk);
      }
      return result;
    }

    return false;
  };

  const thumbs = chunkArray();

  const renderThumbs = () => {
    if (thumbs)
      return thumbs.map((thumb, i) => (
        <CarouselThumb
          key={`thumb${i}`}
          thumb={thumb}
          visible={i === activeThumb ? true : false}
          activeIndex={activeIndex}
          $fullscreen={fullscreen}
        />
      ));
  };

  const onSlideCarousel = (active: number, direction: string) => {
    setActiveIndex(active);

    if (direction === "prev") {
      if ((active + 1) % 4 === 0) setActiveThumb(Math.floor(active / 4));
      else
        thumbs &&
          thumbs.forEach((el) =>
            el.findIndex((el) => {
              if (active === el.thumbIndex) {
                if (el.index !== activeThumb) setActiveThumb(el.index);
                return;
              }
            })
          );
    }

    if (active % 4 === 0) {
      setActiveThumb(active / 4);
    }
  };

  const closefullscreen = () => {
    setfullscreen(!fullscreen);
  };

  return (
    <CarouselContainer $fullscreen={fullscreen}>
      <button onClick={closefullscreen}></button>
      <StyledCCarousel
        controls
        interval={false}
        transition="crossfade"
        activeIndex={this}
        onSlide={onSlideCarousel}
        $borderRadius={styles?.borderRadius}
        $fullScreen={styles?.fullScreen}
        $imageHeight={styles?.imageHeight}
      >
        {images &&
          images.map((el) => (
            <CCarouselItem key={el.src}>
              <Image src={el} alt="Imagem do Quarto" placeholder="blur" />
            </CCarouselItem>
          ))}
      </StyledCCarousel>
      {renderThumbs()}
    </CarouselContainer>
  );
};

export default Carousel;
