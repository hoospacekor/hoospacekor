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
            <dd><em>무색무취 : 아무런 빛깔과 냄새가 없음</em></dd>
          </dl>
        </p>
        <p>
사람으로 얘기하자면,
          어디서든 무던하게, 그냥 있는 사람이었으면 좋겠다.
          <br />
          사람들이 크게 신경쓰지 않고, 있으면 있는 거고, 없으면 없는지도 모를
          그런 사람.
        </p>
        <p>
          그게 제일 편하다.
          <br />
          양반다리가 무척이나 편한 사람도 있고, 5초도 못 버티는 사람이 있듯,
          나한텐 그냥 그런 시선이 편한 것 같다.
        </p>
        <p>
          개성이 없다는 말도, 아무튼 누군가를 개성있게 만들어 주는거라 생각하면 또 마음이 편하다.
          <br />
          그냥 있고, 그냥 살아가고, 시간의 흐름을 받아들이는 게 나름 대단한
          일이라고 생각한다. <br />
          그래서 묵묵히, 담담하게 살아가는 사람들을 존경한다.
        </p>
        <p>
눈에 잘 띄게 살아가는 것도 하나의 재능이고 무색무취로 살아가는 것도 하나의 재능이라고 생각한다.<br />
이게 이상한건가 생각도 해봤는데 요즘은 모두 원하는 게 다른 것처럼 이게 내가 원하는 거라는 걸 이제 조금 알 것 같다. 

        </p>
        <p>
무색무취가 유명인들을 다루는 기사들에서는 보통 인상을 주지 못했다는 비유적 표현으로 사용되곤 하지만, 인상은 실재가 아니다.<br/> 사람들이 변하면, 의견들도, 인상들도 변한다. ~의 재평가, 레트로의 유행 등이 그렇다.<br/>  변화에 둔감해져야 한다기보다는, 변화를 가장 잘 이해할 수 있는 위치는 극보다 중립이고, 사람이라면 무색무취인 사람일 것이라고 생각한다.<br/>  쉽진 않겠지만 치우치지 않고, 균형잡힌 사람으로 살아보고싶다.
<br />
        </p>
      </section>
    </article>
  );
};

export default ColorlessOdourless;
