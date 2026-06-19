import { connectDatabase } from './config/database.js';
import app, { getApiUrl } from './server.js';

const PORT = Number(process.env.PORT ?? 8000);

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend listening on ${getApiUrl()}`);
  });
});
