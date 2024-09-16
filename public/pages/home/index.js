const { default: jsonObject } = await import('../../posts.json', {
  assert: {
    type: 'json',
  },
});

export default function Home() {
  const recentPosts = Object.entries(jsonObject)
    .flatMap(([_, items]) => {
      return items.map((item) => {
        const [category, post] = Object.entries(item)[0];
        return [category, post[0], post[1]];
      });
    })
    .sort((a, b) => new Date(b[2]).getTime() - new Date(a[2]).getTime())
    .slice(0, 5);

  return (
    <>
      <h2>Hi I'm JoongHoo Ahn</h2>
      <blockquote cite="https://motherfuckingwebsite.com">
        <strong>"You. Are. Over-designing"</strong>
      </blockquote>
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
        Feel free to follow me on Github, or contact via{' '}
        <a target={'_blank'} href="mailto:gerrard1219@gmail.com">
          E-mail
        </a>
        .
      </p>

      <h2>Recent Posts</h2>
      {jsonObject && (
        <ul>
          {recentPosts.map((post) => {
            const [category, title, date] = post;
            return (
              <li>
                <span style={'font-size: 14px; padding-right: 14px;'}>
                  {new Date(date).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <a href={`/posts/${category}/${title}`}>{title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
