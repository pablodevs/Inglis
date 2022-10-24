import { useState } from 'react';

export const Form = ({ setHasError, hasError, callback }) => {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setHasError(false);
    setData(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data && !hasError) {
      await callback(data);
      setData('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Enter an english word'
        value={data}
        onChange={handleChange} />
    </form>
  );
};