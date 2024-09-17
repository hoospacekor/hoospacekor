import { useState, useEffect } from 'preact/hooks';
import { useLocation, useRoute } from 'preact-iso';
import SharedDate from '../../context/dateContext';

const DynamicPost = () => {
  const { path } = useLocation();
  const { query } = useRoute();
  const { date } = query;
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postModule = await import(`../..${path}.js`);
        const content = await postModule.default();
        setPostContent(content);
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
