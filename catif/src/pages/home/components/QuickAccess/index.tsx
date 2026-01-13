import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaSearchLocation, FaTrophy } from 'react-icons/fa';
import { mq } from '@/styles/breakpoints';

const QUICK_ACCESS_ITEMS = [
  {
    id: 'calendar',
    icon: <FaCalendarAlt />,
    labelKey: 'quick_access.calendar',
    path: '/calendar',
    color: '#1E3A8A',
  },
  {
    id: 'schools',
    icon: <FaSearchLocation />,
    labelKey: 'quick_access.schools',
    path: '/schools',
    color: '#E53935',
  },
  {
    id: 'results',
    icon: <FaTrophy />,
    labelKey: 'quick_access.results',
    path: '/results',
    color: '#0F172A',
  },
];

export const QuickAccess = () => {
  const { t } = useTranslation();

  return (
    <SectionStyle>
      <ContainerStyle>
        {QUICK_ACCESS_ITEMS.map((item) => (
          <CardStyle key={item.id} to={item.path} $borderColor={item.color}>
            <IconWrapperStyle $color={item.color}>{item.icon}</IconWrapperStyle>
            <LabelStyle>{t(item.labelKey)}</LabelStyle>
          </CardStyle>
        ))}
      </ContainerStyle>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  padding: 5rem 1.5rem 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContainerStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${mq.mdUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardStyle = styled(Link) <{ $borderColor: string }>`
  background: ${({ theme }) => theme.colors.surface};
  padding: 3rem 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 4px solid ${({ $borderColor }) => $borderColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapperStyle = styled.div<{ $color: string }>`
  font-size: 3.5rem;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${CardStyle}:hover & {
    transform: scale(1.1);
  }
`;

const LabelStyle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
`;
