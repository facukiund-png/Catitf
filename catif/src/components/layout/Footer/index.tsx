import styled from 'styled-components';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { mq } from '@/styles/breakpoints';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainerStyle>
      <FooterContentStyle>
        <BrandStyle>
          <h3>CATIF TAEKWONDO</h3>
          <p>{t('footer.slogan')}</p>
        </BrandStyle>

        <SocialIconsStyle>
          <SocialLinkStyle href="#" aria-label="Instagram">
            <FaInstagram />
          </SocialLinkStyle>
          <SocialLinkStyle href="#" aria-label="Facebook">
            <FaFacebookF />
          </SocialLinkStyle>
        </SocialIconsStyle>

        <CopyrightStyle>
          © {currentYear} CATIF. {t('footer.rights')}
        </CopyrightStyle>
      </FooterContentStyle>
    </FooterContainerStyle>
  );
};

const FooterContainerStyle = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 4rem 2rem;
  border-top: 4px solid ${({ theme }) => theme.colors.accent};
`;

const FooterContentStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  ${mq.mdUp} {
    grid-template-columns: 1.5fr 1fr 1fr;
    text-align: left;
    align-items: center;
  }
`;

const BrandStyle = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: 0.1em;
    font-size: 2rem;
    margin: 0;
    color: #fff;
    background: linear-gradient(180deg, #fff 0%, #ccc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0.5rem 0 0 0;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    letter-spacing: 0.05em;
  }
`;

const SocialIconsStyle = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  ${mq.mdUp} {
    justify-content: center;
  }
`;

const SocialLinkStyle = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(229, 57, 53, 0.4);
  }
`;

const CopyrightStyle = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);

  ${mq.mdUp} {
    text-align: right;
  }
`;
