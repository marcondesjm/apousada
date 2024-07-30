"use client"

import { createGlobalStyle } from "styled-components";
import ytbPlayBtn from "../../assets/ytbPlay.svg";
import "@coreui/coreui/dist/css/coreui.min.css";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;
        --white: #fff;
        --black: #000;
        --transparent: rgba(0,0,0,0)
        --blue-100: #35B0FC;
        --blue-200: #32A7F0;
        --blue-400: #2D95D6;
        --blue-500-default: #2A8ECC;
        --blue-500-default-dark: #2974a3;
        --blue-900: #184E70;
        --green-100: #A0FC6A;
        --green-200: #98F065;
        --green-400: #88D65A;
        --green-600: #5E943E;
        --green-900: #47702F;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    button {
        background: transparent;
        cursor: pointer;
        transition: all .3s;
        line-height: unset;
        outline: 0;
        border: none;
    }

    h1, h2, h3, h4, h5, h6 {
        width: fit-content;
        display: inline-block;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

    .MuiDrawer-paper {
        background: linear-gradient(135deg, #071e2d 0%, #1b2615 100%);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        > ul {
            height: 100%;
            font-size: 2rem;
            padding-top: 6rem;
            color: #fff;

            > li {
                width: 100%;
                font-weight: 500;
                position: relative;
                list-style: none;

                &:hover {
                    background-color: var(--green-900);

                    &:last-child {
                    background-color: var(--blue-500-default);
                    }

                    transition: all 0.3s;
                }

                > a {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 90px;
                    padding-left: 6rem;
                    padding-right: 1.5rem;
                    justify-content: end;
                }
            }
        }
    }

    .EmbedShowcase {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    

    .EmbedIframeShowcase {
        width: 100%;
        height: 100vh;
    }

    .EmbedPresentation {
        width: 320px;
        height: 560px;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .EmbedIframePresentation {
        width: 320px;
        height: 560px;
        border: 1px solid transparent;
        border-radius: 20px;
        background: linear-gradient(to right, white, white),
            linear-gradient(to right, #a0fc6a, #47702f);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        position: relative;

        @media (max-width: 320px) {
            width: 30rem;
        }
    }

    .EmbedPlayerBtn {
        width: 64px;
        height: 64px;
        background-image: url(${() => ytbPlayBtn.src});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .ytp-shorts-title-channel {
        display: none !important;
    }

    .wppBtn {
        position: fixed;
        bottom: 2vh;
        right: 2vw;
        z-index: 99;
    }
`;

export default GlobalStyle;
