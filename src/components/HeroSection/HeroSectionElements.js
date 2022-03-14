import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 95vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  /* background: #2e2714; */
  opacity: 80%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(1.2rem, 5vw, 4rem);
  padding: 0 1rem;
  text-align: center;
  margin-bottom: 1.5rem;

  span {
    color: #955eff;
  }
`;

export const HeroP = styled.p`
  margin-bottom: 2rem;
  color: #fff;
  font-size: clamp(1rem, 3vw, 3rem);
  text-align: center;
  max-width: 600px;

  span {
    font-weight: 600;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
`;
