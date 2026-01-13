import styled from 'styled-components';
import { CurrentRegulations } from './components/CurrentRegulations';
import { ExamManual } from './components/ExamManual';
import { RegistrationForms } from './components/RegistrationForms';

const Documentation = () => {
    return (
        <PageContainerStyle>
            <SectionWrapperStyle id="rules">
                <CurrentRegulations />
            </SectionWrapperStyle>

            <SectionWrapperStyle id="exams">
                <ExamManual />
            </SectionWrapperStyle>

            <SectionWrapperStyle id="forms">
                <RegistrationForms />
            </SectionWrapperStyle>
        </PageContainerStyle>
    );
};

export default Documentation;

const PageContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-bottom: 4rem;
`;

const SectionWrapperStyle = styled.div`
  scroll-margin-top: 140px;
`;
