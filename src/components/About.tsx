import styled from 'styled-components';
import { User } from 'lucide-react';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.accent};
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary.accent};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  background: ${({ theme }) => theme.colors.background.card};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary.accent}, ${({ theme }) => theme.colors.primary.interactive});
    border-radius: 20px;
    z-index: -1;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.card} 0%, ${({ theme }) => theme.colors.primary.interactive} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.accent};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-left: 4px solid ${({ theme }) => theme.colors.primary.accent};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>
        <AboutContent>
          <PhotoContainer>
            <PhotoWrapper>
              <PhotoPlaceholder>
                <User size={120} />
              </PhotoPlaceholder>
            </PhotoWrapper>
          </PhotoContainer>

          <TextContent>
            <Paragraph>
              Sou um <strong>desenvolvedor full stack</strong> apaixonado por criar soluções digitais
              que fazem a diferença. Com experiência em diversas tecnologias modernas, transformo
              ideias complexas em produtos simples e eficientes.
            </Paragraph>
            <Paragraph>
              Minha jornada no desenvolvimento web começou há alguns anos, e desde então venho
              constantemente aprendendo e me adaptando às novas tecnologias do mercado. Acredito
              que código limpo, boas práticas e experiência do usuário são fundamentais para
              criar aplicações de qualidade.
            </Paragraph>
            <HighlightBox>
              <Paragraph>
                <strong>Foco principal:</strong> Desenvolvimento de aplicações web escaláveis,
                interfaces responsivas e experiências de usuário intuitivas. Sempre buscando
                aprender novas tecnologias e compartilhar conhecimento com a comunidade.
              </Paragraph>
            </HighlightBox>
          </TextContent>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
