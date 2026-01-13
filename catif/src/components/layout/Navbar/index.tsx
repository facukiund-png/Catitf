import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImg from '@/assets/logo.jpeg';
import { mq, BREAKPOINTS } from '@/styles/breakpoints';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { HamburgerButton } from '@/components/ui/HamburgerButton';

const NAV_ITEMS = [
  {
    labelKey: 'nav.home',
    path: '/',
    submenu: [
      { labelKey: 'nav.home_news', path: '/#news' },
      { labelKey: 'nav.home_events', path: '/#next-event' },
      { labelKey: 'nav.home_sponsors', path: '/#sponsors' },
    ],
  },
  {
    labelKey: 'nav.institutional',
    path: '/institutional',
    submenu: [
      { labelKey: 'nav.inst_board', path: '/institutional#board' },
      { labelKey: 'nav.inst_vision', path: '/institutional#vision' },
      { labelKey: 'nav.inst_statutes', path: '/institutional#statutes' },
    ],
  },
  {
    labelKey: 'nav.docs',
    path: '/documentation',
    submenu: [
      { labelKey: 'nav.docs_rules', path: '/documentation#rules' },
      { labelKey: 'nav.docs_exams', path: '/documentation#exams' },
      { labelKey: 'nav.docs_forms', path: '/documentation#forms' },
    ],
  },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenuIndex(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.lg && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((value) => !value);

  const toggleLanguage = () => {
    const currentLanguage = i18n.language.split('-')[0];
    const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
  };

  const handleMobileSubmenuToggle = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveSubmenuIndex(activeSubmenuIndex === index ? null : index);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <NavStyle>
      <ContainerStyle>
        <LogoContainerStyle to="/" onClick={handleLogoClick}>
          <LogoImgStyle src={logoImg} alt="CATIF Logo" />
        </LogoContainerStyle>

        <DesktopMenuStyle>
          {NAV_ITEMS.map((item, index) => (
            <DesktopMenuItemStyle key={index}>
              <NavLinkStyle to={item.path}>
                {t(item.labelKey)}
                {item.submenu && (
                  <FaChevronDown size={10} style={{ marginLeft: 6, opacity: 0.7 }} />
                )}
              </NavLinkStyle>

              {item.submenu && (
                <DropdownStyle>
                  {item.submenu.map((subItem, subIndex) => (
                    <DropdownLinkStyle key={subIndex} to={subItem.path} onClick={closeMenu}>
                      {t(subItem.labelKey)}
                    </DropdownLinkStyle>
                  ))}
                </DropdownStyle>
              )}
            </DesktopMenuItemStyle>
          ))}

          <LanguageSwitcher currentLang={i18n.language} toggleLang={toggleLanguage} />
        </DesktopMenuStyle>

        <RightGroupStyle>
          <HamburgerButton onClick={toggleMenu} isOpen={isOpen} />
        </RightGroupStyle>
      </ContainerStyle>

      <MobileOverlayStyle $isOpen={isOpen}>
        <OverlayTopBarStyle>
          <OverlayLogoStyle to="/" onClick={handleLogoClick}>
            <LogoImgStyle src={logoImg} alt="CATIF Logo" />
          </OverlayLogoStyle>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: 'auto' }}>
            <LanguageSwitcher currentLang={i18n.language} toggleLang={toggleLanguage} />
            <CloseButtonStyle onClick={toggleMenu} aria-label="Close menu">
              <FaTimes />
            </CloseButtonStyle>
          </div>
        </OverlayTopBarStyle>

        <MobileMenuContentStyle>
          {NAV_ITEMS.map((item, index) => (
            <MobileItemWrapperStyle key={index}>
              <MobileHeaderStyle
                onClick={(event) => (item.submenu ? handleMobileSubmenuToggle(index, event) : null)}
              >
                <MobileNavLinkStyle to={item.path} onClick={() => !item.submenu && setIsOpen(false)}>
                  {t(item.labelKey)}
                </MobileNavLinkStyle>

                {item.submenu && (
                  <ChevronWrapperStyle $isOpen={activeSubmenuIndex === index}>
                    <FaChevronDown />
                  </ChevronWrapperStyle>
                )}
              </MobileHeaderStyle>

              <MobileSubmenuStyle $isOpen={activeSubmenuIndex === index}>
                {item.submenu?.map((subItem, subIndex) => (
                  <MobileSubLinkStyle key={subIndex} to={subItem.path} onClick={() => setIsOpen(false)}>
                    {t(subItem.labelKey)}
                  </MobileSubLinkStyle>
                ))}
              </MobileSubmenuStyle>
            </MobileItemWrapperStyle>
          ))}
        </MobileMenuContentStyle>
      </MobileOverlayStyle>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.navBg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const ContainerStyle = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: clamp(20px, 4vw, 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainerStyle = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const LogoImgStyle = styled.img`
  height: 60px;
  width: auto;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const DesktopMenuStyle = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  align-items: center;

  ${mq.lgUp} {
    display: flex;
  }
`;

const DesktopMenuItemStyle = styled.li`
  position: relative;
  height: 90px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const NavLinkStyle = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  padding: 8px 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
  }
`;

const DropdownStyle = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: ${({ theme }) => theme.colors.navBg2};
  min-width: 240px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8px 0;
`;

const DropdownLinkStyle = styled(Link)`
  padding: 14px 24px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  display: block;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.colors.accent};
    padding-left: 28px;
  }
`;

const RightGroupStyle = styled.div`
  ${mq.lgUp} {
    display: none;
  }
`;

const MobileOverlayStyle = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.navBg};
  z-index: 2000;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
`;

const OverlayTopBarStyle = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding-inline: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const OverlayLogoStyle = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const CloseButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const MobileMenuContentStyle = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileItemWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  padding-bottom: 1rem;
`;

const MobileHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
`;

const MobileNavLinkStyle = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ChevronWrapperStyle = styled.div<{ $isOpen: boolean }>`
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.3s, color 0.3s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  padding: 10px;

  ${MobileHeaderStyle}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const MobileSubmenuStyle = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${({ $isOpen }) => ($isOpen ? '0.5rem' : '0')};
  padding-left: 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.accent};
`;

const MobileSubLinkStyle = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.05rem;
  padding: 6px 0;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
