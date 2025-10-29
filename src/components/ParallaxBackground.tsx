import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ParallaxLayer = styled.div<{ $speed: number; $translateY: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateY(${({ $translateY }) => $translateY}px);
  transition: transform 0.1s ease-out;
`;

const FloatingShape = styled.div<{
  $size: number;
  $top: string;
  $left: string;
  $opacity: number;
  $delay: number;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  opacity: ${({ $opacity }) => $opacity};
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary.accent}40,
    ${({ theme }) => theme.colors.primary.accent}20,
    transparent
  );
  filter: blur(30px);
  animation: float ${({ $delay }) => $delay}s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(20px, -30px) rotate(90deg);
    }
    50% {
      transform: translate(-10px, -50px) rotate(180deg);
    }
    75% {
      transform: translate(-30px, -20px) rotate(270deg);
    }
  }
`;

const GridPattern = styled.div<{ $translateY: number }>`
  position: absolute;
  width: 100%;
  height: 200%;
  top: -50%;
  left: 0;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.primary.accent}20 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.primary.accent}20 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  transform: translateY(${({ $translateY }) => $translateY * 0.2}px);
  transition: transform 0.1s ease-out;
`;

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { size: 400, top: '5%', left: '10%', opacity: 0.6, delay: 8, speed: 0.5 },
    { size: 300, top: '20%', left: '70%', opacity: 0.4, delay: 10, speed: 0.3 },
    { size: 250, top: '40%', left: '15%', opacity: 0.5, delay: 7, speed: 0.4 },
    { size: 350, top: '60%', left: '80%', opacity: 0.3, delay: 9, speed: 0.6 },
    { size: 200, top: '75%', left: '25%', opacity: 0.4, delay: 11, speed: 0.35 },
    { size: 280, top: '85%', left: '60%', opacity: 0.5, delay: 6, speed: 0.45 },
  ];

  return (
    <ParallaxContainer>
      <GridPattern $translateY={scrollY} />

      {shapes.map((shape, index) => (
        <ParallaxLayer key={index} $speed={shape.speed} $translateY={scrollY * shape.speed}>
          <FloatingShape
            $size={shape.size}
            $top={shape.top}
            $left={shape.left}
            $opacity={shape.opacity}
            $delay={shape.delay}
          />
        </ParallaxLayer>
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxBackground;
