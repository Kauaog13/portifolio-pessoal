import styled from 'styled-components';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  z-index: 2;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Greeting = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 400;

  span {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const Bio = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary.accent};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.primary.dark};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.accent};

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const BackgroundCircle = styled.div<{ $size: number; $top: string; $left: string; $delay: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.colors.primary.accent}20, transparent);
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: float ${({ $delay }) => $delay}s ease-in-out infinite;
  z-index: 1;

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }
`;

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="inicio">
      <BackgroundCircle $size={300} $top="10%" $left="5%" $delay={6} />
      <BackgroundCircle $size={200} $top="60%" $left="80%" $delay={8} />
      <BackgroundCircle $size={150} $top="30%" $left="85%" $delay={7} />

      <HeroContent>
        <Greeting>Olá, eu sou</Greeting>
        <Name>Kauã Oliveira Gonçalves</Name>
        <Title>
          <span>Desenvolvedor Full Stack</span> & Empreendedor Digital
        </Title>
        <Bio>
          Apaixonado por transformar ideias em realidade através de código limpo e interfaces intuitivas.
          Especializado em criar experiências web modernas e eficientes.
        </Bio>
        <SocialLinks>
          <SocialLink href="https://github.com/Kauaog13" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kau%C3%A3-oliveira-7a099b270/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink href="mailto:kauaog13@gmail.com">
            <Mail size={24} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <ScrollIndicator onClick={scrollToNext}>
        <ChevronDown size={32} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
