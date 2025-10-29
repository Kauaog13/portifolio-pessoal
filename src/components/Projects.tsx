import styled from 'styled-components';
import { Github, ExternalLink, Image } from 'lucide-react';

const ProjectsSection = styled.section`
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
  max-width: 1400px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 16px;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.interactive} 0%, ${({ theme }) => theme.colors.primary.card} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.accent};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, ${({ theme }) => theme.colors.primary.accent}30 50%, transparent 70%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.muted};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary.interactive};
  color: ${({ theme }) => theme.colors.primary.accent};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary.accent}40;
`;

const ProjectButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProjectButton = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  ${({ $variant, theme }) => $variant === 'primary' ? `
    background: ${theme.colors.primary.accent};
    color: ${theme.colors.primary.dark};

    &:hover {
      background: ${theme.colors.primary.accent}dd;
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  ` : `
    background: transparent;
    color: ${theme.colors.primary.accent};
    border: 2px solid ${theme.colors.primary.accent};

    &:hover {
      background: ${theme.colors.primary.accent}20;
      transform: translateY(-2px);
    }
  `}
`;

const projects = [
  {
    title: 'E-commerce Moderno',
    description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Dashboard Analytics',
    description: 'Sistema de analytics com visualização de dados em tempo real e relatórios personalizados.',
    tech: ['TypeScript', 'React', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'App de Tarefas',
    description: 'Aplicativo de gerenciamento de tarefas com sincronização em tempo real e notificações.',
    tech: ['React Native', 'Firebase', 'Redux', 'Styled Components'],
  },
  {
    title: 'Plataforma de Blog',
    description: 'CMS personalizado para blogs com editor rico, SEO otimizado e sistema de comentários.',
    tech: ['Next.js', 'Markdown', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Sistema de Reservas',
    description: 'Sistema completo de agendamento e reservas com calendário interativo e notificações.',
    tech: ['Vue.js', 'Express', 'MySQL', 'Socket.io'],
  },
  {
    title: 'API RESTful',
    description: 'API escalável com autenticação JWT, rate limiting e documentação completa.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projetos">
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <Image size={60} strokeWidth={1.5} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectButtons>
                  <ProjectButton href="#" $variant="primary">
                    <ExternalLink size={18} />
                    Live Demo
                  </ProjectButton>
                  <ProjectButton href="#" $variant="secondary">
                    <Github size={18} />
                    Ver Código
                  </ProjectButton>
                </ProjectButtons>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
