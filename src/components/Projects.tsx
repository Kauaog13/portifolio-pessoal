// src/components/Projects.tsx
import { useState, useEffect } from 'react'; // Importar useState e useEffect
import styled from 'styled-components';
import { Github, ExternalLink, Image, Download } from 'lucide-react';
import { supabase } from '../services/supabaseClient'; // Importar o cliente

// ... (Todos os seus styled-components permanecem iguais) ...

// Definir um tipo para o seu projeto (bom para TypeScript)
interface Project {
  id: number;
  titulo: string;
  descricao: string;
  techs: string[];
  image_url: string | null;
  demo_url: string | null;
  repo_url: string | null;
  demo_text: string | null;
}

// Remover o array 'projects' estático daqui...

const getDemoIcon = (demoText: string) => {
  // ... (função igual) ...
};

const Projects = () => {
  // Criar um estado para armazenar os projetos vindos do Supabase
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Usar useEffect para buscar os dados quando o componente carregar
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('projetos')      // Nome da tabela
        .select('*')         // Selecionar todas as colunas
        .order('order', { ascending: true }); // Ordenar pelo campo 'order'

      if (error) {
        console.error('Erro ao buscar projetos:', error);
      } else if (data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []); // O array vazio [] faz isso rodar apenas uma vez

  // (Opcional) Mostrar um loading
  if (loading) {
    return <ProjectsSection id="projetos"><SectionTitle>Carregando Projetos...</SectionTitle></ProjectsSection>;
  }

  return (
    <ProjectsSection id="projetos">
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>
        <ProjectsGrid>
          {/* Mapear sobre o estado 'projects' */}
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                {/* Usar a imagem vinda do Supabase */}
                {project.image_url ? (
                  <img src={project.image_url} alt={project.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <Image size={60} strokeWidth={1.5} />
                )}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.titulo}</ProjectTitle>
                <ProjectDescription>{project.descricao}</ProjectDescription>
                <TechStack>
                  {project.techs.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectButtons>
                  {project.demo_url && (
                    <ProjectButton href={project.demo_url} target="_blank" rel="noopener noreferrer" $variant="primary">
                      {getDemoIcon(project.demo_text || 'Live Demo')}
                      {project.demo_text || 'Live Demo'}
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