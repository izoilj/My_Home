import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  margin-top: -5rem;

  @media screen and (max-width: 768px) {
    /* padding: 5rem calc((100vw - 1300px) / 2); */
    /* margin-bottom: 3rem; */
    margin-top: 0;
  }
`;

export const EmailImg = styled.img`
  margin-bottom: 5rem;
  height: 25rem;
  opacity: 85%;

  @media screen and (max-width: 1000px) {
    height: 20rem;
  }

  @media screen and (max-width: 500px) {
    height: 13rem;
  }
`;

export const ContactHeading = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
  font-weight: 600;
  /* margin-bottom: 2rem; */
`;

export const ContactP = styled.p`
  font-size: clamp(0.5rem, 3vw, 1.2rem);
  color: #8a2be2;
  margin-bottom: 3rem;
  text-align: center;
`;

export const ContactContent = styled.div`
  margin-bottom: 3rem;
  width: 400px;

  form {
    z-index: 10;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    width: 100%;
    height: 48px;
    border-radius: 10px;
    background: #dddddd;
    /* margin-right: 1rem; */
    margin-bottom: 0.5rem;

    ::placeholder {
      color: #000;
      opacity: 70%;
    }
  }

  textarea {
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    width: 100%;
    background: #dddddd;

    ::placeholder {
      color: #000;
      opacity: 70%;
    }
  }
`;
