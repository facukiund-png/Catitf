import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import eventImage from '@/assets/nextEvent.jpeg';

export const NextEvent = () => {
  const { t } = useTranslation();

  return (
    <SectionStyle id="next-event">
      <ContainerStyle>
        <SectionHeaderStyle>
          <TitleStyle>{t('next_event.title')}</TitleStyle>
          <DecorationLineStyle />
        </SectionHeaderStyle>

        <BannerWrapperStyle>
          <Zoom>
            <EventImageStyle src={eventImage} alt={t('next_event.title')} />
          </Zoom>
          <HoverHintStyle>Click para ampliar flyer</HoverHintStyle>
        </BannerWrapperStyle>
      </ContainerStyle>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  padding: 5rem 1.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
`;

const ContainerStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeaderStyle = styled.div`
  margin-bottom: 3rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const DecorationLineStyle = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
`;

const BannerWrapperStyle = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  cursor: zoom-in;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }

  & [data-rmiz-overlay] {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

const EventImageStyle = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 16px;
`;

const HoverHintStyle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;

  ${BannerWrapperStyle}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;
