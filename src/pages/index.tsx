import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import * as Styles from "../styles/home.styles";
import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Header />

        <Styles.Welcome>
          <h1>WELCOME!</h1>
          <h2>I am a Front end developer</h2>

          <p>
            I'm a front end developer with 2 years of experience. I can create
            websites with react using next, and make mobile apps with react
            native, and much more...
          </p>

          <ul>
            <li>
              <a href="">
                <div>
                  <FaLinkedinIn size={20} />
                </div>
              </a>
            </li>
          </ul>
        </Styles.Welcome>

        <Styles.About>
          <h1>Hello, I am João Pedro Fukushiro</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl
            dolor, id dapibus leo elementum posuere. Ut aliquam metus quis
            laoreet elementum. In hac habitasse platea dictumst. In hac
            habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat
            velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis
            consectetur quam.
          </p>
        </Styles.About>
      </Styles.Content>
    </Styles.Container>
  );
}
