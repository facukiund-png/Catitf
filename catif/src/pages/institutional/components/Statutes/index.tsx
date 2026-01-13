import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaCloudDownloadAlt } from 'react-icons/fa';
import statutesPdf from '@/assets/pdf/reglamentoTorneoTaekwonDoAdaptadoITF210122.pdf';

export const Statutes = () => {
  const { t } = useTranslation();

  return (
    <SectionStyle>
      <ContainerStyle>
        <IconWrapperStyle>
          <FaFilePdf />
        </IconWrapperStyle>

        <InfoStyle>
          <TitleStyle>{t('institutional.statutes_title')}</TitleStyle>
          <DescriptionStyle>{t('institutional.statutes_desc')}</DescriptionStyle>
        </InfoStyle>

        <DownloadButtonStyle href={statutesPdf} target="_blank" rel="noopener noreferrer">
          <FaCloudDownloadAlt style={{ marginRight: '10px' }} />
          {t('institutional.download_btn')}
        </DownloadButtonStyle>
      </ContainerStyle>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255,255,255,0.05);
`;

const ContainerStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border-left: 5px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }
`;

const IconWrapperStyle = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const InfoStyle = styled.div`
  flex: 1;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const DescriptionStyle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const DownloadButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(229, 57, 53, 0.4);
  }
`;
