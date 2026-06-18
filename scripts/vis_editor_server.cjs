const http = require('http');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();
const FILES = [
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Projects.jsx',
  'src/components/Skills.jsx',
  'src/components/Contact.jsx',
  'src/components/Navbar.jsx',
];

function readAllFiles() {
  return FILES.map((rel) => ({
    path: path.join(PROJECT_ROOT, rel),
    content: fs.readFileSync(path.join(PROJECT_ROOT, rel), 'utf-8'),
  }));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/files' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(readAllFiles()));
    return;
  }

  if (url.pathname === '/save' && req.method === 'POST') {
    try {
      const body = JSON.parse(await readBody(req));
      if (!body || typeof body.path !== 'string' || typeof body.content !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'path and content are required' }));
        return;
      }
      const filePath = path.resolve(body.path);
      if (!filePath.startsWith(PROJECT_ROOT)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'path must be inside project root' }));
        return;
      }
      fs.writeFileSync(filePath, body.content, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: String(e) }));
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found' }));
});

const port = Number(process.env.PORT || 4000);
server.listen(port, '127.0.0.1', () => {
  console.log(`vis-editor server listening on http://127.0.0.1:${port}`);
});
