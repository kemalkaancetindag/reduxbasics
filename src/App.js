import React from 'react';
import Counter from './components/Counter'
import IncreaseCounter from './components/IncreaseCounter'
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseTwiceCounter from './components/IncreaseTwiceCounter'



function App() {
  return (
    <div>
     <Counter/>
     <IncreaseCounter/>
     <DecreaseCounter/>
     <IncreaseTwiceCounter/>
      
    </div>
  );
}

export default App;
