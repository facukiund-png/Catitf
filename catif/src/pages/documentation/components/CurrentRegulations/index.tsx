import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGavel, FaDownload } from 'react-icons/fa';
import pdfFile from '@/assets/pdf/reglamentoTorneoTaekwonDoAdaptadoITF210122.pdf';

export const CurrentRegulations = () => {
    const { t } = useTranslation();

    return (
        <SectionStyle>
            <ContainerStyle>
                <HeaderStyle>
                    <IconWrapperStyle>
                        <FaGavel />
                    </IconWrapperStyle>

                    <TitleStyle>{t('documentation.rules_title')}</TitleStyle>
                    <LineStyle />
                </HeaderStyle>

                <DescriptionStyle>{t('documentation.rules_desc')}</DescriptionStyle>

                <DownloadButtonStyle href={pdfFile} target="_blank" rel="noopener noreferrer">
                    <FaDownload />
                    {t('documentation.rules_btn')}
                </DownloadButtonStyle>
            </ContainerStyle>
        </SectionStyle>
    );
};

const SectionStyle = styled.section`
  padding: 6rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContainerStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderStyle = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapperStyle = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const LineStyle = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
`;

const DescriptionStyle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

const DownloadButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;
