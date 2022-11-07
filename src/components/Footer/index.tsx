import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Container, CopyrightDiv, SocialMediaDiv } from "./styles";
import { useLanguage } from "../../strings";

export function Footer() {
  const { strings } = useLanguage();
  return (
    <Container>
      <SocialMediaDiv>
        <p>{strings.my_social_medias_label}</p>
        <div>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-fukushiro-lima-castro-4867091ba/"
            target="blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaLinkedinIn size={20} />
            </div>
          </a>

          <a
            href="https://github.com/Fukushiro"
            target="blank"
            rel="noopener noreferrer"
          >
            <div>
              <BsGithub size={20} />
            </div>
          </a>
        </div>
      </SocialMediaDiv>
      <CopyrightDiv>
        <p>
          © Copyright 2022 | João Pedro Fukushiro Lima Castro |
          jpflc2301@gmail.com
        </p>
      </CopyrightDiv>
    </Container>
  );
}
