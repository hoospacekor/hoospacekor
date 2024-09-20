import { useHighlight } from '../../hooks/useHighlight';

const highlightSnippet = () => {
  const snippet = useHighlight(
    'javascript',
    `
    //1. We'll generate two functions to enable/disable
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
    `
  );
  const snippet2 = useHighlight(
    'javascript',
    `
    //2. React/Preact Hook => It's okay you don't read React code! Let's break it down
    const useHighlight = (language = 'javascript', code = '') => {
      const [mode, setMode] = useState(
    
    /*3. As I mentioned above, I implemented color-scheme for dark/light mode.
         Here it checks initial user's system dark/light theme*/  
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
      const highlightedCode = hljs.highlight(code, {
        language,
      }).value;
    
      const isDark = mode === 'dark';
    
    /*4. If you open up highlight.js styles directory, its filenames are implemented the same pattern.
         You can check the theme you'd use and adjust strings. */ 
      const curTheme = isDark ? 'github-dark.' : 'github.';
      const prevTheme = isDark ? 'github.' : 'github-dark.';
    
      useEffect(() => {
    
    //5. window.matchMedia() will return MediaQueryList object, which we'll attach eventListener.
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (e) => setMode(e.matches ? 'dark' : 'light'));
    
    //6. When a user switches dark/light mode, it will update the initial user's theme(comment3)
        setMode(
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        );
    
    //7. Finally, execute predefined functions with predefined theme variables depending on user's theme
        const loadTheme = () => {
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
    
    `
  );
  return (
    <p style={{ overflow: 'scroll' }}>
      {snippet}
      <br />
      {snippet2}
    </p>
  );
};

export default highlightSnippet;
