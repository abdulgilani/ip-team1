import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import Questions from './pages/Questions/Questions.jsx';
import Regular from './pages/Regular/Regular.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/regular" element={<Regular />} /> {/* Add the Regular route */}
      </Routes>
    </Router>
  );
}

export default App;
