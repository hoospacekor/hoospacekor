import { useState, useEffect } from 'preact/hooks';
import { useLocation, useRoute } from 'preact-iso';
import SharedDate from '../../context/dateContext';
import { postModules } from '../../postMap';
import { useScript, useLang, useTitle, useTitleTemplate } from 'hoofd/preact';

const { default: jsonObject } = await import('../../posts.json', {
  assert: {
    type: 'json',
  },
});

const DynamicPost = () => {
  useLang('en');
  useTitleTemplate('%s - HookorTech post');

  const { path } = useLocation();
  const { query } = useRoute();
  const { date } = query;

  const [_, __, postCategory, postTitle] = path.split('/');
  const posts = jsonObject && jsonObject[postCategory];
  const title = posts.map((i) => {
    const arr = Object.entries(i);
    const flattened = arr.flat().flat();
    const predi = flattened[0] === postTitle;
    const result = predi ? flattened[1] : false;
    return result;
  })[0];
  useTitle(`${title}`);

  useScript({
    type: 'application/ld+json',
    text: `{ "@context": "https://www.schema.org", "@type": "BlogPosting", "headline": "${title} - HookorTech post", "author": {
			"@type": "Developer",
			"name": "AHNJOONGHOO",
			"url": "https://github.com/hookor"
		}}`,
  });

  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const loadModule = postModules[path];
        if (loadModule) {
          const postModule = await loadModule();
          const content = await postModule.default();
          setPostContent(content);
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        console.error('Failed to load post:', error);
        setPostContent('<p>Failed to load post content.</p>');
      }
    };

    loadPost();
  }, []);

  return (
    <SharedDate.Provider value={date}>
      <div>{postContent}</div>
    </SharedDate.Provider>
  );
};

export default DynamicPost;
