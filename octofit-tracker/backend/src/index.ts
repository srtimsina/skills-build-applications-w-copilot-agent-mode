import { connectDatabase } from './config/database.js';
import app from './server.js';

const PORT = Number(process.env.PORT ?? 8000);
const CODESPACE_NAME = process.env.CODESPACE_NAME;

const apiUrl = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend listening on ${apiUrl}`);
  });
});
