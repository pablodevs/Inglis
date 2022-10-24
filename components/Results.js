import { Definitions, Frequency } from 'components';

export const Results = ({ word, pronunciation, frequency, translation, results }) => (
  <>
    <div className='flex-base-1'>
      <h2 className='word'>
        {word}<span className='pronunciation'>{pronunciation}</span>
      </h2>
      <Frequency value={frequency} />
    </div>
    <p className='translation'>{translation}</p>
    {results && results.length
      ? <Definitions results={results} />
      : <p>Sorry, no definitions were found</p>}

    <style jsx>{`
      .word {
        --typography-spacing-vertical: 1rem;
        text-transform: capitalize;
        color: var(--primary);
        display: inline-flex;
        align-items: baseline;
        flex-wrap: wrap;
        font-weight: 500;
      }
      .pronunciation {
        margin-left: 1rem;
        font-size: 0.625em;
        font-weight: 400;
        text-transform: none;
      }
      .translation {
        color: var(--secondary);
        font-size: 1.25rem;
        font-weight: 500;
        text-transform: capitalize;
      }
    `}</style>
  </>
);