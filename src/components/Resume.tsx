import { useState, useEffect } from 'react'; // Importar hooks
import styled from 'styled-components';
import { Briefcase, GraduationCap, Download, Calendar } from 'lucide-react';
import { supabase } from '../services/supabaseClient'; // Importar Supabase

// (Todos os estilos permanecem os mesmos)
const ResumeSection = styled.section`
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

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: 50px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin: ${({ theme }) => theme.spacing.xl} auto;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
    background: ${({ theme }) => theme.colors.primary.accent}dd;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const TimelineColumn = styled.div`
  position: relative;
`;

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-weight: 600;

  svg {
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary.accent}40;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing.xl};
    top: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.accent};
    border: 3px solid ${({ theme }) => theme.colors.background.card};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    z-index: 1;
  }
`;

const ItemCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid transparent;

  &:hover {
    transform: translateX(10px);
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ItemHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ItemTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ItemSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.primary.accent};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ItemDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

// *** LÓGICA DE DADOS ATUALIZADA ***

// 1. Interfaces
interface Experience {
  id: number;
  titulo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

interface Education {
  id: number;
  titulo: string;
  instituicao: string;
  periodo: string;
  descricao: string;
}

// 2. Arrays estáticos removidos

const Resume = () => {
  // 3. Estados para os dados
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [cvUrl, setCvUrl] = useState<string>('#'); // URL do currículo
  const [loading, setLoading] = useState(true);

  // 4. Buscar todos os dados
  useEffect(() => {
    const fetchResumeData = async () => {
      setLoading(true);
      
      // Criar promises para todas as buscas
      const expPromise = supabase.from('experiencias').select('*').order('order', { ascending: true });
      const eduPromise = supabase.from('formacao').select('*').order('order', { ascending: true });
      const cvPromise = supabase.from('configuracoes').select('value').eq('key', 'url_curriculo').single();

      // Executar todas em paralelo
      const [expResult, eduResult, cvResult] = await Promise.all([expPromise, eduPromise, cvPromise]);

      if (expResult.data) setExperiences(expResult.data);
      if (eduResult.data) setEducation(eduResult.data);
      if (cvResult.data) setCvUrl(cvResult.data.value);

      if (expResult.error) console.error('Erro ao buscar experiências:', expResult.error);
      if (eduResult.error) console.error('Erro ao buscar formação:', eduResult.error);
      if (cvResult.error) console.error('Erro ao buscar URL do currículo:', cvResult.error);

      setLoading(false);
    };

    fetchResumeData();
  }, []);

  // 5. Tela de Loading
  if (loading) {
    return (
      <ResumeSection id="curriculo">
        <Container>
          <SectionTitle>Carregando Currículo...</SectionTitle>
        </Container>
      </ResumeSection>
    );
  }

  // 6. Componente renderizado
  return (
    <ResumeSection id="curriculo">
      <Container>
        <SectionTitle>Currículo</SectionTitle>

        <ButtonContainer>
          {/* Usar a URL do Supabase */}
          <DownloadButton href={cvUrl} download target="_blank" rel="noopener noreferrer">
            <Download size={20} />
            Baixar Currículo
          </DownloadButton>
        </ButtonContainer>

        <TimelineContainer>
          <TimelineColumn>
            <ColumnTitle>
              <Briefcase size={28} />
              Experiência Profissional
            </ColumnTitle>
            <Timeline>
              {experiences.map((exp) => (
                <TimelineItem key={exp.id}>
                  <ItemCard>
                    <ItemHeader>
                      <ItemTitle>{exp.titulo}</ItemTitle>
                      <ItemSubtitle>{exp.empresa}</ItemSubtitle>
                      <ItemDate>
                        <Calendar />
                        {exp.periodo}
                      </ItemDate>
                    </ItemHeader>
                    <ItemDescription>{exp.descricao}</ItemDescription>
                  </ItemCard>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineColumn>

          <TimelineColumn>
            <ColumnTitle>
              <GraduationCap size={28} />
              Formação Acadêmica
            </ColumnTitle>
            <Timeline>
              {education.map((edu) => (
                <TimelineItem key={edu.id}>
                  <ItemCard>
                    <ItemHeader>
                      <ItemTitle>{edu.titulo}</ItemTitle>
                      <ItemSubtitle>{edu.instituicao}</ItemSubtitle>
                      <ItemDate>
                        <Calendar />
                        {edu.periodo}
                      </ItemDate>
                    </ItemHeader>
                    <ItemDescription>{edu.descricao}</ItemDescription>
                  </ItemCard>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineColumn>
        </TimelineContainer>
      </Container>
    </ResumeSection>
  );
};

export default Resume;