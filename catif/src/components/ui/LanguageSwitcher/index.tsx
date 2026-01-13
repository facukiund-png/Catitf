import styled from 'styled-components'
import { FaGlobe } from 'react-icons/fa'

interface LanguageSwitcherProps {
  currentLang: string
  toggleLang: () => void
}

export const LanguageSwitcher = ({ currentLang, toggleLang }: LanguageSwitcherProps) => {
  const displayLang = currentLang.split('-')[0].toUpperCase()

  return (
    <SwitcherButton onClick={toggleLang} aria-label="Switch Language">
      <FaGlobe />
      <span>{displayLang}</span>
    </SwitcherButton>
  )
}

const SwitcherButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 6px 14px;
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }

  svg {
    font-size: 0.9rem;
  }
`
