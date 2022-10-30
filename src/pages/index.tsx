import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import {
  WelcomeSocialMedias,
  About,
  AboutInfos,
  Container,
  Content,
  Welcome,
  WelcomeDiv,
} from "../styles/home.styles";
import * as Global from "../styles/global.styles";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Touchable } from "../components/Touchable";
import programingAnimation from "../assets/animations/programing.json";
import Lottie from "react-lottie";
import useMediaQuery from "@mui/material/useMediaQuery";
import { lgMediaMin, mdMediaMin, smMediaMin } from "../utils/screenSize";
import { useState } from "react";
import { useLanguage } from "../strings";
export default function Home() {
  const isSmall = useMediaQuery(`(${smMediaMin})`);
  const isMedian = useMediaQuery(`(${mdMediaMin})`);
  const isLarge = useMediaQuery(`(${lgMediaMin})`);
  const animationWidth = isLarge ? 500 : isMedian ? 400 : 300;
  const animationHeight = isLarge ? 400 : isMedian ? 300 : 200;

  const { strings } = useLanguage();
  return (
    <>
      <Head>
        <title>Portfolio - home</title>
      </Head>
      <Container>
        <Global.Content>
          <Header />

          <Welcome>
            <h1>{strings.bem_vindo}</h1>
            <h2>{strings.introduction_1}</h2>
            <WelcomeDiv>
              <div>
                <p>{strings.introduction_2}</p>

                <ul>
                  {/* <li>Develop mobile apps with react native</li>
                  <li>Develop web apps with react.js, next, vite, and more</li>
                  <li>Manage state with redux, context and zustand</li>
                  <li>Make api calls with fetch and axios</li>
                  <li>Storage data with firebase and fauna</li>
                  <li>Use typescript</li>
                  <li>Publish apps for both, android and ios</li> */}
                  {strings.introduction_3.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>

              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: programingAnimation,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={animationHeight}
                width={animationWidth}
              />
            </WelcomeDiv>
            <WelcomeSocialMedias>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3o-pedro-fukushiro-lima-castro-4867091ba/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <FaLinkedinIn size={20} />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3o-pedro-fukushiro-lima-castro-4867091ba/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <FaLinkedinIn size={20} />
                    </div>
                  </a>
                </li>
              </ul>
            </WelcomeSocialMedias>
          </Welcome>
          {/* 
        <About>
          <h1>Hello, I am João Pedro Fukushiro</h1>

          <p>
            I live on itajuba, in Minas Gerais, i made Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Integer tellus est, finibus ut
            congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo
            elementum posuere. Ut aliquam metus quis laoreet elementum. In hac
            habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam
            porta faucibus arcu, et consequat velit vestibulum in. Donec quis
            tellus ut urna volutpat posuere quis consectetur quam.
          </p>
        </About> */}
          <AboutInfos>
            <div>
              <p>Name</p>
              <p>João Pedro</p>
            </div>
            <div>
              <p>Age</p>
              <p>22</p>
            </div>
            {/* <div>
            <p>Address</p>
            <p>:Rua salvador cirilo sales, Itajuba</p>
          </div> */}
            <div>
              <p>Phone number</p>
              <p>+55 32998360917</p>
            </div>
            <div>
              <p>Email</p>
              <Touchable
                onClick={() => {
                  navigator.clipboard.writeText("jpflc2301@gmail.com");
                }}
              >
                <p>jpflc2301@gmail.com</p>
              </Touchable>
            </div>
          </AboutInfos>
        </Global.Content>
      </Container>
    </>
  );
}
