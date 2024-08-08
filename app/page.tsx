import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>main left</div>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>main right</div>
    </main>
  );
}
