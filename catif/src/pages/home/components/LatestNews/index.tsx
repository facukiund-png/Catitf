import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import newsData from '@/data/news.json';
import { NewsModal } from '@/components/ui/Modal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const LatestNews = () => {
    const { t } = useTranslation();
    const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null);

    const latestNews = [...newsData].sort((a, b) => b.id - a.id).slice(0, 6);

    return (
        <SectionStyle id="news">
            <ContainerStyle>
                <SectionHeaderStyle>
                    <TitleStyle>{t('news_section.title')}</TitleStyle>
                    <DecorationLineStyle />
                </SectionHeaderStyle>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    style={{ padding: '1rem 0 3rem 0' }}
                >
                    {latestNews.map((newsItem) => (
                        <SwiperSlide key={newsItem.id}>
                            <NewsCardStyle onClick={() => setSelectedNews(newsItem)}>
                                <ImageContainerStyle>
                                    <CardImageStyle src={newsItem.images[0]} alt="News thumbnail" />
                                    <OverlayStyle />
                                    <ReadMoreStyle>{t('news_section.read_more')}</ReadMoreStyle>
                                </ImageContainerStyle>

                                <CardContentStyle>
                                    <CardTitleStyle>
                                        {t(`news_items.${newsItem.translationKey}.title`)}
                                    </CardTitleStyle>
                                </CardContentStyle>
                            </NewsCardStyle>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ButtonContainerStyle>
                    <ViewAllButtonStyle to="/news-archive">
                        {t('news_section.view_all')}
                    </ViewAllButtonStyle>
                </ButtonContainerStyle>

                <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
            </ContainerStyle>
        </SectionStyle>
    );
};

const SectionStyle = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContainerStyle = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeaderStyle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const TitleStyle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const DecorationLineStyle = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
`;

const NewsCardStyle = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 420px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainerStyle = styled.div`
  position: relative;
  height: 240px;
  flex-shrink: 0;
  overflow: hidden;
`;

const CardImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${NewsCardStyle}:hover & {
    transform: scale(1.1);
  }
`;

const OverlayStyle = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s;

  ${NewsCardStyle}:hover & {
    opacity: 1;
  }
`;

const ReadMoreStyle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  ${NewsCardStyle}:hover & {
    opacity: 1;
  }
`;

const CardContentStyle = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardTitleStyle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;

const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ViewAllButtonStyle = styled(Link)`
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
