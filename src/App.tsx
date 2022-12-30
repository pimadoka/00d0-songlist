import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/Theme';
import Csv2JsonPage from '@/pages/csv2json';
import SongListPage from '@/pages/songlist';
import NotMatchPage from '@/pages/404';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<SongListPage />} />
          <Route path='/csv2json' element={<Csv2JsonPage />} />
          <Route path='*' element={<NotMatchPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
