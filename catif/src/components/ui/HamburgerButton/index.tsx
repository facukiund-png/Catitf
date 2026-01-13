import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { mq } from '@/styles/breakpoints'

interface HamburgerProps {
  onClick: () => void
  isOpen: boolean
}

export const HamburgerButton = ({ onClick, isOpen }: HamburgerProps) => {
  return (
    <ButtonStyle
      type="button"
      onClick={onClick}
      aria-label="Menu"
      $hidden={isOpen}
    >
      <FaBars />
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button<{ $hidden?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.4rem;
  cursor: pointer;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  ${mq.lgUp} {
    display: none;
  }
`
