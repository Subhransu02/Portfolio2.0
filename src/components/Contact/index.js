import React from "react";
import styled from "styled-components";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Snackbar } from "@mui/material";
import { SiCodechef, SiLeetcode, SiCodingninjas, SiGeeksforgeeks   } from "react-icons/si";
import { Bio } from "../../data/constants";

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
    //   .then((result) => {
    //     setOpen(true);
    //     form.current.reset();
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Coding Profiles</Title>

        {/* <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm> */}
        {/* <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        /> */}

        <SocialMediaIcon href={Bio.leetcode} target="display">
          <SiLeetcode color="yellow" />
        </SocialMediaIcon>
        <Desc>Solved 350+ Questions</Desc>

        <SocialMediaIcon href={Bio.codechef} target="display">
          <SiCodechef color="yellow" />
        </SocialMediaIcon>
        <Desc>Participated in many contests (Highest Rating 1421).</Desc>

        <SocialMediaIcon href={Bio.codingninja} target="display">
          <SiCodingninjas color="yellow" />
        </SocialMediaIcon>
        <Desc>Solved 250+ Questions.</Desc>

        <SocialMediaIcon href={Bio.geeksforgeeks } target="display">
          <SiGeeksforgeeks  color="yellow" />
        </SocialMediaIcon>
        <Desc>Solved 240+ Questions.</Desc>

      </Wrapper>
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
        1. The Complete 2023 Web Development Bootcamp by Dr.Angela Yu:
        <a style={{color:'white'}} href="https://drive.google.com/file/d/1nd_vcCSYmfNoXveksB6qATbUPlzpjn4H/view"> Link</a>
        </Desc>
        <Desc>
        2. The Complete Node.js Developer Course::
        <a style={{color:'white'}} href="https://drive.google.com/file/d/1TowKRiArNqjtTOP45FVQJKIaVT_UiKGT/view"> Link</a>
        </Desc>
        <Desc>
        3. Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02 by Stephane Maarek:
        <a style={{color:'white'}} href="https://drive.google.com/file/d/13jYqRbsN1xxHA4MytN5PZiFBif9C23Xs/view"> Link</a>
        </Desc>
        <Desc>
        4. AWS Cloud with AI Workshop by Mr.Vimal Daga:
        <a style={{color:'white'}} href="https://drive.google.com/file/d/1YqD1giVw4rt9FS7xxdmWbDT-hdhUgqBo/view"> Link</a>
        </Desc>
        <Desc>
        5. Networking by Cisco:
        <a style={{color:'white'}} href="https://drive.google.com/drive/folders/1bSgifU-jqq1DEh7faTIg-qdHmB35ziQk">Link</a>
        </Desc>
        <Desc>
        6. Cybersecurity by Cisco:
        <a style={{color:'white'}} href="https://drive.google.com/drive/folders/1KCviRaSro4_kATgjXg_WoAbbXD2GgrUs">Link</a>
        </Desc>
        <Desc>
        5. Python by Cisco:
        <a style={{color:'white'}} href="https://drive.google.com/drive/folders/1Npvlitybuqh5JGy6CoOkMvNDFhA1q3sp">Link</a>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Contact;
