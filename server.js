const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_PATH = '/aureum-structural-stress-test';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.gz': 'application/gzip'
};

const server = http.createServer((req, res) => {
  // Redirect entry points to the Docusaurus home route
  if (req.url === '/' || req.url === `${BASE_PATH}/`) {
    res.writeHead(302, { Location: `${BASE_PATH}/home` });
    res.end();
    return;
  }

  let filePath = req.url;
  
  // Remove base path if present
  if (filePath.startsWith(BASE_PATH)) {
    filePath = filePath.substring(BASE_PATH.length);
  }
  
  // Default to index.html
  if (filePath === '/' || filePath === '') {
    filePath = '/index.html';
  }
  
  // Remove leading slash and resolve path
  let resolvedPath = '.' + filePath;

  // If request is for a directory path like /home, serve /home/index.html
  fs.stat(resolvedPath, (statError, stats) => {
    if (!statError && stats.isDirectory()) {
      resolvedPath = path.join(resolvedPath, 'index.html');
    } else if (filePath.endsWith('/')) {
      resolvedPath = path.join(resolvedPath, 'index.html');
    }

    const extname = String(path.extname(resolvedPath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(resolvedPath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.readFile('./404.html', (error, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          });
        } else {
          res.writeHead(500);
          res.end('Server Error: ' + error.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}${BASE_PATH}/`);
  console.log(`Or access directly at http://localhost:${PORT}/`);
});
