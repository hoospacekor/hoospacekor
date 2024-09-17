// Metadata: {"postTitle": "안녕하세요"}
import SharedDate from '../../context/dateContext';

const Hello = () => {
  return (
    <article>
      <h2>안녕하세요</h2>
      <SharedDate.Consumer>
        {(value) => (
          <p>
            <i>
              <time>{value}</time>
            </i>
          </p>
        )}
      </SharedDate.Consumer>
      <p>뭘 써나갈진 모르겠는데 아무튼 잘 부탁드립니다.</p>
    </article>
  );
};

export default Hello;
