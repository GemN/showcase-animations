import React, {
  memo, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

import projects, { categories } from '../../../constants/projects';
import useOnScreen from '../../../hooks/useOnScreen';
import { PageContext } from '../../elements/Page/PageProvider';

import ProjectCard from './ProjectCard';
import {
  SectionProjects, ContainerProjectsCards, SectionHeader, CurrentCategory, CurrentCategoryLabel,
} from './Projects.styles';

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const wheelCbRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const { state: { isScrollYPaused, pageTranslateY, theme }, dispatch } = useContext(PageContext);
  const onScreen = useOnScreen(sectionRef, '0px', 0.4);

  const handleTranslateCards = useCallback((e) => {
    const sectionElRect = sectionRef.current.getBoundingClientRect();
    const isWithinArea = Math.abs(sectionElRect.height / (sectionElRect.y + 0.01)) > 3.5;
    const newTheme = isWithinArea ? 'dark' : 'light';
    if (theme !== newTheme) {
      dispatch({ type: 'setTheme', theme: newTheme });
    }

    if (!isScrollYPaused) {
      const wheelingUp = e.deltaY < 0;
      const wheelingDown = e.deltaY > 0;
      if ((wheelingDown && sectionElRect.y < 0 && translateX === 0)
      || (wheelingUp && sectionElRect.y > 0 && translateX)
      ) {
        dispatch({ type: 'pauseScrollY', pause: true });
        dispatch({ type: 'setPageTranslateY', pageTranslateY: pageTranslateY - sectionElRect.top - e.deltaY });
      }
      return;
    }

    // scrolling horizontally
    let newX = translateX + e.deltaY * -1;
    const cardContainerWidth = cardsContainerRef.current.scrollWidth;
    if (newX > 0) {
      dispatch({ type: 'pauseScrollY', pause: false });
      newX = 0;
    } else if (newX < (window.innerWidth - cardContainerWidth - 160)) {
      dispatch({ type: 'pauseScrollY', pause: false });
      newX = (window.innerWidth - cardContainerWidth - 160);
    }
    setTranslateX(newX);
  }, [dispatch, pageTranslateY, translateX, theme, isScrollYPaused]);

  const translationPercent = useMemo(() => {
    if (!cardsContainerRef.current) return 0;
    const cardContainerWidth = cardsContainerRef.current.scrollWidth - window.innerWidth + 160;
    return Math.ceil((Math.abs(translateX) * 100) / cardContainerWidth);
  }, [translateX]);

  const currentCategory = useMemo(() => {
    if (translationPercent > 80) {
      return categories.corporate;
    } if (translationPercent >= 50 && translationPercent <= 80) {
      return categories.b2c;
    }
    return categories['product-design'];
  }, [translationPercent]);

  useEffect(() => {
    wheelCbRef.current = handleTranslateCards;
  }, [handleTranslateCards]);
  useEffect(() => {
    const cb = (e) => wheelCbRef.current(e);
    if (onScreen) {
      window.addEventListener('wheel', cb);
    }
    return () => {
      window.removeEventListener('wheel', cb);
    };
  }, [dispatch, onScreen]);
  return (
    <SectionProjects ref={sectionRef}>
      <SectionHeader>
        <h2>Projets récents</h2>
        <CurrentCategory>
          {currentCategory
            && <CurrentCategoryLabel>{currentCategory.label}</CurrentCategoryLabel>}
        </CurrentCategory>
      </SectionHeader>
      <ContainerProjectsCards ref={cardsContainerRef} translateX={translateX}>
        {projects.map((project) => {
          const projectCategoryData = categories[project.category];
          const opacity = projectCategoryData.order < currentCategory.order ? 0.2 : 1;
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              opacity={opacity}
            />
          );
        })}
      </ContainerProjectsCards>
    </SectionProjects>
  );
};

export default memo(Projects);
