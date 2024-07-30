import Image from "next/image";
import WppPng from "../../../public/whatsapp.png";

const WhatsAppBtn = ({ onClickFn }: { onClickFn: () => void }) => {
  return (
    <button className="wppBtn">
      <Image
        src={WppPng}
        alt="WhatsApp Button"
        onClick={onClickFn}
        width={60}
        height={60}
      />
    </button>
  );
};

export default WhatsAppBtn;
