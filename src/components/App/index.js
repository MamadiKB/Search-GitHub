// == Import
import { Routes, Route } from 'react-router-dom';
import Menu from 'src/components/Menu';
import SearchPage from 'src/components/SearchPage';
import Faq from 'src/components/Faq';
import Error from 'src/components/Error';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <header>
        <img src={githubLogo} alt="github logo" />
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

// == Export
export default App;
