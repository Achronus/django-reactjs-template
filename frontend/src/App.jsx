import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';


function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App;
