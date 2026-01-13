import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaFileSignature, FaUserPlus, FaSchool } from 'react-icons/fa';
import { mq } from '@/styles/breakpoints';
import pdfFile from '@/assets/pdf/reglamentoTorneoTaekwonDoAdaptadoITF210122.pdf';

export const RegistrationForms = () => {
    const { t } = useTranslation();

    return (
        <SectionStyle>
            <ContainerStyle>
                <HeaderStyle>
                    <MainIconStyle>
                        <FaFileSignature />
                    </MainIconStyle>

                    <TitleStyle>{t('documentation.forms_title')}</TitleStyle>
                    <SubtitleStyle>{t('documentation.forms_desc')}</SubtitleStyle>
                </HeaderStyle>

                <GridStyle>
                    <CardStyle href={pdfFile} target="_blank" rel="noopener noreferrer">
                        <CardIconStyle>
                            <FaSchool />
                        </CardIconStyle>
                        <CardLabelStyle>{t('documentation.forms_btn_school')}</CardLabelStyle>
                    </CardStyle>

                    <CardStyle href={pdfFile} target="_blank" rel="noopener noreferrer">
                        <CardIconStyle>
                            <FaUserPlus />
                        </CardIconStyle>
                        <CardLabelStyle>{t('documentation.forms_btn_student')}</CardLabelStyle>
                    </CardStyle>
                </GridStyle>
            </ContainerStyle>
        </SectionStyle>
    );
};

const SectionStyle = styled.section`
  padding: 6rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContainerStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderStyle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainIconStyle = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SubtitleStyle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${mq.smUp} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardStyle = styled.a`
  background: ${({ theme }) => theme.colors.surface};
  padding: 3rem 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const CardIconStyle = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  ${CardStyle}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardLabelStyle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  text-align: center;
`;
