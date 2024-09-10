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

export const useHighlight = (language = 'javascript', code = '') => {
  const [mode, setMode] = useState('');
  const highlightedCode = hljs.highlight(code, {
    language,
  }).value;

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setMode(e.matches ? 'dark' : 'light'));

    setMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
    };
  }, [mode]);

  useEffect(() => {
    const isDark = mode === 'dark';
    const linkElement = document.createElement('link');

    const loadTheme = async () => {
      const theme = isDark
        ? '/@npm/highlight.js/styles/github-dark.min.css?asset'
        : '/@npm/highlight.js/styles/github.min.css?asset';
      const isLinkElement = linkElement instanceof HTMLLinkElement;
      if (isLinkElement) {
        linkElement.rel = 'stylesheet';
        linkElement.id = 'hljs-theme';
        linkElement.href = theme;
      }

      if (document.getElementById('hljs-theme')) {
        const previousTheme = document.getElementById('hljs-theme');
        previousTheme.remove();
        document.head.appendChild(linkElement);
      } else {
        document.head.appendChild(linkElement);
      }
    };

    loadTheme();
  }, [mode]);

  return (
    <pre style={{ overflow: 'scroll' }}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};
