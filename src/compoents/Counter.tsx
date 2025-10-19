import { useState } from 'react';

export const Counter = () => {
  const [cout, setCount] = useState(0);
  const handleCouterClick = () => {};
  return (
    <>
      <button onClick={handleCouterClick}> + </button>
    </>
  );
};
