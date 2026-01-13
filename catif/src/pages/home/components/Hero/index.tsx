import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import { SLIDES } from '@/utils/constants/slides';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Hero = () => {
  return (
    <HeroSectionStyle>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop
        allowTouchMove
        style={{ width: '100%', height: '100%' }}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContentStyle>
              <BackgroundImageStyle src={slide.image} alt="Hero slide" />
              <OverlayStyle />
            </SlideContentStyle>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroSectionStyle>
  );
};

const HeroSectionStyle = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 90px;
  overflow: hidden;

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.accent};
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transform: scale(0.7);
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const SlideContentStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

const OverlayStyle = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;
