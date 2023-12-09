// src/App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import ChocolateChipCookies from './ChocolateChipCookies';
import EverettC4 from './EverettC4';
import AidenGBC from './AidenGBC';
import Layout from './Layout';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/recipes/ChocolateChipCookies" element={<ChocolateChipCookies />} />
          <Route path="/recipes/EverettC4" element={<EverettC4 />} />
          <Route path="/recipes/AidenGBC" element={<AidenGBC />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
