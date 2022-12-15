import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { Header } from './Header';
import { SongList } from './SongList';
import { px2rem } from './utils';

const ContentWidth = 1280;

const MainStyle = css({
  width: '100%',
  height: '100vh',
  background: CommonStyles.Colors.bg.primary,
  overflow: 'auto',
});
const ContentStyle = css`
  max-width: ${px2rem(ContentWidth)};
  margin: 0 auto;
`;

function App() {
  return (
    <main className={MainStyle}>
      <Header />
      <section className={ContentStyle}>
        <SongList />
      </section>
    </main>
  );
}

export default App;
