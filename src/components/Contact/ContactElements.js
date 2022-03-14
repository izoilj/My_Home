import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem calc((100vw - 1300px) / 2);
`;

export const EmailImg = styled.img`
  margin-bottom: 5rem;
  height: 25rem;
  opacity: 85%;
`;

export const ContactHeading = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 5vw, 3rem);
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ContactContent = styled.div`
  margin-bottom: 3rem;

  form {
    z-index: 10;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    width: 80%;
    opacity: 70%;
  }

  input {
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    width: 100%;
    height: 48px;
    border-radius: 10px;
    background: #c3bfca;
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
    margin-bottom: 1rem;
    width: 100%;
    background: #c3bfca;

    ::placeholder {
      color: #000;
      opacity: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    /* display: flex;
    flex-direction: column; */
    padding: 0 1rem;

    input {
      /* margin-bottom: 1.5rem; */
      width: 100%;
      margin-right: 0;
    }
  }
`;