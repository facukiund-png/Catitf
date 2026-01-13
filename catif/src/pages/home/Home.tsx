import styled from 'styled-components';
import { Hero } from '@/pages/home/components/Hero';
import { QuickAccess } from '@/pages/home/components/QuickAccess';
import { NextEvent } from '@/pages/home/components/NextEvent';
import { LatestNews } from '@/pages/home/components/LatestNews';
import { Sponsors } from '@/pages/home/components/Sponsors';

const Home = () => {
  return (
    <PageContainerStyle>
      <Hero />

      <QuickAccess />

      <SectionWrapperStyle id="next-event">
        <NextEvent />
      </SectionWrapperStyle>

      <SectionWrapperStyle id="news">
        <LatestNews />
      </SectionWrapperStyle>

      <SectionWrapperStyle id="sponsors">
        <Sponsors />
      </SectionWrapperStyle>
    </PageContainerStyle>
  );
};

export default Home;

const PageContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const SectionWrapperStyle = styled.div`
  scroll-margin-top: 4rem;
`;
