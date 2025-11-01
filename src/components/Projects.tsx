import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Github, ExternalLink, Image, Download } from 'lucide-react';
import { supabase } from '../services/supabaseClient'; // Verifique se este caminho está correto

// (Estilos permanecem os mesmos)
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
  display: flex; 
  flex-direction: column; 

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
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
  flex-grow: 1; 
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
  margin-top: auto; 
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

// *** LÓGICA DE DADOS ***

// 1. Interface (a mesma da última vez)
interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  repo_url: string | null;
  // 'techs' ainda não existe no admin
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Buscar dados do Supabase (COM ORDEM ATUALIZADA)
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      
      // ===== MUDANÇA AQUI =====
      // Agora ordena pela 'order_position' primeiro
      // A data de criação é usada como "desempate"
      const { data, error } = await supabase
        .from('projects') 
        .select('*')
        .order('order_position', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: true });
      // ===== FIM DA MUDANÇA =====

      if (error) {
        console.error('Erro ao buscar projetos:', error);
      } else if (data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <ProjectsSection id="projetos">
        <Container>
          <SectionTitle>Carregando Projetos...</SectionTitle>
        </Container>
      </ProjectsSection>
    );
  }

  return (
    <ProjectsSection id="projetos">
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} />
                ) : (
                  <Image size={60} strokeWidth={1.5} />
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                {/* <TechStack>
                    ...
                  </TechStack>
                */}

                <ProjectButtons>
                  {project.project_url && (
                    <ProjectButton href={project.project_url} target="_blank" rel="noopener noreferrer" $variant="primary">
                      <ExternalLink size={18} />
                      Ver Projeto
                    </ProjectButton>
                  )}
                  
                  {project.repo_url && (
                    <ProjectButton href={project.repo_url} target="_blank" rel="noopener noreferrer" $variant="secondary">
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