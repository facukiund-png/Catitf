import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { mq } from '@/styles/breakpoints';
import { FaUserTie, FaUsers, FaBalanceScale, FaRunning } from 'react-icons/fa';

const BOARD_MEMBERS = [
  { roleKey: 'institutional.roles.president', name: 'Nombre Apellido', icon: <FaUserTie />, highlight: true },
  { roleKey: 'institutional.roles.secretary', name: 'Nombre Apellido', icon: <FaUsers /> },
  { roleKey: 'institutional.roles.pro_secretary', name: 'Nombre Apellido', icon: <FaUsers /> },
  { roleKey: 'institutional.roles.treasurer', name: 'Nombre Apellido', icon: <FaBalanceScale /> },
  { roleKey: 'institutional.roles.vocals_titular', name: 'Lista de Nombres', icon: <FaUsers /> },
  { roleKey: 'institutional.roles.vocals_suplente', name: 'Lista de Nombres', icon: <FaUsers /> },
  { roleKey: 'institutional.roles.revisors_titular', name: 'Lista de Nombres', icon: <FaBalanceScale /> },
  { roleKey: 'institutional.roles.revisors_suplente', name: 'Nombre Apellido', icon: <FaBalanceScale /> },
  { roleKey: 'institutional.roles.director_sports', name: 'Nombre Apellido', icon: <FaRunning /> },
  { roleKey: 'institutional.roles.director_circuit', name: 'Nombre Apellido', icon: <FaRunning /> },
  { roleKey: 'institutional.roles.director_umpires', name: 'Nombre Apellido', icon: <FaRunning /> },
];

export const DirectiveCommission = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyle>
      <HeaderStyle>
        <TitleStyle>{t('institutional.board_title')}</TitleStyle>
        <LineStyle />
      </HeaderStyle>

      <GridStyle>
        {BOARD_MEMBERS.map((member, index) => (
          <CardStyle key={index} $isHighlight={member.highlight}>
            <IconWrapperStyle>{member.icon}</IconWrapperStyle>
            <RoleStyle>{t(member.roleKey)}</RoleStyle>
            <NameStyle>{member.name}</NameStyle>
          </CardStyle>
        ))}
      </GridStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const HeaderStyle = styled.div`
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

const LineStyle = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
`;

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${mq.mdUp} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.lgUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardStyle = styled.div<{ $isHighlight?: boolean }>`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid
    ${({ theme, $isHighlight }) => ($isHighlight ? theme.colors.accent : theme.colors.primary)};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  ${({ $isHighlight, theme }) =>
    $isHighlight &&
    `
      grid-column: 1 / -1;
      background: linear-gradient(135deg, ${theme.colors.surface} 0%, rgba(229, 57, 53, 0.1) 100%);
      border-bottom: 4px solid ${theme.colors.accent};

      ${mq.mdUp} {
        width: 60%;
        margin: 0 auto 2rem auto;
      }
    `}

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapperStyle = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const RoleStyle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const NameStyle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;
