import { useHighlight } from '../../hooks/useHighlight';

const generateJSONsnippet = () => {
  const snippet = useHighlight(
    'javascript',
    `
const fs = require('fs');
const path = require('path');

//1. Directory route to read(you can modify depending on your directory structure)
//2. Output file path to EXTRACT JSON file.
const postsRoute = path.join(__dirname, 'public/posts');
const outputFile = path.join(__dirname, 'public', 'posts.json');
//3. Loop through and create an array of category adresses, e.g. ['your-path-here/posts/dev']
const directoryList = fs.readdirSync(postsRoute);
const postDirectoryRoutes = directoryList.map((dir) =>
  path.join(postsRoute, dir)
);
//4. If you need, you can declare metadata in the file(If not, just ignore the function)
const extractMetadata = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const metadataMatch = fileContent.match(/\/\/ Metadata:\s*({.*})/);
  return metadataMatch ? JSON.parse(metadataMatch[1]) : {};
};
//5. Looping through with reduce function, insdie an object you create keys with category names(dev, nodejs, etc,,)
//6. On each category loop, you can create your own data like created time depending on your needs.
const obj = directoryList.reduce((acc, dir, idx) => {
  acc[dir] = fs.readdirSync(postDirectoryRoutes[idx]).map((i) => {
    const filePath = \`\${postDirectoryRoutes[idx]}/\${i}\`;
    const stats = fs.statSync(filePath);
    const { postTitle = 'Default Post Title' } = extractMetadata(filePath);

    const title = i.split('.js')[0];
    return {
      [title]: [postTitle, stats.birthtime],
    };
  });
  return acc;
}, {});
//7. As you know, writeFileSync method overwrites the previous output.
//   You can replace it with appendFileSync method depending on your use-case   
fs.writeFileSync(outputFile, JSON.stringify(obj));

//posts.json(OUTPUT)
{
  "db": [],
  "dev": [],
  "nodejs": [
    {
      "how-to-make-a-list-of-files-from-directories": [
        "How to make a list of files from directories",
        "2024-09-17T07:41:48.561Z"
      ]
    }
  ],
  "personal": [
    {
      "hello": [
        "안녕하세요",
        "2024-09-17T04:02:30.355Z"
      ]
    }
  ]
}
`
  );
  return <p style={{ overflow: 'scroll' }}>{snippet}</p>;
};

export default generateJSONsnippet;
