import { StaticImageData } from "next/image";

export interface IRoomDataProps {
  title: string;
  subtitle: string;
  imgSrc: StaticImageData | string;
  album: IAlbumDataProps;
  idQuarto: number;
}

interface IAlbumDataProps {
  title: string;
  images: Array<StaticImageData>;
}
