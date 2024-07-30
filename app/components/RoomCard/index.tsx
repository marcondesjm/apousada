"use client";

import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";
import { ButtonVariant } from "../GlobalStyles/enums";
import { Fira_Sans } from "next/font/google";
import { IRoomDataProps } from "./interfaces";

// Images
import barracaEquipada from "../../../public/barracaEquipada.jpg";
import areaCamping from "../../../public/areaCamping.jpg";
import baru from "../../../public/baru.png";
import jatoba from "../../../public/jatoba.jpg";
import mangaba from "../../../public/mangaba.png";
import pequi from "../../../public/pequi.jpg";
import patoMergulhao from "../../../public/patoMergulhao.jpg";
import CustomDialog from "../CustomDialog";

// Área de Camping
import ac1 from "../../assets/rooms/camping/1.jpg";
import ac2 from "../../assets/rooms/camping/2.jpg";
import ac3 from "../../assets/rooms/camping/3.jpg";
import ac4 from "../../assets/rooms/camping/4.jpg";
import ac5 from "../../assets/rooms/camping/5.jpg";
import ac6 from "../../assets/rooms/camping/6.jpg";
import ac7 from "../../assets/rooms/camping/7.jpeg";
import ac8 from "../../assets/rooms/camping/8.jpeg";

// Barraca Equipada
import be1 from "../../assets/rooms/barraca_equipada/1.jpg";
import be2 from "../../assets/rooms/barraca_equipada/2.jpg";
import be3 from "../../assets/rooms/barraca_equipada/3.jpg";
import be4 from "../../assets/rooms/barraca_equipada/4.jpg";
import be5 from "../../assets/rooms/barraca_equipada/5.jpg";
import be6 from "../../assets/rooms/barraca_equipada/6.jpg";
import be7 from "../../assets/rooms/barraca_equipada/7.jpg";
import be8 from "../../assets/rooms/barraca_equipada/8.jpeg";

// Suíte Jatobá
import jt1 from "../../assets/rooms/jatoba/1.jpg";
import jt2 from "../../assets/rooms/jatoba/2.jpg";
import jt3 from "../../assets/rooms/jatoba/3.jpg";
import jt4 from "../../assets/rooms/jatoba/4.jpg";
import jt5 from "../../assets/rooms/jatoba/5.jpg";
// import jt6 from "../../assets/rooms/jatoba/6.JPG";
import jt7 from "../../assets/rooms/jatoba/7.jpg";
import jt8 from "../../assets/rooms/jatoba/8.jpg";
import jt9 from "../../assets/rooms/jatoba/9.jpg";
import jt10 from "../../assets/rooms/jatoba/10.jpg";

// Suíte Baru
import br1 from "../../assets/rooms/baru/1.jpg";
import br2 from "../../assets/rooms/baru/2.jpg";
import br3 from "../../assets/rooms/baru/3.png";
import br4 from "../../assets/rooms/baru/4.png";
import br5 from "../../assets/rooms/baru/5.png";
import br6 from "../../assets/rooms/baru/6.png";
import br7 from "../../assets/rooms/baru/7.png";

// Suíte Mangaba
import mg1 from "../../assets/rooms/mangaba/1.png";
import mg2 from "../../assets/rooms/mangaba/2.png";
import mg3 from "../../assets/rooms/mangaba/3.png";
import mg4 from "../../assets/rooms/mangaba/4.png";
import mg5 from "../../assets/rooms/mangaba/5.png";
import mg6 from "../../assets/rooms/mangaba/6.png";
import mg7 from "../../assets/rooms/mangaba/7.png";
import mg8 from "../../assets/rooms/mangaba/8.png";
import mg9 from "../../assets/rooms/mangaba/9.png";
import mg10 from "../../assets/rooms/mangaba/10.png";
import mg11 from "../../assets/rooms/mangaba/11.png";
import mg12 from "../../assets/rooms/mangaba/12.jpg";
import mg13 from "../../assets/rooms/mangaba/13.jpg";
import mg14 from "../../assets/rooms/mangaba/14.jpg";

