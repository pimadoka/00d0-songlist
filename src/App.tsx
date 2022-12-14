import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { Header } from './Header';

const MainStyle = css({
  width: '100%',
  height: '100vh',
  background: CommonStyles.Colors.bg.primary,
});

function App() {
  return (
    <main className={MainStyle}>
      <Header />
    </main>
  );
}

export default App;
