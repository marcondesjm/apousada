"use client"

import Image from "next/image";
import styled, { css } from "styled-components";
import { IThumbProps } from "../..";

interface ICarouselThumbProps {
  thumb: Array<IThumbProps>;
  visible: boolean;
  activeIndex: number;
  $fullscreen: boolean;
}

type CarouselThumbContainerProps = Pick<ICarouselThumbProps, "$fullscreen">;

const CarouselThumbContainer = styled.div<CarouselThumbContainerProps>`
  width: 100%;

  position: absolute;
  bottom: 1.6rem;
  z-index: 8;

  display: none;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 8px;
  z-index: 9;

  &.activeThumb {
    display: flex;
  }

  @media (max-width: 767.98px) {
    width: fit-content;

    ${({ $fullscreen }) =>
      $fullscreen
        ? css`
            left: 20px;
            bottom: 50%;
            transform: translateY(50%);
            flex-flow: column nowrap;
          `
        : css`
            width: 100%;
            top: 1.2rem;
            height: fit-content;
          `}
  }

  > img {
    width: ${({ $fullscreen }) => ($fullscreen ? "5rem" : "4.6rem")} !important;
    height: 5.6rem !important;
    border-radius: 8px;
    object-fit: cover;

    filter: brightness(0.5);
    transition: all 0.3s;
  }

  > img.thumbActive {
    filter: none;
    transition: all 0.3s;
  }
`;

const CarouselThumb = ({
  thumb,
  visible,
  activeIndex,
  $fullscreen,
}: ICarouselThumbProps) => {
  return (
    <CarouselThumbContainer
      className={visible ? "activeThumb" : ""}
      $fullscreen={$fullscreen}
    >
      {thumb &&
        thumb.map((el) => (
          <Image
            key={`imageThumb${el.thumbIndex}`}
            data-index={`thumb${el.thumbIndex}`}
            width={100}
            height={100}
            src={el.thumb}
            alt="Thumbnail"
            className={el.thumbIndex === activeIndex ? "thumbActive" : ""}
            priority
          />
        ))}
    </CarouselThumbContainer>
  );
};

export default CarouselThumb;