// Suíte Pequi
import pq1 from "../../assets/rooms/pequi/1.jpg";
import pq2 from "../../assets/rooms/pequi/2.jpg";
import pq3 from "../../assets/rooms/pequi/3.jpg";
import pq4 from "../../assets/rooms/pequi/4.jpg";
import pq5 from "../../assets/rooms/pequi/5.jpg";
import pq6 from "../../assets/rooms/pequi/6.jpg";
import pq7 from "../../assets/rooms/pequi/7.jpg";
import pq8 from "../../assets/rooms/pequi/8.jpg";

// Pato Mergulhão
import pm1 from "../../assets/rooms/pato_mergulhao/1.jpg";
import pm2 from "../../assets/rooms/pato_mergulhao/2.jpg";
import pm3 from "../../assets/rooms/pato_mergulhao/3.jpg";
import pm4 from "../../assets/rooms/pato_mergulhao/4.jpg";
import pm5 from "../../assets/rooms/pato_mergulhao/5.jpg";
import pm6 from "../../assets/rooms/pato_mergulhao/6.jpg";
import pm7 from "../../assets/rooms/pato_mergulhao/7.jpg";
import pm8 from "../../assets/rooms/pato_mergulhao/8.jpg";

// Suíte 1
import s101 from "../../assets/rooms/suite1/1.jpg";
import s102 from "../../assets/rooms/suite2/2.jpg";
import s103 from "../../assets/rooms/suite2/3.jpg";

// Suíte 2
import s201 from "../../assets/rooms/suite2/1.jpg";
import s202 from "../../assets/rooms/suite2/2.jpg";
import s203 from "../../assets/rooms/suite2/3.jpg";

// Suíte 3
import s301 from "../../assets/rooms/suite3/1.png";
import s302 from "../../assets/rooms/suite3/2.png";
import s303 from "../../assets/rooms/suite3/3.png";

// Suíte 4
import s401 from "../../assets/rooms/suite4/1.png";
import s402 from "../../assets/rooms/suite4/2.png";
import s403 from "../../assets/rooms/suite4/3.png";
import s404 from "../../assets/rooms/suite4/4.png";

