export const Definitions = ({ results }) => (
  <ul>
    {results.map((result, idx) => <li key={idx}>{result.definition}</li>)}
  </ul>
);