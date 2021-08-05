import React, { createContext, useReducer } from 'react';

export const PageContext = createContext();

type Action = {
  type: string,
  pageTranslateY: number,
  theme?: 'light' | 'dark',
  pause?: boolean
}

const pageReducer = (state, action: Action) => {
  switch (action.type) {
    case 'setPageTranslateY':
      return {
        ...state,
        pageTranslateY: action.pageTranslateY,
      };

    case 'setTheme': {
      return {
        ...state,
        theme: action.theme,
      };
    }
    case 'pauseScrollY': {
      return {
        ...state,
        isScrollYPaused: action.pause,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  theme: 'light',
  isScrollYPaused: false,
  pageTranslateY: 0,
};

type Props = {
  children: any,
};
const PageProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(pageReducer, initialState);
  const providerValue = {
    state,
    dispatch,
  };
  return (
    <PageContext.Provider value={providerValue}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
