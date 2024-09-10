import { useHighlight } from '../../hooks/useHighlight';
import styles from './style.module.css';
import { useState } from 'preact/hooks';

export default function Home() {
  const [count, setCount] = useState(0);
  const snippet = useHighlight(
    'typescript',
    `function createPair<S, T>(v1: S, v2: T): [S, T] {
		return [v1, v2];
	}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]`
  );

  return (
    <>
      <p>{snippet}</p>
    </>
  );
}
