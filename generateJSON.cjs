const fs = require('fs');
const path = require('path');

const postsRoute = path.join(__dirname, 'public/posts');
const outputFile = path.join(__dirname, 'public', 'posts.json');
const outputMapFile = path.join(__dirname, 'public', 'postMap.js');

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

// Generate postMap.js
let postMapContent = `export const postModules = {\n`;

Object.entries(obj).forEach(([category, posts]) => {
  posts.forEach((post) => {
    const [[fileName, [postTitle]]] = Object.entries(post);
    const importPath = `/posts/${category}/${fileName}`;
    postMapContent += `  '${importPath}': () => import('.${importPath}.js'),\n`;
  });
});

postMapContent += `};\n`;

fs.writeFileSync(outputMapFile, postMapContent);

console.log('Generated posts.json and postMap.js');
