import { useScript, useLang, useTitle, useLink } from 'hoofd/preact';

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

export default function Home() {
  useLang('en');
  useTitle('HookorTech');
  useLink({ rel: 'canonical', href: 'https://hookortech.pages.dev' });
  useScript({
    type: 'application/ld+json',
    text: `{ "@context": "https://www.schema.org", "@type": "Blog", "name": "HookorTech", "description": "Tech blog run buy Joonghoo Ahn, who is JS web developer",
    ,"mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hookortech.pages.dev"  },
    "author": {
			"@type": "Developer",
			"name": "AHNJOONGHOO",
			"url": "https://github.com/hookor"
		}}`,
  });

  const recentPosts = Object.entries(jsonObject)
    .flatMap(([category, items]) => {
      return items.map((item) => {
        const [id, post] = Object.entries(item)[0];
        const [title, date] = post;
        return [category, id, title, date];
      });
    })
    .sort((a, b) => new Date(b[3]).getTime() - new Date(a[3]).getTime())
    .slice(0, 5);

  return (
    <>
      <h2>Hi I'm JoongHoo Ahn</h2>
      <q cite="https://motherfuckingwebsite.com">
        <strong>You. Are. Over-designing</strong>
      </q>
      <p>
        This blog is
        <ol>
          <li>
            greatly inspired by
            <a target={'_blank'} href="https://motherfuckingwebsite.com">
              {' '}
              motherfuckingwebsite.com
            </a>
          </li>
          <li>
            built with
            <a target={'_blank'} href="https://preactjs.com/">
              {' '}
              Preact
            </a>
            ,
            <a target={'_blank'} href="https://highlightjs.org/">
              {' '}
              highlight.js
            </a>
          </li>
          <li>
            created by
            <a target={'_blank'} href={'https://github.com/hookor'}>
              {' '}
              hookor
            </a>
          </li>
        </ol>
      </p>

      <p>
        <em>Unlike</em> the source of inspiration above, I'm not cynical :)
        <br />
        You can follow me on Github, or contact via{' '}
        <a target={'_blank'} href="mailto:gerrard1219@gmail.com">
          E-mail
        </a>
        .<br />
        Feel free to share posts with anyone who might find it interesting.
      </p>

      <h2>Recent Posts</h2>
      {jsonObject && (
        <ul>
          {recentPosts.map((post) => {
            const [category, id, title, date] = post;
            return (
              <li>
                <span style={'font-size: 14px; padding-right: 14px;'}>
                  {generateDate(date)}
                </span>
                <a href={`/posts/${category}/${id}?date=${generateDate(date)}`}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <footer>
        <a href="https://hookortech.pages.dev">HookorTech</a> • ©{' '}
        {new Date().getFullYear()} • All right reserved.
      </footer>
    </>
  );
}
