import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 690px;
  padding-right: 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  transition: opacity 0.5s ease-in;
  opacity: ${(p) => p.opacity};
  & img {
    height: 540px;
    width: 100%;
  }
  &:last-child {
    padding-right: 0;
  }
`;

export const ProjectInfo = styled.div`
  padding-bottom: 32px;
  flex: 1;
  
  h3 {
    padding-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
  }
  
  p {
    padding-right: 30px;
    font-size: 18px;
    font-weight: 400;
    color: #a0a0a6;
    line-height: 25px;
    height: 70px;
  }
`;
