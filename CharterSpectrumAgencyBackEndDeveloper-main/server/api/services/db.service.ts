/* eslint-disable @typescript-eslint/no-explicit-any */
import l from '../../common/logger';
import db from '../../../data/db';

export class DatabaseService {
  async getShows(network_id: string, package_id: string): Promise<any> {
    l.info(
      `get shows with package_id ${package_id} and network_id ${network_id}`
    );
    const shows = await db.select('*').from('shows');
    if (network_id) {
      // GET Shows and filter by Network (ex: /shows?network_id=1)
      const network = await db
        .select('*')
        .from('networks')
        .where('id', network_id)
        .first();
      return network
        ? shows.filter((show) => show.network == network.name)
        : [];
    } else if (package_id) {
      // GET Shows and filter by Package (ex: /shows?package_id=1)
      const packageInfo = await db
        .select('*')
        .from('packages')
        .where('id', package_id)
        .first();
      return packageInfo
        ? shows.filter(
            (show) => packageInfo.networks.indexOf(show.network) != -1
          )
        : [];
    }
    return shows;
  }
  async getPackages(package_id: string): Promise<any> {
    l.info(`get packges with package_id ${package_id} `);
    if (package_id) {
      return db
        .select('*')
        .from('packages')
        .where('id', package_id)
        .then((rows: any) => rows);
    } else {
      return db
        .select('*')
        .from('packages')
        .then((rows: any) => rows);
    }
  }
}

export default new DatabaseService();
