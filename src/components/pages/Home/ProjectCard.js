import React, { memo } from 'react';

import { CardContainer, ProjectInfo } from './ProjectCard.styles';

type Props = {
  title: string,
  description: string,
  image: string,
  opacity: number
}

const ProjectCard = ({
  title, description, image, opacity,
}: Props) => (
  <CardContainer opacity={opacity}>
    <ProjectInfo>
      <h3>{title}</h3>
      <p>{description}</p>
    </ProjectInfo>
    <img src={image} alt={`${title}'s showcase`} />
  </CardContainer>
);

export default memo(ProjectCard);
