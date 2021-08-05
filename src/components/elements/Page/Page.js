import React, {
  useCallback, useContext, useEffect, useRef,
} from 'react';

import { ContainerPage, Content } from './Page.styles';
import PageProvider, { PageContext } from './PageProvider';

type PageProps = {
  children: any
};

const Page = ({ children }: PageProps) => {
  const contentRef = useRef(null);
  const wheelCbRef = useRef(null);
  const { state: { isScrollYPaused, pageTranslateY, theme }, dispatch } = useContext(PageContext);
  const handleTranslatePageContent = useCallback((e) => {
    if (isScrollYPaused) {
      return;
    }
    const contentBottom = window.innerHeight - contentRef.current.offsetHeight;
    let newY = pageTranslateY + e.deltaY * -1;
    if (newY >= 0) {
      newY = 0;
    } else if (newY <= contentBottom) {
      newY = contentBottom;
    }
    dispatch({ type: 'setPageTranslateY', pageTranslateY: newY });
  }, [dispatch, pageTranslateY, isScrollYPaused]);

  useEffect(() => {
    const wheelCb = (e) => wheelCbRef.current(e);
    window.addEventListener('wheel', wheelCb);
    return () => {
      window.removeEventListener('wheel', wheelCb);
    };
  }, []);
  useEffect(() => {
    wheelCbRef.current = handleTranslatePageContent;
  }, [handleTranslatePageContent]);
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);
  return (
    <ContainerPage>
      <Content translateY={pageTranslateY} ref={contentRef}>
        {children}
      </Content>
    </ContainerPage>
  );
};

const PageWithContext = ({ children }: PageProps) => <PageProvider><Page>{children}</Page></PageProvider>;
export default PageWithContext;
