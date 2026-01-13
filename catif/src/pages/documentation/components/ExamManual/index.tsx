import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaBookReader, FaFileDownload } from 'react-icons/fa';
import { mq } from '@/styles/breakpoints';
import pdfFile from '@/assets/pdf/reglamentoTorneoTaekwonDoAdaptadoITF210122.pdf';

export const ExamManual = () => {
    const { t } = useTranslation();

    return (
        <SectionStyle>
            <ContainerStyle>
                <ContentStyle>
                    <IconWrapperStyle>
                        <FaBookReader />
                    </IconWrapperStyle>

                    <TextContentStyle>
                        <TitleStyle>{t('documentation.exams_title')}</TitleStyle>
                        <DescriptionStyle>{t('documentation.exams_desc')}</DescriptionStyle>

                        <DownloadButtonStyle href={pdfFile} target="_blank" rel="noopener noreferrer">
                            <FaFileDownload />
                            {t('documentation.exams_btn')}
                        </DownloadButtonStyle>
                    </TextContentStyle>
                </ContentStyle>
            </ContainerStyle>
        </SectionStyle>
    );
};

const SectionStyle = styled.section`
  padding: 6rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
`;

const ContainerStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;

  ${mq.mdUp} {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }
`;

const IconWrapperStyle = styled.div`
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.2);

  ${mq.mdUp} {
    order: 2;
  }
`;

const TextContentStyle = styled.div`
  ${mq.mdUp} {
    flex: 1;
    order: 1;
    padding-right: 3rem;
  }
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const DescriptionStyle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

const DownloadButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 1rem 2rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    color: #fff;
    border-color: #fff;
  }
`;
