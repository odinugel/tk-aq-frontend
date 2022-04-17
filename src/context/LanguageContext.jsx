import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('no');

  const value = useMemo(() => ({
    language, setLanguage,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
