import DatabaseService from '../../services/db.service';
import { Request, Response } from 'express';

export class Controller {
  async getPackages(req: Request, res: Response): Promise<void> {
    try {
      const package_id = req.params['id'];
      const response = await DatabaseService.getPackages(package_id);
      res.json(response);
    } catch (err) {
      throw err;
    }
  }
}
export default new Controller();
