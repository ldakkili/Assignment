import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('packages').del();

  // Inserts seed entries
  await knex('packages').insert([
    {
      name: 'Basic',
      networks: ['CBS', 'CW', 'ABC', 'NBC'],
      price: 9.9,
    },
    {
      name: 'Gold',
      networks: [
        'CBS',
        'CW',
        'ABC',
        'NBC',
        'BET',
        'Freeform',
        'Nickelodeon',
        'Bravo',
        'HBO',
        'Showtime',
        'STARZ',
      ],
      price: 37.9,
    },
    {
      name: 'Select',
      networks: [
        'CBS',
        'CW',
        'ABC',
        'NBC',
        'BET',
        'Freeform',
        'Nickelodeon',
        'Bravo',
      ],
      price: 17.9,
    },
    {
      name: 'Silver',
      networks: [
        'CBS',
        'CW',
        'ABC',
        'NBC',
        'BET',
        'Freeform',
        'Nickelodeon',
        'Bravo',
        'HBO',
        'Showtime',
      ],
      price: 27.9,
    },
  ]);
}
