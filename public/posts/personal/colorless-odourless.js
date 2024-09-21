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
          한 끗 차이로 다르게 들린다. <br /> 왜 나는 무색무취인 사람이 되려고
          하는가? <br />
          허물없이 깨끗하게, 정치하려고?(그런 정치인은 없겠지만)
          <br /> 또, 개성이 너무 넘쳐서 개성을 좀 없애보려는 건 물론 아니다.
        </p>
        <p>
          어디서든 무던하게, 그냥 있는 사람이었으면 좋겠다.
          <br />
          사람들이 크게 신경쓰지 않고, 있으면 있는 거고, 없으면 없는지도 모를
          그런 사람.
        </p>
        <p>
          왜? 나도 잘 모른다. 그게 편하다.
          <br />
          양반다리가 무척이나 편한 사람도 있고, 5초도 못 버티는 사람이 있듯,
          나한텐 그냥 그런 느낌이 편하다.
        </p>
        <p>
          개성이 없다는 말도, 어떻게든 될 수 있다는 느낌 같아서 마음이 편하다.
          <br />
          그냥 있고, 그냥 살아가고, 시간의 흐름을 받아들이는 게 나름 대단한
          일이라고 생각한다. <br />
          묵묵히, 담담하게 살아가는 사람들을 존경한다.
        </p>
        <p>
          '무색무취'와 '되려고 한다'를 붙이는 게 미묘한 불일치를 보는 것 같지만,
          그냥 그렇구나 하는것도 무색무취의 비법 중 하나다.
          <br />
          이런 건 적당히 그냥 내버려두자.
        </p>
        <p>
          마지막으로, 무색무취가 아니라면? 파란색. 그냥 좋아하는 색이다.
          <br />
          혹은 검은색,갈색,흰색.(모으면 삼색냥이다.)
        </p>
      </section>
    </article>
  );
};

export default ColorlessOdourless;
