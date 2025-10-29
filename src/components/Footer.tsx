import styled from 'styled-components';
import { Heart, Code2 } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background.card};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.accent}30;
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;

  svg {
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Desenvolvido por Kauã Oliveira
        </FooterText>
        <Copyright>
          © {currentYear} Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
