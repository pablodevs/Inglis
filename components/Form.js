import { useRef, useState } from 'react';

export const Form = ({ setError, error, callback }) => {
  const [data, setData] = useState('');
  const inputEl = useRef(null);

  const handleChange = (event) => {
    setError({ message: '', hasError: false });
    setData(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data && !error.hasError) {
      await callback(data);
      setData('');
      inputEl.current.blur();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          id='search'
          name='search'
          placeholder='Enter an english word'
          value={data}
          onChange={handleChange}
          ref={inputEl} />
      </form>
      <style jsx>{`
        input[type='search'] {
          margin-bottom: 0;
        }
    `}</style>
    </>
  );
};