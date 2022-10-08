import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <input
        type='text'
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
    </div>
  );
}

export default App;
