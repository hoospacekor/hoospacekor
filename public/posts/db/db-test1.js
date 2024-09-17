// Metadata: {"postTitle": "디비 파일"}
import SharedDate from '../../context/dateContext';
import Tssnippet from '../../snippets/db/db-test1-snippet1';

const dbtest1 = () => {
  return (
    <>
      <h2>디비 파일</h2>
      <SharedDate.Consumer>
        {(value) => (
          <p>
            <i>
              <time>{value}</time>
            </i>
          </p>
        )}
      </SharedDate.Consumer>
      <p>테스트입니다.</p>
      <Tssnippet />
    </>
  );
};

export default dbtest1;
