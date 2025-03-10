import { useScript, useLang, useTitle, useLink } from "hoofd/preact";

const { default: jsonObject } = await import("../../posts.json", {
  assert: {
    type: "json",
  },
});

const generateDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function Home() {
  useLang("en");
  useTitle("Hoospacekor");
  useLink({ rel: "canonical", href: "https://hoospacekor.pages.dev" });
  useScript({
    type: "application/ld+json",
    text: `{ "@context": "https://www.schema.org", "@type": "Blog", "name": "Hoospacekor", "description": "Tech blog run buy Joonghoo Ahn, who is web developer",
    ,"mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hoospacekor.pages.dev"  },
    "author": {
			"@type": "Developer",
			"name": "AHNJOONGHOO",
			"url": "https://github.com/hoospaceor"
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
        <strong>Good design is as little design as possible</strong>
      </q>
      <br />
      <br />
      This blog is inspired by the quote.
      <p>
        The blog is about:
        <br />
        <ul>
          <li>Sharing tech knowledge</li>
          <li>My personal recaps</li>
          <li>Writing about my inspirations</li>
        </ul>
      </p>
      <p>
        I'm recently interested in Neovim, (P)React, Node.js, Visualisation
        tools :).
        <br />
        You can follow me on <a target={"_blank"} href="https://github.com/hoospacekor">Github</a>, or contact via{" "}
        <a target={"_blank"} href="mailto:gerrard1219@gmail.com">
          E-mail
        </a>
        .<br />
        Feel free to share posts with anyone who might find them interesting.
      </p>
      <h2>Recent Posts</h2>
      {jsonObject && (
        <ul>
          {recentPosts.map((post) => {
            const [category, id, title, date] = post;
            return (
              <li>
                <span
                  style={
                    "font-size: 14px; padding-right: 14px; min-width: 100px; display: inline-block;"
                  }
                >
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
        <a href="https://hoospacekor.pages.dev">Hoospacekor</a> • ©{" "}
        {new Date().getFullYear()} • All right reserved.
      </footer>
    </>
  );
}
