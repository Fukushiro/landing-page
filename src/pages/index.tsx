import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import * as Styles from "../styles/home.styles";
import * as Global from "../styles/global.styles";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Touchable } from "../components/Touchable";
export default function Home() {
  return (
    <Styles.Container>
      <Global.Content>
        <Header />

        <Styles.Welcome>
          <h1>WELCOME!</h1>
          <h2>I am a Front end developer</h2>

          <p>
            {"I'm"} a front end developer with 2 years of experience. I can
            create websites with react using next, and make mobile apps with
            react native, and much more...
          </p>

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
          </ul>
        </Styles.Welcome>
        {/* 
        <Styles.About>
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
        </Styles.About> */}
        <Styles.AboutInfos>
          <div>
            <p>Name</p>
            <p>:João Pedro</p>
          </div>
          <div>
            <p>Age</p>
            <p>:22</p>
          </div>
          {/* <div>
            <p>Address</p>
            <p>:Rua salvador cirilo sales, Itajuba</p>
          </div> */}
          <div>
            <p>Phone number</p>
            <p>:+55 32998360917</p>
          </div>
          <div>
            <p>Email</p>
            <Touchable
              onClick={() => {
                navigator.clipboard.writeText("jpflc2301@gmail.com");
              }}
            >
              <p>:jpflc2301@gmail.com</p>
            </Touchable>
          </div>
        </Styles.AboutInfos>
      </Global.Content>
    </Styles.Container>
  );
}
