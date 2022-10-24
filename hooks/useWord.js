// import useSWR from 'swr';
// const apiConfig = require('config/api');
// const { apiUrl, apiHost, apiKey, getWordPath } = apiConfig;

// const options = {
//   headers: {
//     'X-RapidAPI-Key': apiKey,
//     'X-RapidAPI-Host': apiHost
//   }
// };
// const fetcher = (url) => fetch(url, options).then(res => res.json());

// export const useWord = (word) => {
//   const { data, error } = useSWR(`${apiUrl}${getWordPath}${word}`, fetcher);

//   return {
//     word: data,
//     isLoading: !error && !data,
//     isError: error
//   };
// };