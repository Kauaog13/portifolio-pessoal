import styled from 'styled-components';
import { Github, ExternalLink, Image, Download } from 'lucide-react'; // Adicionado o ícone Download

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
  display: flex; // Usando flex para alinhar o conteúdo
  flex-direction: column; // Conteúdo em coluna

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
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Faz o conteúdo crescer para preencher o card
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
  flex-grow: 1; // Empurra os botões para baixo
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
  margin-top: auto; // Alinha os botões na base do card
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
  text-align: center;

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

// Substituindo os projetos placeholder pelos seus projetos reais
const projects = [
  {
    title: 'E-commerce de Joias',
    description: 'Marca/Loja fundada em 2023 por mim. Criei um site no estilo landigpage/E-commerce para melhor experiencia com meus clientes, manter informações sobre a loja e vender meus produtos. Atualmente minha loja é referência em Prata 925 na minha cidade.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Netlify'],
    demoUrl: 'https://www.pratasdamafia.com.br/',
    repoUrl: null, // Repositório privado
    demoText: 'Ver Site',
  },
  {
    title: 'Controle de Finanças Pessoal',
    description: 'Sistema completo para gerenciar finanças pessoais, acompanhar receitas, despesas e definir orçamentos.',
    tech: ['Node.js', 'Express', 'MySQL', 'JWT', 'HTML5', 'CSS3', 'JavaScript'],
    demoUrl: null, // Não hospedado
    repoUrl: 'https://github.com/Kauaog13/financas-app.git',
    demoText: 'Live Demo',
  },
  {
    title: 'Organizador de Arquivos (Desktop)',
    description: 'App Python com interface Tkinter para organizar arquivos automaticamente em subpastas com base na extensão.',
    tech: ['Python', 'Tkinter', 'threading', 'PyInstaller'],
    demoUrl: 'https://github.com/Kauaog13/files-organizer-py/releases/tag/v1.0.0',
    repoUrl: 'https://github.com/Kauaog13/files-organizer-py.git',
    demoText: 'Baixar App',
  },
];

// Função para escolher o ícone do botão principal
const getDemoIcon = (demoText: string) => {
  if (demoText === 'Baixar App') {
    return <Download size={18} />;
  }
  return <ExternalLink size={18} />;
};


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
                  {/* Botão de Demo/Site (Condicional) */}
                  {project.demoUrl && (
                    <ProjectButton href={project.demoUrl} target="_blank" rel="noopener noreferrer" $variant="primary">
                      {getDemoIcon(project.demoText || 'Live Demo')}
                      {project.demoText || 'Live Demo'}
                    </ProjectButton>
                  )}
                  
                  {/* Botão de Código (Condicional) */}
                  {project.repoUrl && (
                    <ProjectButton href={project.repoUrl} target="_blank" rel="noopener noreferrer" $variant="secondary">
                      <Github size={18} />
                      Ver Código
                    </ProjectButton>
                  )}
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