const RoomCardContainer = styled.article`
  width: 30rem;
  height: 40rem;

  display: flex;
  flex-flow: column nowrap;
  border: 1px solid var(--black);
  border-radius: 1.2rem;

  @media (prefers-color-scheme: dark) {
    border: 1px solid var(--blue-500-default-dark);
  }

  &:nth-of-type(even) {
    @media (prefers-color-scheme: dark) {
      border: 1px solid var(--green-600);
    }
  }

  &:hover {
    box-shadow: 0px 0px 20px 2px #35b0fc;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    width: 100%;

    flex-flow: row nowrap;
  }

  &:nth-child(2n):hover {
    box-shadow: 0px 0px 20px 2px #5e943e;
  }

  transition: all 0.3s;

  > img {
    border-radius: 1.2rem 1.2rem 0 0;
    object-fit: cover;

    @media (min-width: 600px) and (max-width: 800px) {
      width: 55%;
      height: auto;
      border-radius: 1.2rem 0 0 1.2rem;
    }
  }

  &:nth-of-type(odd) > div {
    background-color: #143346;
    border-radius: 0 0 1.2rem 1.2rem;
  }

  &:nth-of-type(even) > div {
    background-color: #1b330c;
    border-radius: 0 0 1.2rem 1.2rem;

  }

  > div {
    height: inherit;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    @supports (max-height: intrinsic) {
      max-height: intrinsic;
    }

    @media (min-width: 600px) and (max-width: 800px) {
      height: auto;
      width: 45%;
      justify-content: center;
      gap: 2rem;
      border-radius: 0 1.2rem 1.2rem 0 !important;
    }

    h3 {
      font-size: 2rem;
      color: #ffffff;
    }

    span {
      font-size: 1.4rem;
      color: #cecece;
    }

    > div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      > button {
        padding: 8px 2rem;
        font-size: 1.5rem;
      }

      > div > button {
        padding: 8px 2rem;
        font-size: 1.5rem;
      }
    }
  }
`;

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const RoomCard = () => {
  const RoomsData: IRoomDataProps[] = [
    {
      title: "Área de Camping",
      subtitle: "Traga sua barraca e todos seus acessórios para camping.",
      imgSrc: areaCamping,
      idQuarto: 0,
      album: {
        title: "Área de Camping",
        images: [areaCamping, ac1, ac2, ac3, ac4, ac5, ac6, ac7, ac8],
      },
    },
    {
      title: "Nossas barracas equipadas",
      subtitle:
        "Colchão D33, Roupa de Cama Higienizada, Travesseiros, Toalha de Banho e Cobertas. Temos Barracas: individuais, dupla e família para 3 pessoas.",
      imgSrc: barracaEquipada,
      idQuarto: 1,
      album: {
        title: "Nossas barracas equipadas",
        images: [be1, be2, be3, be4, be5, be6, be7, be8],
      },
    },
    {
      title: "Suíte Jatobá",
      subtitle: "Até 2 pessoas",
      imgSrc: jatoba,
      idQuarto: 6,
      album: {
        title: "Suite Játoba",
        images: [jt1, jt2, jt3, jt4, jt5, jt7, jt8, jt9, jt10],
      },
    },
    {
      title: "Suíte Baru",
      subtitle: "Até 2 pessoas",
      imgSrc: baru,
      idQuarto: 5,
      album: {
        title: "Suíte Baru",
        images: [br1, br2, br3, br4, br5, br6, br7],
      },
    },
    {
      title: "Suíte Mangaba",
      subtitle: "Até 4 pessoa",
      imgSrc: mangaba,
      idQuarto: 9,
      album: {
        title: "Suíte Mangaba",
        images: [
          mg1,
          mg2,
          mg3,
          mg4,
          mg5,
          mg6,
          mg7,
          mg8,
          mg9,
          mg10,
          mg11,
          mg12,
          mg13,
          mg14,
        ],
      },
    },
    {
      title: "Suíte Pequi",
      subtitle: "Até 3 pessoas",
      imgSrc: pequi,
      idQuarto: 8,
      album: {
        title: "Suíte Pequi",
        images: [pq1, pq2, pq3, pq4, pq5, pq6, pq7, pq8],
      },
    },
    {
      title: "Suíte Pato Mergulhão",
      subtitle: "Até 3 pessoas",
      imgSrc: patoMergulhao,
      idQuarto: 7,
      album: {
        title: "Suíte Pato Mergulhão",
        images: [pm1, pm2, pm3, pm4, pm5, pm6, pm7, pm8],
      },
    },
    {
      title: "Suíte 1",
      subtitle: "Até 6 pessoas",
      imgSrc: s101,
      idQuarto: 10,
      album: {
        title: "Suíte 1",
        images: [s101, s102, s103],
      },
    },
    {
      title: "Suíte 2",
      subtitle: "Até 6 pessoas",
      imgSrc: s201,
      idQuarto: 10,
      album: {
        title: "Suíte 2",
        images: [s201, s202, s203],
      },
    },
    {
      title: "Suíte 3",
      subtitle: "Até 6 pessoas",
      imgSrc: s301,
      idQuarto: 10,
      album: {
        title: "Suíte 3",
        images: [s301, s302, s303],
      },
    },
    {
      title: "Suíte 4",
      subtitle: "Até 6 pessoas",
      imgSrc: s403,
      idQuarto: 10,
      album: {
        title: "Suíte 4",
        images: [s401, s402, s403, s404],
      },
    },
  ];

  const redirectToLink = (idQuarto: number) => {
    window.open(
      `https://taiuaambiental.motordereservas.com.br/novareserva`
    );
  };

  return (
    <>
      {RoomsData.map((el, i) => (
        <RoomCardContainer key={i}>
          <Image
            src={el.imgSrc}
            width={298}
            height={200}
            alt="Quarto"
            draggable={false}
            placeholder="blur"
          />

          <div>
            <h3>{el.title}</h3>
            <span>{el.subtitle}</span>

            <div>
              <Button
                className={fira.className}
                $variant={ButtonVariant.OUTLINE_BLUE_TEXT}
                onClick={() => redirectToLink(el.idQuarto)}
              >
                Reservar
              </Button>

              <CustomDialog
                albumImages={el.album.images}
                title={el.title}
                subtitle={el.subtitle}
                font={fira.className}
                idQuarto={el.idQuarto}
              >
                <Button
                  className={fira.className}
                  $variant={ButtonVariant.OUTLINE_GREEN_TEXT}
                >
                  Ver mais+
                </Button>
              </CustomDialog>
            </div>
          </div>
        </RoomCardContainer>
      ))}
    </>
  );
};

export default RoomCard;
