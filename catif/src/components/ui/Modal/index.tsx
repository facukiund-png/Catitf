import { useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { mq } from '@/styles/breakpoints';

interface NewsItem {
    id: number;
    translationKey: string;
    images: string[];
}

interface NewsModalProps {
    news: NewsItem | null;
    onClose: () => void;
}

export const NewsModal = ({ news, onClose }: NewsModalProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (news) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [news]);

    if (!news) return null;

    const title = t(`news_items.${news.translationKey}.title`);
    const content = t(`news_items.${news.translationKey}.content`);

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <FaTimes />
                </CloseButton>

                <ScrollableContent>
                    <TextContent>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalBody dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />
                    </TextContent>

                    <ImageGallery>
                        {news.images.map((img, index) => (
                            <NewsImage key={index} src={img} alt={`News image ${index + 1}`} />
                        ))}
                    </ImageGallery>
                </ScrollableContent>
            </ModalContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const ModalContainer = styled.div`
    background: ${({ theme }) => theme.colors.surface};
    width: 100%;
    max-width: 900px;
    height: 90vh;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    z-index: 10;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;

    &:hover {
        background: ${({ theme }) => theme.colors.accent};
        color: #fff;
        transform: rotate(90deg);
    }
`;

const ScrollableContent = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 3rem 2rem;

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }
`;

const TextContent = styled.div`
    margin-bottom: 2.5rem;
`;

const ModalTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    line-height: 1.1;
    text-transform: uppercase;
`;

const ModalBody = styled.div`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};

    strong {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 700;
    }
    
    br {
        display: block;
        margin-bottom: 0.8em;
        content: "";
    }
`;

const ImageGallery = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    
    ${mq.mdUp} {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`;

const NewsImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    &:first-child {
        grid-column: 1 / -1;
        height: 400px;
    }
`;