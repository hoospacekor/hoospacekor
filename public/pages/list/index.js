import { useLocation } from 'preact-iso';
import { useScript, useLang, useTitle, useTitleTemplate } from 'hoofd/preact';

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
  useLang('en');
  useTitleTemplate('%s - HookorTech posts category');
  const { path } = useLocation();
  const category = path.substring(1);
  useTitle(`${category}`);
  useScript({
    type: 'application/ld+json',
    text: `{ "@context": "https://www.schema.org", "@type": "BlogPostingList", "headline": "${category} - HookorTech posts category", "author": {
			"@type": "Developer",
			"name": "AHNJOONGHOO",
			"url": "https://github.com/hookor"
		}}`,
  });

  const arranged =
    jsonObject[category] &&
    jsonObject[category].sort((a, b) => {
      const A = Object.values(a).flat();
      const B = Object.values(b).flat();
      const dateA = new Date(A[1]);
      const dateB = new Date(B[1]);
      return dateB < dateA ? -1 : 1;
    });

  return (
    jsonObject &&
    jsonObject[category] && (
      <section>
        <h2>{category.toUpperCase()}</h2>
        <p>
          <ul>
            {arranged.map((post) => {
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
