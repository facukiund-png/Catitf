import styled from 'styled-components';
import { DirectiveCommission } from './components/DirectiveCommission';
import { VisionAndMission } from './components/VisionAndMission';
import { Statutes } from './components/Statutes';

const Institutional = () => {
    return (
        <PageContainerStyle>
            <SectionWrapperStyle id="board">
                <DirectiveCommission />
            </SectionWrapperStyle>

            <SectionWrapperStyle id="vision">
                <VisionAndMission />
            </SectionWrapperStyle>

            <SectionWrapperStyle id="statutes">
                <Statutes />
            </SectionWrapperStyle>
        </PageContainerStyle>
    );
};

export default Institutional;

const PageContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-bottom: 4rem;
`;

const SectionWrapperStyle = styled.div`
  scroll-margin-top: 4rem;
`;
