"use client";

// React
import { useCallback, useEffect, useState } from "react";

// Next
import Image from "next/image";
import { Fira_Sans } from "next/font/google";

// Styled-Components
import styled from "styled-components";

// MUI
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

// Images
import Tent from "../../assets/tent.svg";
import Cottage from "../../assets/cottage.svg";
import Flag from "../../assets/flag.svg";
import Culture from "../../assets/culture.svg";

// Utils
import { dotBlue, dotGreen } from "./utils";
import TimelineContainerProps from "./interfaces";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const TimelineContainer = styled.article<TimelineContainerProps>`
  width: ${({ $simple }) => ($simple ? "unset" : "100%")};
  align-self: ${({ $simple }) => ($simple ? "flex-start" : "unset")};
  margin-top: 5rem;

  .MuiTimelineItem-positionAlternate:nth-child(4n-2),
  .MuiTimelineItem-positionRight:nth-child(4n-2) {
    .head {
      > span {
        &:first-of-type {
          color: var(--blue-900);

          @media (prefers-color-scheme: dark) {
            color: var(--blue-200);
          }
        }
      }
    }
  }

  .MuiTimelineItem-positionAlternate {
    &:nth-child(2) .content {
      position: relative;
      top: -60px;
    }
    &:nth-child(3) > .MuiTimelineContent-root {
      display: flex;
      align-items: center;
    }

    &:nth-child(4) .content {
      position: relative;
      top: -50px;
    }
  }

  .MuiTimelineItem-root::before {
    flex: 0;

    @media (max-width: 320px) {
      padding: 0 8px;
    }
  }

  .MuiTimelineItem-positionRight:nth-child(odd):not(:last-child):before {
    padding: 6px 7px;

    @media (max-width: 320px) {
      padding: 0;
    }
  }

  .head {
    > span {
      &:first-of-type {
        color: var(--green-900);
        font-size: 1.6rem;
        font-weight: bold;

        @media (prefers-color-scheme: dark) {
          color: var(--green-600);
        }
      }

      &:nth-child(3) {
        font-size: 1.4rem;
        color: #000000;

        @media (prefers-color-scheme: dark) {
          color: #fff;
        }
      }
    }
  }

  .content {
    margin-left: auto;
    max-width: 38rem;
    width: 100%;
    color: #000000;
    text-align: center;
    padding: 4rem 1.6rem;
    border: 2px solid;
    border-radius: 10px;
    border-color: var(--blue-500-default);

    @media (prefers-color-scheme: dark) {
      color: #fff;
    }

    > h2 {
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 16px;
    }

    > p {
      font-size: 1.4rem;
      text-align: left;
    }
  }

  .content.simple {
    margin-top: 16px;
    padding: 2rem 1.6rem;

    > h2 {
      font-size: 2rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }

  .content.right {
    margin-left: 0;
    margin-right: auto;
    border-color: var(--green-600);
  }

  .content.hide {
    opacity: 0;
  }

  .MuiTimelineDot-root {
    align-items: center;
    justify-content: center;

    @media (prefers-color-scheme: dark) {
      color: #fff;
    }
  }
`;

