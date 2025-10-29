import styled from 'styled-components';
import { Code2, Database, Settings, Smartphone, Layout, Server, GitBranch, Package } from 'lucide-react';

const TechSection = styled.section`
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

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Category = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary.interactive};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.accent};
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary.interactive}50;
  border-radius: 8px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.interactive};
    transform: translateX(5px);
  }
`;

const TechIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary.accent}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const TechName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
`;

const techCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    technologies: [
      { name: 'React', icon: 'R' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Next.js', icon: 'N' },
      { name: 'Tailwind CSS', icon: 'TW' },
      { name: 'Styled Components', icon: 'SC' },
      { name: 'Redux', icon: 'RX' },
    ],
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    technologies: [
      { name: 'REST API', icon: 'API' },
      { name: 'Node.js', icon: 'N' },
      { name: 'Express', icon: 'E' },
      { name: 'Python', icon: 'PY' },
      { name: 'PHP', icon: 'PHP' },
      { name: 'Java', icon: 'JV' },
    ],
  },
  {
    title: 'Database',
    icon: <Database size={24} />,
    technologies: [
      { name: 'MySQL', icon: 'SQL' },
      { name: 'PostgreSQL', icon: 'PG' },
      { name: 'Supabase', icon: 'SB' },
      { name: 'MongoDB', icon: 'M' },
    ],
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={24} />,
    technologies: [
      { name: 'React Native', icon: 'RN' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <Settings size={24} />,
    technologies: [
      { name: 'Git/Github', icon: 'G' },
      { name: 'CI/CD', icon: 'CI' },
      { name: 'Netlify', icon: 'NF' },
      { name: 'Vercel', icon: 'V' },
      { name: 'Cloudnary', icon: 'CN' },
      { name: 'Google Gemini', icon: 'GG' },
    ],
  },
  {
    title: 'Outros',
    icon: <Package size={24} />,
    technologies: [
      { name: 'Webpack', icon: 'W' },
      { name: 'Vite', icon: 'V' },  
      { name: 'Pacote Office', icon: 'PO' },
      { name: 'Figma', icon: 'F' },
      { name: 'Canva', icon: 'C' },
      { name: 'Postman', icon: 'PM' },
    ],
  },
];

const TechStack = () => {
  return (
    <TechSection id="tecnologias">
      <Container>
        <SectionTitle>Tecnologias</SectionTitle>
        <CategoriesContainer>
          {techCategories.map((category, index) => (
            <Category key={index}>
              <CategoryHeader>
                <IconWrapper>{category.icon}</IconWrapper>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <TechGrid>
                {category.technologies.map((tech, techIndex) => (
                  <TechItem key={techIndex}>
                    <TechIcon>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechGrid>
            </Category>
          ))}
        </CategoriesContainer>
      </Container>
    </TechSection>
  );
};

export default TechStack;
