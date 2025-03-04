import styles from "./header.module.css";
import { useLocation } from "preact-iso";
const darkTheme = import("highlight.js/styles/github-dark.min.css");
const lightTheme = import("highlight.js/styles/github.min.css");

export default function Header() {
  const url = useLocation();

  return (
    <>
      <header>
        <a href="/">
          <h1>Hookor Tech</h1>
        </a>
        {url.path === "/" && <aside>Web developement</aside>}
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
