import styled from 'styled-components';
import { Briefcase, GraduationCap, Download, Calendar } from 'lucide-react';

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



const Resume = () => {
  return (
    <ResumeSection id="curriculo">
      <Container>
        <SectionTitle>Currículo</SectionTitle>

        <ButtonContainer>
          <DownloadButton href="#" download>
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
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <ItemCard>
                    <ItemHeader>
                      <ItemTitle>{exp.title}</ItemTitle>
                      <ItemSubtitle>{exp.company}</ItemSubtitle>
                      <ItemDate>
                        <Calendar />
                        {exp.period}
                      </ItemDate>
                    </ItemHeader>
                    <ItemDescription>{exp.description}</ItemDescription>
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
              {education.map((edu, index) => (
                <TimelineItem key={index}>
                  <ItemCard>
                    <ItemHeader>
                      <ItemTitle>{edu.title}</ItemTitle>
                      <ItemSubtitle>{edu.institution}</ItemSubtitle>
                      <ItemDate>
                        <Calendar />
                        {edu.period}
                      </ItemDate>
                    </ItemHeader>
                    <ItemDescription>{edu.description}</ItemDescription>
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
