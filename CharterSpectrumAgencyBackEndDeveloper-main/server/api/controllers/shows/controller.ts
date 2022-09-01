import DatabaseService from '../../services/db.service';
import { Request, Response } from 'express';

export class Controller {
  async getShows(req: Request, res: Response): Promise<void> {
    try {
      const network_id = req.query['network_id']
        ? (req.query['network_id'] as string)
        : '';
      const package_id = req.query['package_id']
        ? (req.query['package_id'] as string)
        : '';
      const response = await DatabaseService.getShows(network_id, package_id);
      res.json(response);
    } catch (err) {
      throw err;
    }
  }
}
export default new Controller();
