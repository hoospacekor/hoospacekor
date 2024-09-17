// Metadata: {"postTitle": "How to make a list of files from directories"}
import SharedDate from '../../context/dateContext';
import JSONsnippet from '../../snippets/nodejs/generateJSONsnippet';

const HowToMakeAListOfFilesFromDirectories = () => {
  return (
    <article>
      <h2>How to make a list of files from directories</h2>
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
                Read directory structure using <mark>fs</mark> and{' '}
                <mark>path</mark> modules from Node.js
              </li>
              <li>Write JSON file to use</li>
              <li>Add extra metadata if you need</li>
            </ol>
          </details>
        </p>
      </section>

      {/* INTRO */}
      <section>
        <h3>A use case - this blog</h3>{' '}
        <p>
          I felt I'd never write posts unless I create my own blog. None of the
          blog platforms captured my attention. Yet, I was too lazy to create my
          own blog. But then, I came across{' '}
          <a target={'_blank'} href="https://motherfuckingwebsite.com">
            {' '}
            motherfuckingwebsite.com
          </a>{' '}
          and it fired me up to create my own blog.
        </p>
        <p>
          I reckoned that it was overkill to build a backend for this tiny blog.
          To make the blog completely <strong>static</strong>, I decided to
          extract necessary information from the{' '}
          <strong>local file system</strong>.
        </p>
      </section>

      {/* BODY */}
      <section>
        <h3>How it works</h3>
        <p>
          <ol>
            <li>
              Client-side(Browser, in the context) doesn't have an access to
              file system.
            </li>
            <li>
              Using{' '}
              <em>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader"
                  target={'_blank'}
                >
                  FileReader Web API
                </a>
              </em>{' '}
              or{' '}
              <em>
                {' '}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker"
                  target={'_blank'}
                >
                  showDirectoryPicker Web API
                </a>{' '}
              </em>{' '}
              still requires a user action.
            </li>
            <li>
              But Node.js doesn't work on client-side(as you know, it's a
              different runtime)
            </li>
            <li>
              Thus, we'll adopt neutral approach using Node.js runtime before
              the application runs on the client-side.
            </li>
          </ol>
          Let's take a look at the practical code snippet below.
        </p>
        <JSONsnippet />
      </section>

      {/* CONCLUSION */}
      <section>
        <h3>Conclusion</h3>
        <p>
          It will surprise me if it's useful to someone. But at least this
          approach let me take a step forward in writing this post. Thanks for
          reading.
        </p>
      </section>
    </article>
  );
};

export default HowToMakeAListOfFilesFromDirectories;
