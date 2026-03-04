import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
