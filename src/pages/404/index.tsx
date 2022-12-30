import { Link } from 'react-router-dom';
import { useStyles } from './index.style';

export default () => {
  const styles = useStyles();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <Link to='/' className={styles.backAction}>返回首页</Link>
      </div>
    </main>
  );
}
