import React, { useState } from 'react';
import './App.css';

function App() {
  const [i, setI] = useState(0);

  const handleClick = () => {
    const btn = document.querySelector('button');
    btn.innerText = i;
    btn.classList.remove('finished');
    btn.classList.add('loading');

    const inter = setInterval(() => {
      setI(prevI => {
        const updatedI = prevI + 1;
        btn.innerText = updatedI;
        btn.classList.remove(`percent-${prevI}`);
        btn.classList.add(`percent-${updatedI}`);

        if (updatedI >= 100) {
          clearInterval(inter);
          setI(0);
          btn.innerText = '';
          btn.classList.remove('loading');
          btn.classList.add('finished');
          btn.classList.remove('percent-100');
        }

        return updatedI;
      });
    }, 25);
  };

  return (
    <>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
