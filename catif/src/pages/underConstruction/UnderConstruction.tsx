import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyle>
      <ContentStyle>
        <ErrorCodeStyle>---</ErrorCodeStyle>

        <IconWrapperStyle>
          <FaCog />
        </IconWrapperStyle>

        <TitleStyle>{t('construction.title')}</TitleStyle>
        <SubtitleStyle>{t('construction.subtitle')}</SubtitleStyle>

        <HomeButtonStyle to="/">
          {t('construction.back_home')}
        </HomeButtonStyle>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default UnderConstruction;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ContainerStyle = styled.div`
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

const ContentStyle = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCodeStyle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 8rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.15;
  display: block;
`;

const IconWrapperStyle = styled.div`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: -3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  animation: ${rotate} 4s linear infinite;
`;

const TitleStyle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-bottom: 1rem;
  line-height: 1;
`;

const SubtitleStyle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.5;
`;

const HomeButtonStyle = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
