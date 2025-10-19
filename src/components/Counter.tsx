import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCouterClick = () => {
    setCount(count+1)
  };
  return (
    <>    
      <button onClick={handleCouterClick}> + </button>
      <span>{count}</span>
    </>
  );
};
