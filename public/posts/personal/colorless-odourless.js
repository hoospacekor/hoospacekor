// Metadata: {"postTitle": "무색무취"}
import SharedDate from '../../context/dateContext';

const ColorlessOdourless = () => {
  return (
    <article>
      <h2>무색무취</h2>
      <SharedDate.Consumer>
        {(value) => (
          <p>
            <i>
              <time>{value}</time>
            </i>
          </p>
        )}
      </SharedDate.Consumer>

      {/* SUMMARY */}
      <section>
        <p>
          <details>
            <summary>
              <abbr title="Too long; Didn't Read">TL;DR</abbr>
            </summary>
            <ol>
              <li>그냥 살자.</li>
              <li>가을이다.</li>
              <li>야옹</li>
            </ol>
          </details>
        </p>
      </section>

      {/* BODY */}
      <section>
        <p>
          <h3></h3>
          <dl>
            <dt>
              <strong>무색무취인 사람.</strong>
            </dt>
            <br />
            <dd>1. 개성이 없다.</dd>
            <dd>2. 허물없이 깨끗하다.</dd>
          </dl>
        </p>
        <p>
          한 끗 차이로 다르게 들리는데 아무튼 무색무취인 사람이 되고 싶다. <br /> 사실 1번이든 2번이든 어떻게 보이는지는 내 몫이 아니기도 하고. <br />
        </p>
        <p>
          어디서든 무던하게, 그냥 있는 사람이었으면 좋겠다.
          <br />
          사람들이 크게 신경쓰지 않고, 있으면 있는 거고, 없으면 없는지도 모를
          그런 사람.
        </p>
        <p>
          이유는 나도 잘 모르겠다. 그게 편하다.
          <br />
          양반다리가 무척이나 편한 사람도 있고, 5초도 못 버티는 사람이 있듯,
          나한텐 그냥 그런 시선이 편한 것 같다.
        </p>
        <p>
          개성이 없다는 말도, 아무튼 누군가를 개성있게 만들어 주는거니 마음이 편하다.
          <br />
          그냥 있고, 그냥 살아가고, 시간의 흐름을 받아들이는 게 나름 대단한
          일이라고 생각한다. <br />
          그래서 묵묵히, 담담하게 살아가는 사람들을 존경한다.
        </p>
        <p>
          '무색무취'와 '되려고 한다'를 붙여놓으면 미묘한 불일치를 보는 것도 같지만,
          재밌는 일들은 부조화에서 탄생한다고 믿는다.
          <br />
          무색무취지만 재미없는 사람이 되고싶은 건 아니라서...
        </p>
        <p>
무색무취가 아니라 커스텀이 가능하다면 삼색이 색깔에 커피 냄새가 나는 게 좋겠다.          
<br />
        </p>
      </section>
    </article>
  );
};

export default ColorlessOdourless;
