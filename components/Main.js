import { Form, Results } from 'components';
import { useToggle } from 'hooks';
import { useState } from 'react';
import { GetWordInfoUseCase } from 'usecases';

export const Main = () => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({ message: '', hasError: false });
  const [isLoading, toggleIsLoading] = useToggle();

  const _withSpinner = async (asyncTask) => {
    toggleIsLoading();
    const resp = await asyncTask();
    toggleIsLoading();
    return resp;
  };

  const searchWord = async (word) => {
    const useCase = new GetWordInfoUseCase();
    const responseData = await _withSpinner(async () => useCase.execute(word));

    if (!responseData) {
      setError({ message: `Sorry, word '${word}' not found`, hasError: true });
      setResponse({});
      return;
    }
    setResponse(responseData);
  };

  return (
    <main>
      <Form setError={setError} error={error} callback={searchWord} />
      <section aria-busy={isLoading}>
        {isLoading
          ? null
          : error.hasError
            ? <div className='error-message text-center'>{error.message}</div>
            : response && response.word
              ? <Results word={response.word} pronunciation={response.pronunciation} frequency={response.frequency} results={response.results} />
              : null}
      </section>
    </main>
  );
};