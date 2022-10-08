import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <p className='bg-cold-blue'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dicta sit aliquid.
        </p>
      </div>
      <label htmlFor='input' aria-label='input'>
        <input
          id='input'
          type='text'
          onChange={(e) => setCount(+e.target.value)}
          value={count}
        />
      </label>
    </div>
  );
}

export default App;
