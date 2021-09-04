import { Headlines } from '../components/Headlines';
import { Links } from '../components/Links';
import styles from '../styles/Home.module.css';

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headlines title={props.title} pageName={props.pageName} />
      <Links />
    </main>
  );
}
