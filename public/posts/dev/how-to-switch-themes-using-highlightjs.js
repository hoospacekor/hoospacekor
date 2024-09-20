// Metadata: {"postTitle": "How to switch themes using highlight.js"}
import SharedDate from '../../context/dateContext';
import TESTsnippet from '../../snippets/db/db-test1-snippet1';
import HighlightSnippet from '../../snippets/dev/highlightSnippet';

const HowToSwitchThemesUsingHighlightjs = () => {
  return (
    <article>
      <h2>How to switch themes using highlight.js</h2>
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
              <li>
                Consider <mark>SCSS @include functionality</mark>,{' '}
                <mark>Dynamic CSS injection</mark> as well if it suits to your
                project specs.
              </li>
              <li>
                Otherwise, you can <strong>enable/disable</strong>{' '}
                <mark>CSSStyleSheet</mark>
              </li>
              <li>
                The last of all, if none of them works, you can create{' '}
                <mark>code snippet image</mark> using{' '}
                <a href="https://carbon.now.sh/">carbon</a>, which will generate
                image that wouldn't be affected no matter if it's dark-mode or
                not.
              </li>
            </ol>
          </details>
        </p>
      </section>

      {/* INTRO */}
      <section>
        <p>
          <h3>Options</h3>
          Before we move on to the solution I'm going to suggest, there are a
          few options you can get it done easier way if conditions are met.
          <ol>
            <li>
              <strong>SCSS</strong> =&gt; <br />
              If your project imported SCSS for CSS, this{' '}
              <a
                href="https://github.com/highlightjs/highlight.js/issues/2115#issuecomment-1059981062"
                target={'_blank'}
              >
                <em>comment </em>
              </a>
              suggests easiest solution manipulating with <em>data-theme</em>{' '}
              html attribute and <em>SCSS @include</em>
            </li>
            <li>
              <strong>Dynamic CSS injection</strong> =&gt; <br />
              <a
                href="https://stackoverflow.com/a/78427620/23021204"
                target={'_blank'}
              >
                This stackoverflow answer{' '}
              </a>
              is based on the approach manipulating DOM, injecting and removing{' '}
              <code>
                <strong>link</strong>
              </code>{' '}
              element with <em>highlightjs CSS CDN</em> into{' '}
              <code>
                <strong>head</strong>
              </code>{' '}
              tag.
            </li>
            <li>
              <strong>handling document.styleSheets</strong> =&gt; <br />
              This blog adopted the approach. If you're curious turn your system
              dark(or light) mode.
            </li>
          </ol>
          <TESTsnippet />
        </p>
      </section>

      {/* BODY */}
      <section>
        <h3>CSSStyleSheet and CSSStyleRule</h3>
        <p>
          If you've heard of{' '}
          <a href="https://web.dev/articles/critical-rendering-path/render-tree-construction">
            Rendering Tree
          </a>
          , I believe you know there's{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model">
            CSSOM
          </a>
          , which we'll discuss. Before we implement, Let's touch on two
          need-to-know bases.
          <h4>CSSStyleSheet</h4>
          <dfn>CSSStyleSheet</dfn> represents{' '}
          <strong>the full stylesheet</strong> and contains all the rules.
          <h4>CSSStyleRule</h4>
          <dfn>CSSStyleRule</dfn> represents <strong>individual rules</strong>{' '}
          within a stylesheet.
        </p>

        <p style="display: grid; grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));">
          <figure style="display: flex; flex-direction: column;">
            <img
              src="https://pub-2452da71d6134c44b7ad30442572bedc.r2.dev/cssom-d2.webp"
              alt="cssom"
              loading="lazy"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <figcaption>
              <strong>CSSOM</strong> involves <strong>CSSStyleSheet</strong>{' '}
              which involves <strong>CSSStyleRule</strong>
            </figcaption>
          </figure>
          <figure style="display: flex; flex-direction: column;">
            <img
              src="https://pub-2452da71d6134c44b7ad30442572bedc.r2.dev/CSSStyleSheets.webp"
              alt="CSSStyleSheets"
              loading="lazy"
              style="width: 100%; height: 100%; object-fit: contain;"
            />
            <figcaption>
              Each CSSStyleSheet(<strong>highlight.js theme</strong>) represents
              single .css file
            </figcaption>
          </figure>
        </p>

        <h3>Implementation</h3>
        <p>
          I'll suppose we want <em>highlight.js snippet</em> to be reactive to
          system-dark mode.(You can make buttons as well based on your needs.)
          <ol>
            <li>
              Now we know what CSSStyleSheet is, we'll{' '}
              <strong>enable/disable</strong> it like a switch.
            </li>
            <li>
              You can either add/remove class or use{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">
                color-scheme
              </a>
              (I did. xD) for dark/light mode implementation. I won't go further
              with that and focus on CSS switching.
            </li>
          </ol>
          <HighlightSnippet />
        </p>
      </section>

      {/* CONCLUSION */}
      <section>
        <h3>What really matters - CSSOM</h3>

        <p>
          Now you've got understanding of <strong>CSSOM</strong>, and you can
          devise different workarounds too!
          <br />
          For instance, if you open a browser console and type{' '}
          <code>document.styleSheets</code> from the{' '}
          <a href="https://highlightjs.org/demo" target="_blank">
            highlightjs demo
          </a>{' '}
          page, you can see single <code>CSSStyleSheet</code> is on the console.{' '}
        </p>

        <p>
          But we can play around with bunch of themes on the demo page,{' '}
          <strong>what does it mean?</strong> <br />
          If you caught it on, yes, it has <strong>
            a single .css file
          </strong>{' '}
          with bunch of <strong>CSSStyleRule</strong>s! Its implementation is
          just like each theme stands for a css selector.
        </p>
        <p>
          It suggests that you can make your own single CSS file manually from
          the source files as well(or create on your own them with classes).{' '}
          <br /> I hope it helped you or at least find it helpful. Thanks for
          reading!
        </p>
      </section>
    </article>
  );
};

export default HowToSwitchThemesUsingHighlightjs;
