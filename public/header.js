import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <header>
        <a href="/">
          <h1>Hookor Tech</h1>
        </a>
        <aside>Web developement</aside>
      </header>

      <nav>
        <p>
          <a href="/nodejs" class={styles.a}>
            Node.js
          </a>
          <a href="/db" class={styles.a}>
            DB
          </a>
          <a href="/dev" class={styles.a}>
            Dev
          </a>
          <a href="/personal" class={styles.a}>
            Personal
          </a>
        </p>
      </nav>
    </>
  );
}
