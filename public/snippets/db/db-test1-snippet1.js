import { useHighlight } from '../../hooks/useHighlight';

const TsSnippet = () => {
  const snippet = useHighlight(
    'typescript',
    `function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];}
    console.log(createPair<string, number>('hello', 42)); // ['hello', 42123213123123]
    console.log(createPair<string, number>('hello', 42)); // ['hello', 421232123]
    console.log(createPair<string, number>('hello', 42)); // ['hello', 42123]
    `
  );
  return <p style={{ overflow: 'scroll' }}>{snippet}</p>;
};

export default TsSnippet;
