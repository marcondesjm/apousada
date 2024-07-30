"use client";

import { useState, ReactNode } from "react";
import Button from "../Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Carousel from "../Carousel";
import { StaticImageData } from "next/image";
import styled from "styled-components";
import { ButtonVariant } from "../GlobalStyles/enums";
import close from "../../assets/close.svg";
import { redirectToLink } from "../../utils";

interface CustomDialogProps {
  children: ReactNode;
  albumTitle?: string;
  albumImages: StaticImageData[];
  title: string;
  subtitle: string;
  font?: string;
  idQuarto?: number;
}

const DialogContainer = styled(Dialog)`
  .MuiDialog-paperScrollPaper {
    max-width: 80rem;
    width: 100%;
    border-radius: 2rem;
    color: #fff;
    background-color: #1c2428;

    @media (max-width: 767.98px) {
      width: unset;
      background-color: transparent;
      box-shadow: none;
      margin: 1.2rem;
    }
  }
`;

const DialogContentContainer = styled(DialogContent)`
  display: flex;
  justify-content: start;
  gap: 2.6rem;
  padding: 0;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      45deg,
      #1c2428 30%,
      var(--blue-900) 60%,
      var(--green-900) 100%
    );
  }

  > div:first-child {
    position: relative;
    height: fit-content;

    > div:last-child {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 2rem;
      color: var(--white);
      z-index: 9;

      > h5 {
        font-size: 2.4rem;
        text-shadow: #000 1px -1px, #000 -1px 1px, #000 1px 1px, #000 -1px -1px;
      }

      > p {
        font-size: 1.8rem;
        text-shadow: #000 1px -1px, #000 -1px 1px, #000 1px 1px, #000 -1px -1px;
      }

      > button {
        font-size: 1.8rem;
      }
    }
  }

  > div:last-child {
    width: 100%;
    max-width: 27.4rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2.8rem;

    @media (max-width: 767.98px) {
      display: none;
    }

    > h3 {
      font-size: 3.6rem;
    }

    > span {
      font-size: 1.6rem;
    }
  }
`;

const DialogActionsContainer = styled(DialogActions)`
  width: fit-content;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  z-index: 9;

  @media (max-width: 425px) {
    right: 1.2rem;
  }

  > button {
    width: 3rem;
    height: 3rem;
    background-image: url(${() => close.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @media (prefers-color-scheme: dark) {
      filter: invert(1);
    }

    @media (max-width: 767.98px) {
      transition: all 0s;
      filter: invert();
    }
  }
`;

const CustomDialog = ({
  children,
  albumTitle,
  albumImages,
  title,
  subtitle,
  font,
  idQuarto,
}: CustomDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTitle = () => {
    if (albumTitle) {
      return (
        <DialogTitle
          className={font ?? ""}
          sx={{ fontWeight: 700, fontSize: "3rem" }}
        >
          {albumTitle}
        </DialogTitle>
      );
    }
  };

  return (
    <>
      <div onClick={handleClickOpen} role="button">
        {children}
      </div>
      <DialogContainer open={open} onClose={handleClose} scroll="paper">
        {renderTitle()}
        <DialogContentContainer>
          <div>
            <Carousel
              images={albumImages}
              styles={{ borderRadius: "1rem 0 0 1rem" }}
              useThumbs
            />
            <div className="d-md-none d-block">
              <h5>{title}</h5>
              <p>{subtitle}</p>
              <Button
                $variant={ButtonVariant.BLUE}
                onClick={() => redirectToLink(idQuarto)}
              >
                Reservar
              </Button>
            </div>
          </div>
          <div>
            <h3>{title}</h3>
            <span>{subtitle}</span>
            <div>
              <Button
                $variant={ButtonVariant.BLUE}
                onClick={() => redirectToLink(idQuarto)}
              >
                Reservar
              </Button>
            </div>
          </div>
        </DialogContentContainer>
        <DialogActionsContainer>
          <button onClick={handleClose}></button>
        </DialogActionsContainer>
      </DialogContainer>
    </>
  );
};

export default CustomDialog;
