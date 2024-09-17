import { useLocation } from 'preact-iso';

const { default: jsonObject } = await import('../../posts.json', {
  assert: {
    type: 'json',
  },
});

const generateDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const List = () => {
  const { path } = useLocation();
  const category = path.substring(1);
  return (
    jsonObject &&
    jsonObject[category] && (
      <section>
        <h2>{category.toUpperCase()}</h2>
        <p>
          <ul>
            {jsonObject[category]?.reverse().map((post) => {
              const singlePost = Object.entries(post)[0];
              return (
                <li>
                  <span style={'font-size: 14px; padding-right: 14px;'}>
                    {generateDate(singlePost[1][1])}
                  </span>
                  <a
                    href={`/posts/${category}/${
                      singlePost[0]
                    }?date=${generateDate(singlePost[1][1])}`}
                  >
                    {singlePost[1][0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </p>
      </section>
    )
  );
};

export default List;