const TaiuaTimeline = () => {
  const [useSimpleTimeline, setUseSimpleTimeline] = useState<boolean>(false);

  const getScreenWidth = useCallback(() => {
    const screen = window.screen;

    if (!useSimpleTimeline && screen.width < 699.98) {
      setUseSimpleTimeline(true);
    }

    if (useSimpleTimeline && screen.width >= 699.98) {
      setUseSimpleTimeline(false);
    }
  }, [useSimpleTimeline]);

  useEffect(() => {
    window.onload = getScreenWidth;
    window.onresize = getScreenWidth;
  }, [useSimpleTimeline, getScreenWidth]);

  const renderTimeline = () => {
    if (useSimpleTimeline) {
      return (
        <Timeline
          className={fira.className}
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={dotBlue}>2008</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ fontFamily: "unset" }}>
              <div className="content hide"></div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "var(--blue-500-default)",
                  width: 60,
                  height: 60,
                }}
              >
                <Image src={Tent} alt="Ícone Barraca" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="head simple">
                <span>Fev 2008</span>
                <br />
                <span>
                  Inauguração <br /> do Taiuá Ambiental
                </span>
              </div>
              <div className="content simple">
                <h2>Área de Camping</h2>
                <p>
                  O Taiuá Ambiental, inicialmente concebido como um camping,
                  viu-se envolto em uma atmosfera única de preservação ambiental
                  e celebração cultural.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={dotGreen}>2016</TimelineDot>
              <TimelineConnector sx={{ height: 90 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ fontFamily: "unset" }}></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{ bgcolor: "var(--green-900)", width: 60, height: 60 }}
              >
                <Image src={Cottage} width={38} height={38} alt="Ícone Chalé" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="head simple">
                <span>Jun 2016</span>
                <br />
                <span>Suítes Confortáveis</span>
              </div>
              <div className="content simple right">
                <h2>Ecopousada</h2>
                <p>
                  Em 2016, o Taiuá Ambiental deu um passo significativo em
                  direção ao conforto máximo para seus hóspedes. Foram
                  construídas nove suítes, projetadas para oferecer acomodações
                  acolhedoras tanto para casais quanto para grupos e famílias.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={dotBlue}>2024</TimelineDot>
              <TimelineConnector sx={{ height: 60 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ fontFamily: "unset" }}></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "var(--blue-500-default)",
                  width: 60,
                  height: 60,
                }}
              >
                <Image src={Flag} alt="Ícone Bandeira" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="head simple">
                <span>Jan 2024</span>
              </div>
              <div className="content simple">
                <h2>Café da Manhã</h2>
                <p>
                  Agora os hóspedes, turistas e moradores da Vila de São Jorge
                  tem um cantinho maravilhoso, repleto de gostosuras como
                  sanduíches, sucos, vitaminas, bolos, pães de queijo,
                  cappuccino, tapioca, entre outras delícias… tudo feito com
                  muito carinho pela Guga e sua mãe Márcia!
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{ bgcolor: "var(--green-900)", width: 60, height: 60 }}
              >
                <Image src={Culture} alt="Ícone Cultura" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div className="head simple">
                <span>Jan 2024</span>
              </div>
              <div className="content simple right">
                <h2>Shows e Apresentações</h2>
                <p>
                  Ao longo dos anos, o Taiuá Ambiental se tornou um palco
                  efervescente para a expressão artística. Mais de 2000
                  apresentações encantaram nossos visitantes, com cerca de 5000
                  artistas iluminando a noite com forró, circo, reggae, sarau e
                  várias intervenções artísticas.
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      );
    }

    return (
      <Timeline
        position="alternate"
        sx={{ width: "100%" }}
        className={fira.className}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={dotBlue}>2008</TimelineDot>
            <TimelineConnector sx={{ height: 120 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ fontFamily: "unset" }}></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ fontFamily: "unset" }}
            align="right"
            variant="body2"
          >
            <div className="head">
              <span>Fev 2008</span>
              <br />
              <span>
                Inauguração <br /> do Taiuá Ambiental
              </span>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: "var(--blue-500-default)",
                width: 60,
                height: 60,
              }}
            >
              <Image src={Tent} alt="Ícone Barraca" />
            </TimelineDot>
            <TimelineConnector sx={{ height: 120 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ fontFamily: "unset" }}>
            <div className="content">
              <h2>Área de Camping</h2>
              <p>
                O Taiuá Ambiental, inicialmente concebido como um camping,
                viu-se envolto em uma atmosfera única de preservação ambiental e
                celebração cultural.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={dotGreen}>2016</TimelineDot>
            <TimelineConnector sx={{ height: 90 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ fontFamily: "unset" }}></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            <div className="content right">
              <h2>Ecopousada</h2>
              <p>
                Em 2016, o Taiuá Ambiental deu um passo significativo em direção
                ao conforto máximo para seus hóspedes. Foram construídas nove
                suítes, projetadas para oferecer acomodações acolhedoras tanto
                para casais quanto para grupos e famílias.
              </p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{ bgcolor: "var(--green-900)", width: 60, height: 60 }}
            >
              <Image src={Cottage} width={38} height={38} alt="Ícone Chalé" />
            </TimelineDot>
            <TimelineConnector sx={{ height: 190 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, fontFamily: "unset" }}>
            <div className="head">
              <span>Jun 2016</span>
              <br />
              <span>Suítes Confortáveis</span>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={dotBlue}>2024</TimelineDot>
            <TimelineConnector sx={{ height: 120 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ fontFamily: "unset" }}></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div className="head">
              <span>Jan 2024</span>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: "var(--blue-500-default)",
                width: 60,
                height: 60,
              }}
            >
              <Image src={Flag} alt="Ícone Bandeira" />
            </TimelineDot>
            <TimelineConnector sx={{ height: 120 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, fontFamily: "unset" }}>
            <div className="content">
              <h2>Café da Manhã</h2>
              <p>
                Agora os hóspedes, turistas e moradores da Vila de São Jorge tem
                um cantinho maravilhoso, repleto de gostosuras como sanduíches,
                sucos, vitaminas, bolos, pães de queijo, cappuccino, tapioca,
                entre outras delícias… tudo feito com muito carinho pela Guga e
                sua mãe Márcia!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div className="head">
              <span>Jan 2024</span>
              <br />
              <span>Eventos Culturais</span>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{ bgcolor: "var(--green-900)", width: 60, height: 60 }}
            >
              <Image src={Culture} alt="Ícone Cultura" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, fontFamily: "unset" }}>
            <div className="content right">
              <h2>Shows e Apresentações</h2>
              <p>
                Ao longo dos anos, o Taiuá Ambiental se tornou um palco
                efervescente para a expressão artística. Mais de 2000
                apresentações encantaram nossos visitantes, com cerca de 5000
                artistas iluminando a noite com forró, circo, reggae, sarau e
                várias intervenções artísticas.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  };

  return (
    <TimelineContainer $simple={useSimpleTimeline}>
      {renderTimeline()}
    </TimelineContainer>
  );
};

export default TaiuaTimeline;
