import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('packages', (table) => {
    table.increments('id');
    table.string('name');
    table.specificType('networks', 'text ARRAY');
    table.float('price');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('packages');
}
