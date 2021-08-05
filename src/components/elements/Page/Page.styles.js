import styled from 'styled-components';

export const ContainerPage = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: block;
  background-color: var(--bg-color);
  color: var(--font-color);
  transition: background-color 0.2s ease-in;
`;

export const Content = styled.div`
  will-change: transform;
  transform: translateY(${(p) => p.translateY}px);
`;
