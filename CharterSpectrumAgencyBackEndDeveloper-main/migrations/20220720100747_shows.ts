import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('shows', (table) => {
    table.increments('id');
    table.string('title');
    table.string('network');
    table.float('imdbRating');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('shows');
}
