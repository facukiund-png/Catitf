import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GiBlackBelt } from 'react-icons/gi';

export const VisionAndMission = () => {
  const { t } = useTranslation();

  return (
    <SectionStyle>
      <OverlayStyle />
      <ContentStyle>
        <IconContainerStyle>
          <GiBlackBelt />
        </IconContainerStyle>

        <TitleStyle>{t('institutional.vision_title')}</TitleStyle>

        <TextStyle
          dangerouslySetInnerHTML={{
            __html: t('institutional.vision_content').replace(/\n/g, '<br/>'),
          }}
        />
      </ContentStyle>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 6rem 1.5rem;
  background-image: url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const OverlayStyle = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
`;

const ContentStyle = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
`;

const IconContainerStyle = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #fff;
`;

const TextStyle = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);

  br {
    display: block;
    margin-bottom: 1rem;
    content: '';
  }
`;
