import { Application } from 'express';
import showsRouter from './api/controllers/shows/router';
import packagesRouter from './api/controllers/packages/router';
export default function routes(app: Application): void {
  app.use('/api/v1', showsRouter);
  app.use('/api/v1', packagesRouter);
}
