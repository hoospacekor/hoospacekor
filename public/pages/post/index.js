import { useState, useEffect } from 'preact/hooks';
import { useLocation } from 'preact-iso';

const DynamicPost = () => {
  const { path } = useLocation();
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postModule = await import(`public/../..${path}.js`);
        const content = await postModule.default();
        setPostContent(content);
      } catch (error) {
        console.error('Failed to load post:', error);
        setPostContent('<p>Failed to load post content.</p>');
      }
    };

    loadPost();
  }, []);

  return <div>{postContent}</div>;
};

export default DynamicPost;
