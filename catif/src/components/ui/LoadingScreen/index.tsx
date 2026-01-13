import styled, { keyframes } from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingScreen = () => {
    const { t } = useTranslation();

    return (
        <Overlay>
            <SpinnerContainer>
                <SpinnerIcon />
                <LoadingText>{t('common.loading')}</LoadingText>
            </SpinnerContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.navBg};
  z-index: 9999;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SpinnerIcon = styled(FaCircleNotch)`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.accent};
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: #ffffff;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;