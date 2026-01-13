import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { SPONSORS_LIST } from '@/utils/constants/sponsorsList';
import 'swiper/css';

export const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <SectionStyle id="sponsors">
      <ContainerStyle>
        <SectionHeaderStyle>
          <TitleStyle>{t('sponsors_section.title')}</TitleStyle>
          <DecorationLineStyle />
        </SectionHeaderStyle>

        <CarouselWrapperStyle>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            speed={4000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="swiper-linear"
          >
            {SPONSORS_LIST.map((sponsor) => (
              <SwiperSlide key={sponsor.id}>
                <LogoContainerStyle>
                  <LogoImgStyle src={sponsor.img} alt={sponsor.name} />
                </LogoContainerStyle>
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselWrapperStyle>
      </ContainerStyle>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  padding: 4rem 0rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ContainerStyle = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionHeaderStyle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1.5rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const DecorationLineStyle = styled.div`
  width: 40px;
  height: 3px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
`;

const CarouselWrapperStyle = styled.div`
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.background}, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.colors.background}, transparent);
  }

  .swiper-linear .swiper-wrapper {
    transition-timing-function: linear !important;
  }
`;

const LogoContainerStyle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  cursor: context-menu;
`;

const LogoImgStyle = styled.img`
  max-height: 70px;
  max-width: 100%;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.05);
  }
`;
