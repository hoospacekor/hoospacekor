// Metadata: {"postTitle": "Neovim 살펴보기(WIP)"}
import SharedDate from "../../context/dateContext";

const IntroToNeovim = () => {
  return (
    <article>
      <h2>Neovim 살펴보기(WIP)</h2>
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
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </details>
        </p>
      </section>

      {/* INTRO */}
      <section>
        <p>
          <h3>오늘부터 Neovim(Intro)</h3>
          이해한 걸 바탕으로 가볍게 정리한 글에 가까우니 틀린 내용이 있더라도
          너그럽게 봐주시면 감사하겠습니다. <br />
          별도의 언급이 없다면 포스트 내 'IDE'는 vscode를 기준으로 얘기하고
          있습니다. <br />
          <br />
          목차는 다음과 같습니다.
          <ol>
            <li><em>Vim 기본</em></li>- Vim과 Neovim<br/>- Buffer/Window/Tab<br/>- Vim Modes/Motions
            <li><em>Tmux</em></li>- 화면 분할
            <li><em>Neovim</em></li>- IDE처럼 만들어보기
          </ol>
        </p>
      </section>

      {/* BODY */}
      <section>
        <p>
          <h3>VIM 기본</h3>
          <p style="display: grid; grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));">
            <figure style="display: flex; flex-direction: column;">
              <img
                src="https://pub-2452da71d6134c44b7ad30442572bedc.r2.dev/hyperextensible.png"
                alt="hyper-extensible neovim"
                loading="lazy"
                style="width: 100%; height: 100%; object-fit: contain;"
              />
              <figcaption>
                <code>Neovim - hyperextensible Vim-based text editor</code>{" "}
                <br />
                <br />
              </figcaption>
            </figure>
            <figure style="display: flex; flex-direction: column;">
              <img
                src="https://pub-2452da71d6134c44b7ad30442572bedc.r2.dev/NeovimGoals.png"
                alt="AST"
                loading="lazy"
                style="width: 100%; height: 100%; object-fit: contain;"
              />
              <figcaption>
                <code>Neovim - Vision</code>
                <br />
                <br />
              </figcaption>
            </figure>
          </p>
          제가 알고있던 Vim은 텍스트 편집기, 좀 더 얼버무려 말하면 '특이한
          메모장' 입니다. Neovim은 그럼...? <br />
          메인 페이지에서는 눈에 확 띄도록 '
          <em>hyperextensible Vim-based text editor</em>' 라고 명시해뒀습니다.{" "}
          <br />
          소개 페이지에서는 '
          <em>It is not a rewrite but a continuation and extension of Vim</em>'
          라는 문구도 눈에 띄네요.<br/>
          <br />
          이것도 얼버무려 말해본다면 메모장에 '
          <em>원하는 기능들을 붙일 수있는(hyperextensible) 고급 메모장</em>'
          정도겠죠?
          <br />
          다만, 지금은 얼버무려 말하고 넘어가도, 원하는 기능들을 붙여 IDE처럼
          만드는, neovim configuration이 해당 포스트의 목적지입니다.
          <br />
          그리고 Neovim에 대해 오해하지 말아야 할 부분은,
          <blockquote>
            <em>Non-goals : Turn Vim into an IDE</em>
          </blockquote>{" "}
          메인테이너들은 고급 메모장을 IDE로 진화시킬 생각은 전혀 하지 않고
          있습니다.
          <br /> 플러그인들을 통해 'IDE처럼 사용할 수 있는' 것이지, '여러 IDE중
          하나'가 아닙니다.
          <br />
          따라서 IDE만큼 편리하지도 않고, 문제가 생긴다면 스스로 해결책을
          찾아나가야할 상황이 훨씬 더 많습니다.
          <br />
          근데 왜 쓰냐고 누군가 물어본다면....이유는 가지각색이겠지만, 생각나는
          몇 가지 이유를 간략히 적어보겠습니다.
          <ol>
            <li>생각, 명령어의 흐름이 자연스럽다(익숙해지면)</li>
            <li>마우스에 손이 가지 않는다(잘)</li>
            <li>개발과 가까워진다(조금)</li>
          </ol>
          장점이라고 적어봤지만, 자신있게 써야한다고 말할 수는 없습니다. IDE도
          좋아요, 에디터들도 감사하게 능력있는 개발자분들이 열심히 만들어놓은
          툴이니까요.
          <br />
          그럼에도 작성하면서 스스로 더 깊게 이해해보려는 목적도 있고, 혹시라도
          관심이 생긴 분들에게 도움이 된다면 기쁠 것 같습니다.
          <br />
          그럼 우선, Neovim은 vim-based editor니까 Vim도 기본적으로 알아야겠죠?
          정말 기본만 짚어보겠습니다. 저도 많이 모릅니다.
          <h4>Buffer / Window / Tab</h4>
          <ol>
            <li>
              <em>
                <strong>buffer</strong>
              </em>{" "}
              : 작성중인 파일, ' <code>vim / nvim</code> ' 커맨드로 열어놓은
              파일(<em>e.g. vim hello.txt</em>) 입니다. (
              <em>In-memory text of a file</em>)
              <br />
              직관적으로는, IDE에서의 <em>tab</em>개념은 vim에서는 오히려{" "}
              <strong>buffer</strong>개념에 가깝습니다. IDE에서의 <em>tab</em>을{" "}
              <strong>파일 단위의 작업 상태</strong> 라고 본다면, 적어도
              그렇습니다.
            </li>
            <br />
            <li>
              <em>
                <strong>window</strong>
              </em>{" "}
              : <em>buffer</em>를 보여주기 위한 화면입니다. (
              <em>
                <strong>viewport, container</strong> of buffers
              </em>
              )<br />
              <em>buffer</em>는, 열려있더라도 보일 수도, 보이지 않을 수도
              있습니다. 양자역학같은 어려운 거 아닙니다.
              <br /> 룰렛을 예시로 들어보자면, 각각의 분할된 구역에 적혀있는
              내용은 <em>buffer</em> 입니다.
              <br /> 룰렛이 회전 후 멈추는 순간 특정 구역을 가리키고 있을
              화살표가 있어야겠죠? 화살표가 <strong>window</strong>입니다.
              <br />
              <code>:bn</code>, <code>:bp</code> 등의 커맨드를 통해{" "}
              <strong>window</strong>에 띄울 <em>buffer</em>를 선택할 수
              있습니다.
            </li>
            <br />
            <li>
              <strong>
                <em>tab</em>
              </strong>{" "}
              : 하나 혹은 그 이상의 <em>window</em>들의 집합입니다. (
              <em>
                <strong>viewport, container</strong> of windows,{" "}
                <strong>workspace</strong>
              </em>
              )<br />
              IDE에서의 기존개념으로 인해 tab이라는 단어에 혼란스러우실 수
              있지만, 위 두 개념을 잘 이해하셨다면{" "}
              <strong>window의 상위 집합, superset</strong>이라는 'vim 기준
              tab'의 정의는 어렵지 않으실 거라고 생각합니다.
              <br />
              하나의 tab 내에서 여러 개의 <strong>window</strong>를{" "}
              <code>:vsplit</code>,<code>:split</code>등의 커맨드를 통해 띄울 수
              있습니다.
            </li>
          </ol>
          <h4>Vim Modes / Motions</h4>
          몇 가지 Mode가 더 있습니다만, 제가 안 써본, 아직은 사용에 필수적인 것
          같지는 않은 모드들은 생략되어 있습니다.
          <br />
          그리고 Motions는 정말 유용하고, 핵심적이지만 모두 다루기엔 방대한
          내용이라 가능하다면 미래에 해당 포스트와는 별도의 포스트로
          작성해보겠습니다.
          <br />
          사실 VIM이 오래된 툴이기도 하고 잘 정리된 글들도 많아 개념적인 것을
          모두 이해하려는 시도보다 필요한 것들 위주로 직접 타이핑해보시는 게
          가장 잘 와닿으실 거라 믿습니다.
          <br /> 여기서는 기본적인 개념들을 간략하게 짚어보겠습니다.
          <ol>
            <li>
              <strong>normal mode</strong>
            </li>
            - <em>vim hello.txt</em> 로 커맨드를 실행하면 나오는, 가장 기본적인
            모드입니다.
            <br />
            <br />
            <li>
              <strong>insert mode</strong>
            </li>
            - <em>normal mode</em>에서 <code>i</code>를 통해 텍스트를
            입력합니다. (<em>esc</em> &gt; <em>normal mode</em>) <br />
            <br />
            <li>
              <strong>command mode</strong>
            </li>
            - <code>:</code>기호와 함께 각종 명령어를 실행합니다. 일단 나가기(
            <code>:q</code>), 변경사항 저장하기(<code>:w</code>) 등이 있습니다.
            <br />
            <br />
            <li>
              <strong>visual mode</strong>
            </li>
            - <code>v</code>를 통해 <em>visual mode</em>에 진입합니다.
            <br /> 커서로 선택된 텍스트를 복사(<code>y</code>), 붙여넣기(
            <code>p</code>)하는 등의 기능을 지원합니다. 본격적으로 에디터를
            사용할 때 유용해집니다. (마찬가지로, <em>esc</em> &gt;{" "}
            <em>normal mode</em>)
          </ol>
        </p>
        <p>
          <h3>Tmux</h3>
        </p>
        <p>
          <h3>Neovim</h3>
        </p>
      </section>

      {/* CONCLUSION */}
      <section>
        <p>
          <h3></h3>
        </p>
      </section>
    </article>
  );
};

export default IntroToNeovim;
