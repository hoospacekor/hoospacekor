import sql from 'highlight.js/lib/languages/sql';
import shell from 'highlight.js/lib/languages/shell';
import markdown from 'highlight.js/lib/languages/markdown';
import typescript from 'highlight.js/lib/languages/typescript';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useState } from 'preact/hooks';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sql', sql);
hljs.highlightAll();

const enableStylesheet = (href) => {
  Array.from(document.styleSheets).forEach((stylesheet) => {
    if (stylesheet.href && stylesheet.href.includes(href)) {
      stylesheet.disabled = false; // Enable the stylesheet
    }
  });
};

const disableStylesheet = (href) => {
  Array.from(document.styleSheets).forEach((stylesheet) => {
    if (stylesheet.href && stylesheet.href.includes(href)) {
      stylesheet.disabled = true; // Disable the stylesheet
    }
  });
};

export const useHighlight = (language = 'javascript', code = '') => {
  const [mode, setMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const highlightedCode = hljs.highlight(code, {
    language,
  }).value;

  const isDark = mode === 'dark';
  const curTheme = isDark ? 'github-dark.' : 'github.';
  const prevTheme = isDark ? 'github.' : 'github-dark.';

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setMode(e.matches ? 'dark' : 'light'));

    setMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );

    const loadTheme = async () => {
      disableStylesheet(prevTheme);
      enableStylesheet(curTheme);
    };

    loadTheme();

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    };
  }, [mode]);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};
