import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('networks').del();

  // Inserts seed entries
  await knex('networks').insert([
    {
      name: 'CBS',
    },
    {
      name: 'CW',
    },
    {
      name: 'ABC',
    },
    {
      name: 'NBC',
    },
    {
      name: 'BET',
    },
    {
      name: 'Freeform',
    },
    {
      name: 'Nickelodeon',
    },
    {
      name: 'Bravo',
    },
    {
      name: 'HBO',
    },
    {
      name: 'Showtime',
    },
    {
      name: 'STARZ',
    },
  ]);
}
