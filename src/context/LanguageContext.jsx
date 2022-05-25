import { createContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'no');

  const value = useMemo(() => ({
    language, setLanguage,
  }), [language, setLanguage]);

  // Change document language when language changes
  useEffect(() => {
    document.documentElement.lang = (language === 'no' ? 'nb' : 'en');
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
