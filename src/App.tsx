import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/Theme';
import Csv2JsonPage from '@/pages/csv2json';
import SongListPage from '@/pages/songlist';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<SongListPage />} />
          <Route path='/csv2json' element={<Csv2JsonPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
