import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.background.card}ee` : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.md : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.accent};
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => $isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: ${({ theme }) => theme.colors.background.card};
    flex-direction: column;
    justify-content: center;
    transition: right ${({ theme }) => theme.transitions.normal};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  position: relative;
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.xs};
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {'<Dev />'}
        </Logo>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>

        <NavLinks $isOpen={isOpen}>
          <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
          <NavLink onClick={() => scrollToSection('sobre')}>Sobre Mim</NavLink>
          <NavLink onClick={() => scrollToSection('projetos')}>Projetos</NavLink>
          <NavLink onClick={() => scrollToSection('tecnologias')}>Tecnologias</NavLink>
          <NavLink onClick={() => scrollToSection('curriculo')}>Currículo</NavLink>
          <NavLink onClick={() => scrollToSection('contato')}>Contato</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
