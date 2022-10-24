import { Form, Results } from 'components';
import { useToggle } from 'hooks';
import { useState } from 'react';
import { GetWordInfoUseCase } from 'usecases';

export const Main = () => {
  const [response, setResponse] = useState({});
  const [hasError, setHasError] = useState(false);
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
      setHasError(true);
      setResponse({});
      return;
    }
    setResponse(responseData);
  };

  return (
    <main>
      <Form setHasError={setHasError} hasError={hasError} callback={searchWord} />
      <section aria-busy={isLoading}>
        {isLoading
          ? null
          : hasError
            ? <div className='error-message text-center'>Sorry, word not found</div>
            : response && response.word
              ? <Results word={response.word} pronunciation={response.pronunciation} frequency={response.frequency} results={response.results} />
              : null}
      </section>
    </main>
  );
};