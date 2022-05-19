import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon Musk');

  // /videos /images /search
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key':
          '53416435e0msh5a7f52dd44f073fp1df434jsn55c4e159136f',
      },
    });
    const data = await response.json();

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if (type.includes('/image')) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    // console.log(data.image_results[0]);

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
