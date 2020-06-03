import Knex from 'knex';

export async function up(knex : Knex) {
    //criar tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.string('point_id').notNullable().references('id').inTable('points');
        table.string('item_id').notNullable().references('id').inTable('items');
    })
}

export async function down(knex : Knex) {
    //voltar atras (deletar tabela)
    return knex.schema.dropTable('point_items');
}