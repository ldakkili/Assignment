/* eslint-disable @typescript-eslint/no-explicit-any */
import knex from 'knex';

import knexfile from '../knexfile';

const env = process.env.NODE_ENV || 'development';
const configOptions = (knexfile as any)[env];

export default knex(configOptions);
