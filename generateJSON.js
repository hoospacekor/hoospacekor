const fs = require('fs');
const path = require('path');

const postsRoute = path.join(__dirname, 'public/posts');
const outputFile = path.join(__dirname, 'public', 'posts.json');
const directoryList = fs.readdirSync(postsRoute);
const postDirectoryRoutes = directoryList.map((dir) =>
  path.join(postsRoute, dir)
);

const extractMetadata = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const metadataMatch = fileContent.match(/\/\/ Metadata:\s*({.*})/);
  return metadataMatch ? JSON.parse(metadataMatch[1]) : {};
};

const obj = directoryList.reduce((acc, dir, idx) => {
  acc[dir] = fs.readdirSync(postDirectoryRoutes[idx]).map((i) => {
    const filePath = `${postDirectoryRoutes[idx]}/${i}`;
    const stats = fs.statSync(filePath);
    const { postTitle = 'Default Post Title' } = extractMetadata(filePath);

    const title = i.split('.js')[0];
    return {
      [title]: [postTitle, stats.birthtime],
    };
  });
  return acc;
}, {});

fs.writeFileSync(outputFile, JSON.stringify(obj));
