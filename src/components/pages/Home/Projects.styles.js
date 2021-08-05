import styled from 'styled-components';

export const ContainerProjectsCards = styled.div`
  position: relative;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transform: translateX(${(p) => p.translateX}px);
`;

export const SectionProjects = styled.section`
  padding: 120px 80px;
  border-bottom: 1px solid rgba(0,0,0,.13);
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 80px;
  & h2 {
    padding-right: 44px;
  }
`;

export const CurrentCategory = styled.div`
  background-color: var(--bg-category);
  color: var(--font-category);
  height: 30px;
  margin-top: 5px;
  font-weight: 500;
  font-size: 16px;
  display: inline-flex;
  transition: 0.2s background-color;
  border-radius: 15px;
  align-items: center;
  padding-right: 16px;
`;

export const CurrentCategoryLabel = styled.div`
  padding: 0 12px;
`;
