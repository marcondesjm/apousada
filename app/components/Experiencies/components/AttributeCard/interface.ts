import { StaticImageData } from "next/image";

interface AttributeData {
  title: string;
  subtitle: string;
  album?: {
    title: string;
    images: Array<StaticImageData>;
  };
}

export default AttributeData;
