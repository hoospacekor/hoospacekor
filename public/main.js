// @ts-nocheck
import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso';
import { toStatic } from 'hoofd/preact';
import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import Header from './header.js';

const List = lazy(() => import('./pages/list/index.js'));
const Post = lazy(() => import('./pages/post/index.js'));

const categories = ['/nodejs', '/db', '/dev', '/personal'];

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            {categories.map((category) => {
              return <Route path={category} component={List} />;
            })}
            <Route path="/" component={Home} />
            <Route path="/posts/:category/:title" component={Post} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const result = await ssr(<App {...data} />);

  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: 'link', props })),
    ...head.metas.map((props) => ({ type: 'meta', props })),
    ...head.scripts.map((props) => ({ type: 'script', props })),
  ]);

  // Return the results back to WMR
  return {
    ...result,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
}
