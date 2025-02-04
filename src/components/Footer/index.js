import { BreakLine, Container, Logo, Social, Wrapper } from "./styles";
import bitriel from '../../assets/bitriel.png';
import fb from '../../assets/fb.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import twitter from '../../assets/twitter.svg';

export default function Footer() {
  return (
    <Wrapper>
      <BreakLine />
      <Container>
        <Logo
          alt='bitriel'
          src={bitriel}
        />
        <Social>
          <a href='https://www.facebook.com/selendraio' target='_blank'>
            <img 
              src={fb}
              alt='facebook'
              width={30}
            />
          </a>
          <a href='https://twitter.com/selendraorg' target='_blank'>
            <img 
              src={twitter}
              alt='twitter'
              width={30}
            />
          </a>
          <a href='https://medium.com/selendra' target='_blank'>
            <img 
              src={medium}
              alt='medium'
              width={30}
            />
          </a>
          <a href='https://www.linkedin.com/company/selendra/' target='_blank'>
            <img 
              src={linkedin}
              alt='linkedin'
              width={30}
            />
          </a>
        </Social>
      </Container>
    </Wrapper>
  )
}